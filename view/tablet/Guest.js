Ext.define('mob.view.tablet.Guest', {
    extend: 'Ext.form.Panel',
    xtype: 'guest',
	
	//
	
	requires: [
        'Ext.field.Password'
    ],
	
    config: {
        autoDestroy: true,
		fullscreen: true,
		baseCls: 'login-view-window',
		title: 'Guest',
		itemId: 'guestForm',
    	scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
    		
        items: [
        	{
        		xtype: 'panel',
        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px 10px 0px 10px;">Check Out As A Guest to BuyBackWorld.com</div><br />'+
        			'<div style="text-align: center;font-size: 12px;margin: 0 10px 10px;">We\'ll use this email address to send you shipping details and progress updates every step of the way.</div>'
        	},
			{
				xtype: 'emailfield',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'User email',
				name: 'guest_user_email',
				itemId: 'guest_user_email',
				required: true
			},
			{
				xtype: 'emailfield',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Confirm User email',
				name: 'guest_user_email1',
				itemId: 'guest_user_email1',
				required: true
			},
			{
				xtype: "button",
				ui: "confirm",
				text: "Login As A Guest",
				margin: '15',
				padding: '10',
				itemId: 'submit_guest'
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
