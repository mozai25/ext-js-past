Ext.define('mob.view.ClientAccount', {
    extend: 'Ext.TabPanel',
    xtype: 'clientaccount',
	
	/*requires: [
        'mob.view.tablet.ClientAccountTrades'
    ],*/
	
    config: {
        title: 'Account',
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
				//xtype: 'register',
				itemId: 'clientaccountaddresses',
				title: 'Addresses',
				iconCls: 'compose',
				html: 'user addresses will be here'
			}]
    }


});
