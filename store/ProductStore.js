Ext.define('mob.store.ProductStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Products'],
	
    config: {
        model: 'mob.model.Products',
        autoLoad: false,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=category'
        }
    }
});
