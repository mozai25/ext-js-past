Ext.define('mob.view.tablet.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'register',
	
	requires: [
        'Ext.field.Password'
    ],
	
    config: {
        autoDestroy: true,
        baseCls: 'login-view-window',
		fullscreen: true,
		title: 'Register',
		scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
			
        items: [
        	{
        		xtype: 'panel',
        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px 10px 0px 10px;">New User</div><br />'+
        			'<div style="text-align: center;font-size: 12px;margin: 0 10px 10px;">Creating a BuyBackWorld account is fast and easy. Please complete the form below to create your account.</div>'
        	},
			{
				xtype: 'textfield',
				//labelWidth: '50%',
				//label: 'Email address',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Email address',
				name: 'email_address'
			},
			{
				xtype: 'textfield',
				//labelWidth: '50%',
				//label: 'Confirm Email',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Confirm Email',
				name: 'confirm_address'
			},{
				xtype: 'passwordfield',
				//labelWidth: '50%',
				//label: 'Password',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Password',
				name: 'user_password'
			},{
				xtype: 'textfield',
				//labelWidth: '50%',
				//label: 'First Name',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'First Name',
				name: 'first_name'
			},{
				xtype: 'textfield',
				//labelWidth: '50%',
				//label: 'Last Name',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Last Name',
				name: 'last_name'
			},
			{
				xtype: "button",
				ui: "confirm",
				text: "Register",
				margin: '15',
				padding: '10',
				itemId: 'submit_register'
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
