Ext.define('mob.store.CategoriesStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Categories'],
	
    config: {
        model: 'mob.model.Categories',
        autoLoad: false,
    	loadingText: false,
        //sorters: 'name',
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=category'
        }
    }
});
