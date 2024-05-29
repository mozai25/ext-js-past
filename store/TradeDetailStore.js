Ext.define('mob.store.TradeDetailStore', {
    extend: 'Ext.data.Store',
	requires: ['mob.model.TradeDetails'],
	
    config: {
        model: 'mob.model.TradeDetails',
        autoLoad: false,
        //sorters: 'created',
    	loadingText: false,
        proxy: {
            type: 'ajax',
            url: '/app/json_adapter.php?action=trade_item_details'//'trades.json'//
            	
            	//
            	//
        		
        }
    }
});
