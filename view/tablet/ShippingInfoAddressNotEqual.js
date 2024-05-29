Ext.define('mob.view.tablet.ShippingInfoAddressNotEqual', {
    extend: 'Ext.form.Panel',
    xtype: 'shippinginfoaddressnotequal',
	
	requires: [
        
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		itemId: 'shipping_process_notequal',
		baseCls: 'x-shipping-info-view',
    	layout: 'vbox',
    	id: 'shipping_info_form_notequal',
    	//scrollable: null,
    	//title: 'Check',
    	items: [
    		{
    			xtype: 'panel',
    			layout: 'vbox',
        		style:{
		        	'min-height': '450px',
				   	'background-color': '#FFFFFF'
		        },
    			items:[
    				{
		        		xtype: 'panel',
		        		style:{
				        	'min-height': '230px'
				        },
				     	
				     	items:[
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Shipping Options</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="margin: 0px 15px 10px;">We need your address to create your shipping labels and to send you your FREE shipping kit</div>',
				        		style:{
				        			'font-size':'12px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Choose address to use for shipping labels:</div>',
				        		itemId: 'message_ship_list_notequal',
				        		id: 'message_ship_list_notequal',
				        		style:{
				        			'height': '50px',
				        			'margin':'0px 15px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #000000; font-size: 14px; width: 100%;margin: 10px; font-weight: bold;">Please confirm your address</div>',
				        		style:{
				        			'height': '30px',
				        			'margin':'0px 15px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #000000; font-size: 12px; width: 100%;margin: 10px;">We verify all addresses to ensure a fast and accurate experience for you</div>',
				        		style:{
				        			'height': '50px',
				        			'margin':'0px 15px'
				        		}
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #00d2cf; font-size: 16px; width: 100%;margin: 10px;">Please press <span style="text-decoration:underline;color:blue;">"Address"</span> button above to add a new address</div>',
				        		itemId: 'message_empty_ship_list_notequal',
				        		id: 'message_empty_ship_list_notequal',
				        		style:{
				        			'display': 'none',
				        			'float': 'left',
				        			'height': '50px',
				        			'font-size':'12px',
				        			'margin':'0px 15px'
				        		}
				        	}
				     	]		
				    },
    				{
						xtype: 'list',
						style:{
							'font-size':'12px',
							'height': '200px'
						},
						itemId: 'shippingNotequalListID',
						id: 'shippingNotequalListID',
			        	cls: 'x-addresses',
						loadingText: false,
			        	store: 'ClientAddressStoreVerified',
			        	itemTpl: [
			            	'<div class="name_check adjusted{ID}" style="font-weight: bold;">{Name}:</div>'+
			            	'<div class="name_address">{Address1} {Address2}</div>'+
			            	'<div class="name_address">{City}, {State}, {Zipcode}</div>'
			        	].join(''),
			        	
			        	listeners: {
			                refresh: function(obj, eOpts) {
			                	
			                	if(!obj.itemsCount)
						    	{
						    		Ext.getCmp("message_ship_list_notequal").hide();
						    		Ext.getCmp("message_empty_ship_list_notequal").show();
						    	}else{
						    		Ext.getCmp("message_ship_list_notequal").show();
						    		Ext.getCmp("message_empty_ship_list_notequal").hide();
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
    }

});