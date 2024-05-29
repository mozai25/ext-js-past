Ext.define('mob.view.tablet.AskWindow', {
    extend: 'Ext.form.Panel',
    xtype: 'askwindow',
	
	requires: [
        
    ],
    config: {
    	
        autoDestroy: false,
		fullscreen: true,
		//title: 'Thank You',
		itemId: 'choiceForm',
		cls: 'panel_main_thankyou',
			
		items: [
			
			{
        		xtype: 'panel',
        		html: '<div style="text-align: center;margin: 0px 15px;">SMART SELLING!</div>',
        		style: {
        			'height':'60px',
        			'font-size':'18px',
        			'color':'#6b6b6b',
        			'margin-top':'3%'
        		}
        	},
        	{
        		xtype: 'panel',
        		html: '<div style="text-align: center;margin: 0px 15px;">You have chosen to sell your <span style="font-weight: bold;" id="product_name_ask">product</span> for <span style="font-weight:bold;">$</span><span style="font-weight: bold;" id="product_name_price">0</span></div>',
        		style: {
        			'height':'60px',
        			'font-size': '14px',
        			'color':'#6b6b6b'
        		}
        	},
        	{
        		xtype: 'panel',
        		html: '<div style="text-align: center;margin: 0px 15px;">Before we proceed, would you like to sell another device and earn more cash?</div>',
        		style: {
        			'height':'60px',
        			'font-size': '14px',
        			'color':'#6b6b6b'
        		}
        	},
        	{
        		xtype: 'panel',
        		items: [
        			
        			{
						xtype: "button",
						ui: "confirm",
						text: "YES",
						id: 'ask_before_continue',
						itemId: 'ask_before_continue',
						style:{
							'font-size':'14px',
						    'margin': '10px !important',
						    'padding': '5px !important',
						    'width': '45%',
						    'height':'5%',
						    'float': 'left',
						    'padding': '5px', 
						    'margin-left': '3%', 
						    'margin-right': '3%', 
						    'margin-bottom': '3%' 
						}
					},
        			{
						xtype: "button",
						ui: "decline",
						text: "NO",
						id: 'no_before_continue',
						itemId: 'no_before_continue',
						style:{
							'font-size':'14px',
						    'margin': '10px !important',
						    'padding': '5px !important',
						    'width': '45%',
						    'height':'5%',
						    'padding': '5px', 
						    'margin-left': '3%', 
						    'margin-right': '1%', 
						    'margin-bottom': '3%'
						}
					}
        		]
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