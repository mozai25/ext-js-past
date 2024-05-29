Ext.define('mob.store.NotMainCategoriesStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Categories'],
	
    config: {
        model: 'mob.model.Categories',
        autoLoad: true,
    	loadingText: false,
        //sorters: 'name',
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=category'
        }
    }
});
