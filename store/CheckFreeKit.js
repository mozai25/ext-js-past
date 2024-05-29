Ext.define('mob.store.CheckFreeKit', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.FreeKit'],
	
    config: {
    	model: 'mob.model.FreeKit',
        autoLoad: false,
    	loadingText: false,
        //sorters: 'name',
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=free_kit'
        }
    }
});