Ext.define('mob.store.PressStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.State'],
	
    config: {
        model: 'mob.model.Press',
        autoLoad: true,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/press.json'
        }
    }
});
