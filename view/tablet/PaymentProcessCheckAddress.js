Ext.define('mob.view.tablet.PaymentProcessCheckAddress', {
    extend: 'Ext.form.Panel',
    xtype: 'paymentprocesscheckaddress',
	
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
		        	'min-height': '450px',
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
				        	}]
		        	},
		        	{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Select A Saved Address:</div>',
		        		itemId: 'message_for_list_registered',
		        		id: 'message_for_list_registered',
		        		style:{
		        			'float': 'left',
		        			'height': '50px',
		        			'font-size':'12px',
		        			'margin':'0px 15px'
		        		}
		        	},
		        	{
						xtype: 'list',
						//flex: 1,
						id: 'addressListIDRegistered',
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
						    		//Ext.getCmp("message_for_list_registered").hide();
						    		//Ext.getCmp("message_for_list").hide();
						    	}else{
						    		//Ext.getCmp("message_for_list_registered").show();
						    		//Ext.getCmp("message_for_list").hide();
						    	}
						    	
			                }
			            }
			    	
					},
		        	{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Enter A New Address:</div>',
		        		itemId: 'message_for_list_not_or',
		        		id: 'message_for_list_not_or',
		        		style:{
		        			'float': 'left',
		        			'height': '50px',
		        			'font-size':'12px',
		        			'margin':'0px 15px'
		        		}
		        	},
		        	{
		        		xtype: 'panel',
		        		html: '<div style="color: #14a9ea; font-size: 16px; width: 100%;margin: 10px;">Or Enter A New Address:</div>',
		        		itemId: 'message_for_list',
		        		id: 'message_for_list',
		        		style:{
		        			'float': 'left',
		        			'height': '50px',
		        			'font-size':'12px',
		        			'margin':'0px 15px'
		        		}
		        	},
					{
						xtype: 'panel',
						itemId: 'verify_address_id',
				        id: 'verify_address_id',
						items:[
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'First Name',
								required: true,
								name: 'first_name_guest',
								itemId: 'first_name_guest'
							},
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Last Name',
								required: true,
								name: 'last_name_guest',
								itemId: 'last_name_guest'
							},
							{
								xtype: 'textfield',
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								},
								placeHolder: 'Address Line 1',
								required: true,
								name: 'verify_address1'
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
								name: 'verify_address2'
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
								name: 'verify_city'
							},{ 
								itemId: 'verify_selectstate',
								xtype: 'selectfield',
								placeHolder: 'Sorry, we could not get any value',
								valueField:'abbr',
								displayField:'state',
								label: 'State',
								labelWidth: '45%',
								store: 'StateStore',
								name: 'verify_state'
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
								name: 'verify_zip'
							},
							{
								xtype: "button",
								ui: "confirm",
								text: "Submit",
								margin: '15px 0px 15px 0px',
								padding: '5px 10px 5px 10px',
								itemId: 'verify_address'
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
    },
    updateData: function(newData) {
    	
    	
    }

});