Ext.define('mob.store.ClientAddressStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.ClientAddress'],
	
    config: {
        model: 'mob.model.ClientAddress',
        autoLoad: false,
    	loadingText: false,
        //sorters: 'name',
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=addresses'
        }
    }
});
