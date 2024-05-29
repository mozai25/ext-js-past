Ext.define('mob.view.tablet.ShippingInfoAddress', {
    extend: 'Ext.form.Panel',
    xtype: 'shippinginfoaddress',
	
	requires: [
        
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		itemId: 'shipping_process_address',
		baseCls: 'x-shipping-info-view',
    	layout: 'vbox',
    	id: 'shipping_info_form_address',
    	//scrollable: null,
    	//title: 'Check',
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
				        	}
				     	]		
				    },
    				
    				{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Select A Saved Address:</div>',
		        		itemId: 'message_ship_list_address_registered',
		        		id: 'message_ship_list_address_registered',
		        		style:{
		        			'height': '50px',
		        			'margin':'0px 15px'
		        		}
		        	},
		        	
		        	{
						xtype: 'list',
						style:{
							'font-size':'12px',
							'height': '200px'
						},
						id: 'shippingListIDRegistered',
						itemId: 'shippingListIDRegistered',
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
						    	//	Ext.getCmp("message_ship_list_address_registered").hide();
						    	}else{
						    	//	Ext.getCmp("message_ship_list_address_registered").show();
						    	}
						    	
			                }
			            }
					},
    				
    				{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Or Enter A New Address:</div>',
		        		itemId: 'message_for_list_registered_users',
		        		id: 'message_for_list_registered_users',
		        		style:{
		        			'float': 'left',
		        			'height': '50px',
		        			'font-size':'12px',
		        			'margin':'0px 15px'
		        		}
		        	},
		        	{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Enter A New Address:</div>',
		        		itemId: 'message_for_list_registered_users_or',
		        		id: 'message_for_list_registered_users_or',
		        		style:{
		        			'float': 'left',
		        			'height': '50px',
		        			'font-size':'12px',
		        			'margin':'0px 15px',
		        			'display':'none'
		        		}
		        	},
    				{
						xtype: 'panel',
						itemId: 'verify_ship_address_id',
				        id: 'verify_ship_address_id',
						items:[
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'First Name',
								required: true,
								name: 'first_name_ship_guest',
								itemId: 'first_name_ship_guest'
							},
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Last Name',
								required: true,
								name: 'last_name_ship_guest',
								itemId: 'last_name_ship_guest'
							},
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Address Line 1',
								required: true,
								name: 'verify_ship_address1'
							},
							{
								xtype: 'textfield',
								//label: 'Address Line 2',
								//labelWidth: '50%',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Address Line 2',
								required: false,
								name: 'verify_ship_address2'
							},{
								xtype: 'textfield',
								//label: 'City',
								//labelWidth: '50%',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'City',
								required: true,
								name: 'verify_ship_city'
							},{ 
								itemId: 'verify_select_ship_state',
								xtype: 'selectfield',
								placeHolder: 'Sorry, we could not get any value',
								valueField:'abbr',
								displayField:'state',
								label: 'State',
								labelWidth: '45%',
								store: 'StateStore',
								name: 'verify_ship_state'
							},
							{
								xtype: 'textfield',
								//label: 'Zip',
								//labelWidth: '50%',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Zip',
								required: true,
								name: 'verify_ship_zip'
							},
							{
								xtype: 'textfield',
								//label: 'Zip',
								//labelWidth: '50%',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Phone',
								required: false,
								name: 'verify_phone_number'
							},
							{
								xtype: "button",
								ui: "confirm",
								text: "Submit",
								margin: '15px 0px 15px 0px',
								padding: '5px 10px 5px 10px',
								itemId: 'verify_ship_address'
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
        ]
    }

});