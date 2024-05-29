Ext.define('mob.view.tablet.UpdateConfirmPayment', {
    extend: 'Ext.TabPanel',
    xtype: 'updateconfirmpayment',
	
	requires: [
        'mob.view.tablet.UpdatePaymentProcessCheck',
        'mob.view.tablet.UpdatePaymentProcessPaypal',
        'Ext.Label'
    ],
	
    config: {
        //title: 'Choose How You Want To Be Paid',
        itemId: 'updateconfirmpayment',
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
                xtype: 'updatepaymentprocesscheck',
				iconCls: 'icon-check'
            },
			{
				xtype: 'updatepaymentprocesspaypal',
				iconCls: 'icon-paypal'
			}]
    }


});
