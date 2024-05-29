Ext.define('mob.store.UsersStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.User'],
	
    config: {
        model: 'mob.model.User',
        autoLoad: false,
        //sorters: 'name',
    	loadingText: false,
        proxy: {
            type: 'ajax'
            /*
            api: {
                create: '/app/json_adapter.php?action=user&method=create',
                read: '/app/json_adapter.php?action=user&method=read',
                update: '/app/json_adapter.php?action=user&method=update',
                destroy: '/app/json_adapter.php?action=user&method=destroy'
            }
            */
        }
    }
	
	
	
	
});
