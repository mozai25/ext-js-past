Ext.define('mob.store.TopLinksStoreCategory', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Categories'],
	
    config: {
        model: 'mob.model.Categories',
        autoLoad: false,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=menu_items_categories'
        }
    }	
});
