Ext.define('mob.store.TopLinksStoreBrand', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Brands'],
	
    config: {
        model: 'mob.model.Brands',
        autoLoad: false,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=menu_items_brands'
        }
    }	
});
