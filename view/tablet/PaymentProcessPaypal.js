Ext.define('mob.view.tablet.PaymentProcessPaypal', {
    extend: 'Ext.form.Panel',
    xtype: 'paymentprocesspaypal',
	
	requires: [
        //'Ext.field.Password'
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		title: 'Paypal',
		itemId: 'add_paypal_form',
		scrollable: true,
        items: [
        {
        	xtype: 'panel',
        		//layout: 'vbox',
        		style:{
		        	'height': 'auto',
				   	'background-color': '#FFFFFF'
		        },
		        items:[
		        	
		        	{
		        		xtype: 'panel',
		        		style:{
				        	'height': 'auto'
				        },
		        		items:[
		        			{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 0px 10px 10px 10px;padding-top: 10px;">Payment Methods</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div class="payment_paypal_image_title">PayPal</div>',
				        		style:{
				        			'height':'60px',
				        			'float':'left',
				        			'color': '#14a9ea',
				        			'font-size': '20px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div class="payment_paypal_image"><ul style="margin: 0px 15px 10px; width: 70%;float: left;">'+
										'<li style="list-style: disc inside;">'+
											'PayPal funds sent within 48 hours of inspection'+
										'</li>'+
										'<li style="list-style: disc inside;">'+
											'Money in your PayPal account the same day of transfer'+
										'</li>'+
									'</ul>'+
									'<div style="float: left; width: 70%;">You must have a valid PayPal account set up in order receive payment this way</div></div>',
				        		style:{
				        			'float': 'left',
				        			'height': '125px',
				        			'font-size':'12px',
				        			'margin':'0px 15px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Choose where you want your payment sent:</div>',
				        		style:{
				        			'float': 'left',
				        			'height': '50px',
				        			'font-size':'12px',
				        			'margin':'0px 15px'
				        		}
				        	}]
		        	},
		        	
				    {
				    	xtype: 'panel',
				    	layout: 'vbox',
				    	items:[
				    		{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									//'width':'98%',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Paypal Email',
								//label: 'Paypal Email',
								name: 'email_address'
								//labelWidth: '50%'
							},
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									//'width':'98%',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Confirm Paypal Email',
								//label: 'Confirm Paypal Email',
								name: 'confirm_address'
								//labelWidth: '50%'
							},
							{
								xtype: "button",
								ui: "confirm",
								text: "Continue",
								margin: '15',
								padding: '10',
								itemId: 'submit_paypal_email'
						    }
				    	]
				    },{
						xtype: 'accountlinks'
					},
					{
						xtype: 'bottomareaclients'
					}
				]
        
        }]
    }
});
