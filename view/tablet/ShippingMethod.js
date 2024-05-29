Ext.define('mob.view.tablet.ShippingMethod', {
    extend: 'Ext.form.Panel',
    xtype: 'shippingmethod',
	
	requires: [
        //'Ext.field.Password'
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		//title: 'Choose Your Shipping Method',
		id: 'shipping_method_payment',
		baseCls: 'x-shipping-method-payment',
		
        items: [
        	{
	        	xtype: 'panel',
	    		layout: 'vbox',
	    		style:{
		        	'min-height': '400px',
				   	'background-color': '#FFFFFF'
		        },
		        items:[
		        	{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Shipping Options</div>'
		        	},
		        	{
		        		xtype: 'panel',
		        		html: '<div class="payment_check_image_title">Option 1</div>',
		        		style:{
		        			'height':'50px',
		        			'float':'left',
		        			'color': '#14a9ea',
		        			'font-size': '20px'
		        		}
		        	},
		        	{
		        		xtype: 'panel',
		        		html: '<div style="width:60%;float:left;margin: 0px 15px;">Print Your Own shipping Labels</div>',
		        		style: {
		        		
		        			'height':'60px',
		        			'font-size': '18px',
		        			'color':'#6b6b6b'
		        		}
		        	},
		        	{
		        		xtype: 'panel',
		        		html: '<div style="width:60%;float:left;">We email every customer a free shipping label and Packing Slip at checkout. Simply print your labels, affix them to any box and drop your package into any blue mailbox or bring it to your nearest Post Office<br /><br /><span style="color: #14a9ea;">Estimated Time of Delivery for Your Item to reach Us:</span> 2-4 business days from when you ship your item</div>',
		        		style: {
		        		
		        			'height':'200px',
		        			'font-size': '12px',
		        			'color':'#6b6b6b',
		        			'margin':'0px 15px'
		        		}
		        	},
		        	{
						xtype: "button",
						ui: "confirm",
						text: "Print Shipping Labels",
						id: 'request_free_kit',
						itemId: 'request_free_kit',
						style:{
							'font-size':'9px',
						    'margin': '10px !important',
						    'padding': '5px !important',
						    'position': 'absolute',
						    'right': '2px',
						    'top': '100px',
						    'width': '35%',
						    'height':'5%'
						}
					},
					{
		        		xtype: 'panel',
		        		html: '<div class="payment_paypal_image_title">Option 2</div>',
		        		id: 'own_free_kit_number',
		        		itemId: 'own_free_kit_number',
		        		style:{
		        			'height':'60px',
		        			'float':'left',
		        			'color': '#14a9ea',
		        			'font-size': '20px'
		        		}
		        	},
					{
		        		xtype: 'panel',
		        		html: '<div style="width:60%;float:left;margin: 0px 15px;">Use Our FREE Shipping Kit</div>',
		        		id: 'own_free_kit_title',
		        		itemId: 'own_free_kit_title',
		        		style: {
		        		
		        			'height':'60px',
		        			'font-size': '18px',
		        			'color':'#6b6b6b'
		        		}
		        	},
					{
		        		xtype: 'panel',
		        		html: '<div style="width:60%;float:left;">We\'ll send you a shipping kit including a padded envelope, bubble wrap and shipping label. Affix the supplied label to your BuyBackWorld padded envelop, place your item inside the bubble wrap protection pack and drop your package into any blue mailbox or bring it to your nearest Post Office.<br /><br /><span style="color: #14a9ea;">Estimated Time for Your Shipping Kit to Arrive:</span> 3-5 business days from when you checkout your item<br /><br /><span style="color: #14a9ea;">Estimated Time of Delivery for Your Item to Reach Us:</span> 2-4 business days from when you ship your item</div>',
		        		id: 'own_free_kit_subtitle',
		        		itemId: 'own_free_kit_subtitle',
		        		style: {
		        			'height':'320px',
		        			'font-size': '12px',
		        			'color':'#6b6b6b',
		        			'margin':'0px 15px',
		        			'float':'left'
		        		}
		        	},
					{
						xtype: "button",
						ui: "confirm",
						text: "Free Shipping Kit",
						id: 'own_free_kit',
						itemId: 'own_free_kit',
						style:{
							'font-size': '9px',
						    'margin': '10px !important',
						    'padding': '5px !important',
						    'position': 'absolute',
						    'right': '2px',
						    'top': '420px',
						    'width': '35%',
						    'height':'5%'
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
    },
    
    updateData: function(newData) {
    	
    	if(newData.Kit)
    	{
    		Ext.getCmp("own_free_kit_number").hide();
	    	Ext.getCmp("own_free_kit_title").hide();
	    	Ext.getCmp("own_free_kit_subtitle").hide();
	    	Ext.getCmp("own_free_kit").hide();
    	}else{
    		Ext.getCmp("own_free_kit_number").show();
	    	Ext.getCmp("own_free_kit_title").show();
	    	Ext.getCmp("own_free_kit_subtitle").show();
	    	Ext.getCmp("own_free_kit").show();
    	}
    }
});
