Ext.define('mob.store.PropertiesStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Property'],
	
    config: {
        model: 'mob.model.Property',
        autoLoad: false,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=category'
        }
    }
});
