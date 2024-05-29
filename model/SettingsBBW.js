Ext.define('mob.model.SettingsBBW',{
    extend:'Ext.data.Model',
    config:{
    	identifier: 'uuid',
        fields:['key','value'],
        proxy: {
            type: 'localstorage',
            id: 'LocalSettingsStore'
        }
    }
	
});
