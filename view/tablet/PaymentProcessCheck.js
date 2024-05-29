Ext.define('mob.view.tablet.PaymentProcessCheck', {
    extend: 'Ext.form.Panel',
    xtype: 'paymentprocesscheck',
	
	//
	
	requires: [
        
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		itemId: 'payment_process',
    	scrollable: true,
    	title: 'Check',
    	id: 'add_check_form',
    	
        items: [
        	{
        		xtype: 'panel',
        		layout: 'vbox',
        		style:{
		        	'min-height': '650px',
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
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Payment Methods</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div class="payment_check_image_title">Check</div>',
				        		style:{
				        			'height':'50px',
				        			'float':'left',
				        			'color': '#14a9ea',
				        			'font-size': '20px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div class="payment_check_image"><ul style="margin: 0px 15px 10px; width: 70%;float: left;">'+
										'<li style="list-style: disc inside;">'+
											'Checks sent within 48 hours of inspection'+
										'</li>'+
										'<li style="list-style: disc inside;">'+
											'All checks are sent via USPS First Class mail'+
										'</li>'+
									'</ul>'+
									'<div style="float: left; width: 70%;">Your check will be made payable to the name registered on your BuyBackWorld account and can be cashed at any financial institution in the United States</div></div>',
				        		style:{
				        			'float': 'left',
				        			'height': '160px',
				        			'font-size':'12px',
				        			'margin':'0px 15px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Choose where you want your payment sent:</div>',
				        		itemId: 'message_for_list',
				        		id: 'message_for_list',
				        		style:{
				        			'float': 'left',
				        			'height': '50px',
				        			'font-size':'12px',
				        			'margin':'0px 15px'
				        		}
				        	},{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Please press <span style="text-decoration:underline;color:blue;">"Address"</span> button above to add a new address</div>',
				        		itemId: 'message_empty_for_list',
				        		id: 'message_empty_for_list',
				        		style:{
				        			'display': 'none',
				        			'float': 'left',
				        			'height': '50px',
				        			'font-size':'12px',
				        			'margin':'0px 15px'
				        		}
				        	}]
		        	},
					{
						xtype: 'list',
						//flex: 1,
						id: 'addressListID',
			        	cls: 'x-addresses',
						loadingText: false,
			        	store: 'ClientAddressStore',
			        	style:{
							'font-size':'12px',
							'min-height': '200px',
							'max-height': '200px'
						},
			        	itemTpl: [
			            	'<div class="name_check" style="font-weight:bold;">{Name}:</div>'+
			            	'<div class="name_address">{Address1},</div>'+
			            	'<div class="name_address">{Address2}</div>'+
			            	'<div class="name_address">{City}, {State}, {Zipcode}</div>'
			            ].join(''),
			        	 listeners: {
			                refresh: function(obj, eOpts) {
			                	
			                	if(!obj.itemsCount)
						    	{
						    		Ext.getCmp("message_for_list").hide();
						    		Ext.getCmp("message_empty_for_list").show();
						    	}else{
						    		Ext.getCmp("message_for_list").show();
						    		Ext.getCmp("message_empty_for_list").hide();
						    	}
						    	
			                }
			            }
			    	
					},
					{
						xtype: 'accountlinks'
					},
					{
						xtype: 'bottomareaclients'
					}
        			
        		]
        	}
        	
        ]
    },
    updateData: function(newData) {
    	
    	
    }

});