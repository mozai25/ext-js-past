Ext.define('mob.view.tablet.PaymentProcessAddress', {
    extend: 'Ext.TabPanel',
    xtype: 'paymentprocessaddress',
	
	requires: [
        'mob.view.tablet.PaymentProcessCheckAddress',
        'mob.view.tablet.PaymentProcessPaypal',
        'Ext.Label'
    ],
	
    config: {
        //title: 'Choose How You Want To Be Paid',
        itemId: 'paymentprocess',
        baseCls: 'payment-process-view',
        
        layout: {
            type: 'card',
			animation:{
				type: 'flip'
			}
        },
		tabBarPosition: 'bottom',
		
        items: [
            {
                xtype: 'paymentprocesscheckaddress',
				iconCls: 'icon-check'
            },
			{
				xtype: 'paymentprocesspaypal',
				iconCls: 'icon-paypal'
			}]
    }


});
