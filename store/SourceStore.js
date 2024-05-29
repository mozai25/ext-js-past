Ext.define('mob.store.SourceStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Source'],
	
    config: {
        model: 'mob.model.Source',
        autoLoad: true,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/sources.json'
        }
    }
});
