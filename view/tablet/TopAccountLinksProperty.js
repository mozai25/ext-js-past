Ext.define('mob.view.tablet.TopAccountLinksProperty', {
    extend: 'Ext.List',
    xtype: 'topaccountlinksproperty',
	
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
			itemId: 'top_account_property_place',
			cls: 'top_account_info_place',
			itemTpl: '{Value}',
		    data: 'mob.store.PropertiesStore'
    	}
		
});