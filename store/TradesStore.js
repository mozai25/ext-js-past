Ext.define('mob.store.TradesStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.Trade'],
	
    config: {
        model: 'mob.model.Trade',
        autoLoad: false,
        //sorters: 'created',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=trades_items'//'trades.json'//
            	
            	//
            	//
        		
        }
    }
});
