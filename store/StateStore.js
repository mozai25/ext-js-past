Ext.define('mob.store.StateStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.State'],
	
    config: {
        model: 'mob.model.State',
        autoLoad: true,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/states.json'
        }
    }
});
