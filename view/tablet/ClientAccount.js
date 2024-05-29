Ext.define('mob.view.tablet.ClientAccount', {
    extend: 'Ext.TabPanel',
    xtype: 'clientaccount',
	
	requires: [
        'mob.view.tablet.ClientAccountTrades',
        'mob.view.tablet.ClientAccountPassword',
        'mob.view.tablet.ClientAccountAddresses',
        'Ext.field.Email'
    ],
	
    config: {
        //title: 'Account',
        itemId: 'clientaccount',
        baseCls: 'x-client-account-view',
        layout: {
            type: 'card',
			animation:{
				type: 'flip'
			}
        },
		tabBarPosition: 'bottom',
		
        items: [
            {
                xtype: 'clientaccounttrades',
				itemId: 'clientaccounttrades',
				iconCls: 'info'
            },
			{
				xtype: 'clientaccountpassword',
				itemId: 'clientaccountpassword',
				iconCls: 'settings'
			},{
				xtype: 'clientaccountaddresses',
				itemId: 'clientaccountaddresses',
				iconCls: 'home'
			}]
    }


});
