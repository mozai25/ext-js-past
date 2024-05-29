Ext.define('mob.view.tablet.ShippingInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'shippinginfo',
	
	requires: [
        
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		itemId: 'shipping_process',
		baseCls: 'x-shipping-info-view',
    	layout: 'vbox',
    	id: 'shipping_info_form',
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
				        	'height': '120px'
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
				        		itemId: 'message_ship_list',
				        		id: 'message_ship_list',
				        		style:{
				        			'height': '50px',
				        			'margin':'0px 15px'
				        		}
				        	},{
				        		xtype: 'panel',
				        		html: '<div style="color: #00d2cf; font-size: 16px; width: 100%;margin: 10px;">Please press <span style="text-decoration:underline;color:blue;">"Address"</span> button above to add a new address</div>',
				        		itemId: 'message_empty_ship_list',
				        		id: 'message_empty_ship_list',
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
						itemId: 'shippingListID',
			        	cls: 'x-addresses',
						loadingText: false,
			        	store: 'ClientAddressStore',
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
						    		Ext.getCmp("message_ship_list").hide();
						    		Ext.getCmp("message_empty_ship_list").show();
						    	}else{
						    		Ext.getCmp("message_ship_list").show();
						    		Ext.getCmp("message_empty_ship_list").hide();
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