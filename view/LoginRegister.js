Ext.define('mob.view.LoginRegister', {
    extend: 'Ext.TabPanel',
    xtype: 'loginregister',
	
	requires: [
		//'mob.view.ClientAccount',
		'mob.view.tablet.Login',
		'mob.view.tablet.Guest',
		'mob.view.tablet.Register'
    ],
	
    config: {
        //title: 'Login or Create a New Account',
        layout: {
            type: 'card',
            id: 'loginregister',
			animation:{
				type: 'flip'
			}
        },
		tabBarPosition: 'bottom',
		
        items: [
            {
                xtype: 'login',
				iconCls: 'action'
            },
			{
				xtype: 'register',
				iconCls: 'user'
			},
			{
				xtype: 'guest',
				iconCls: 'icon-pencil'
			}],
			listeners: {
                show: function(b, opts){
                	b._tabBar.setActiveTab(2);
                }
            }
    }


});
