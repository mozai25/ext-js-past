Ext.define('mob.view.tablet.TopAccountLinksCategory', {
    extend: 'Ext.List',
    xtype: 'topaccountlinkscategory',
	
    	config: {
    		modal: true,
    		left: 0,
           	top: 0,
           	width: '100%',
           	height: '90%',
           	hideOnMaskTap: false,
        	scrollable: {
                scroller: {
                    direction: 'vertical'
                }
            },
			onItemDisclosure: true,
			preventSelectionOnDisclose: true,
			itemId: 'top_account_category_place',
			cls: 'top_account_info_place',
			itemTpl: 'Sell {Description}',
		    data: 'mob.store.TopLinksStoreCategory'
    	}
		
});