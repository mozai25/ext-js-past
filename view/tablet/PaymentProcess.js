Ext.define('mob.view.tablet.PaymentProcess', {
    extend: 'Ext.TabPanel',
    xtype: 'paymentprocess',
	
	requires: [
        'mob.view.tablet.PaymentProcessCheck',
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
                xtype: 'paymentprocesscheck',
				iconCls: 'icon-check'
            },
			{
				xtype: 'paymentprocesspaypal',
				iconCls: 'icon-paypal'
			}]
    }


});
