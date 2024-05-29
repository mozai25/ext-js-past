Ext.define('mob.store.SettingsStoreBBW',{
    extend: 'Ext.data.Store',
    requires: ['mob.model.SettingsBBW'],
    
	config:{
        model:'mob.model.SettingsBBW',
        proxy: {
            type: 'localstorage',
            id: 'LocalSettingsStore'
        },
        autoLoad:true
    },
	
	setCookie : function (c_name,value) {
		//var _store = Ext.StoreManager.lookup("SettingsStoreBBWId");
        var model,i = this.findExact('key',c_name);
        if(value !== undefined)
        {
            if(i!==-1)
                {
                    //update
                    model = this.getAt(i);
                    model.set('value',value);
                    this.sync();

                }else{
                    //add
                    this.add({key:c_name,value:value});
                    this.sync();

                }
        }else{
            //if exists and new value is undefined remove it
            if(i!==-1)
               this.removeCookie(c_name);
        }
    },
	
    getCookie : function(c_name)
    {
        var i = this.findExact('key',c_name);
        if(i!==-1)
        {
            return this.getAt(i).get('value');
        }
        return undefined;
    },

    removeCookie : function(c_name)
    {
        var i = this.findExact('key',c_name);
          if(i!==-1)
        {
            this.removeAt(i);
            this.sync();
        }
    }
});