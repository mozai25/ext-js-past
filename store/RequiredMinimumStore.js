Ext.define('mob.store.RequiredMinimumStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.RequiredMinimumResult'],
	
    config: {
        model: 'mob.model.RequiredMinimumResult',
        autoLoad: false,
    	loadingText: false,
        //sorters: 'name',
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=minimum_result'
        }
    }
});
