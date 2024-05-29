Ext.define('mob.view.tablet.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
	
	//
	
	requires: [
        'Ext.field.Password'
    ],
	
    config: {
        autoDestroy: true,
		fullscreen: true,
		baseCls: 'login-view-window',
		title: 'Login',
		itemId: 'loginForm',
    	scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
    		
        items: [
        	{
        		xtype: 'panel',
        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px 10px 0px 10px;">Login to BuyBackWorld.com</div><br />'+
        			'<div style="text-align: center;font-size: 12px;margin: 0 10px 10px;">We\'ll use this email address to send you shipping details and progress updates every step of the way.</div>'
        	},
			{
				xtype: 'textfield',
				//label: 'User email',
				//labelWidth: '50%',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'User email',
				name: 'login_user_email',
				itemId: 'login_user_email',
				required: true
			},
			{
				xtype: 'passwordfield',
				//label: 'User password',
				//labelWidth: '50%',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'User password',
				name: 'login_user_password',
				itemId: 'login_user_password',
				required: true
			},	
			{
				xtype: "button",
				ui: "confirm",
				text: "Login",
				margin: '15',
				padding: '10',
				itemId: 'submit_login'
		    },
		    {
				xtype: 'accountlinks'
			},
			{
				xtype: 'bottomareaclients'
			}
		    
		    
		    
        ]
    }

});
