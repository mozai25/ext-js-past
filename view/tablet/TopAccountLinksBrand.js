Ext.define('mob.view.tablet.TopAccountLinksBrand', {
    extend: 'Ext.List',
    xtype: 'topaccountlinksbrand',
	
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
			itemId: 'top_account_brand_place',
			cls: 'top_account_info_place',
			itemTpl: '{Description}',
			data: 'mob.store.BrandsStore'
    	}
});