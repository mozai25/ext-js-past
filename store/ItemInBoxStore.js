Ext.define('mob.store.ItemInBoxStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.ItemInBox'],
	
    config: {
        model: 'mob.model.ItemInBox',
        autoLoad: false,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=items_in_box'
        }
    }
});
