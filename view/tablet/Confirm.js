Ext.define('mob.view.tablet.Confirm', {
    extend: 'Ext.form.Panel',
    xtype: 'confirmmethod',
	
	requires: [
        'mob.view.DisplayFieldComponent',
        'mob.view.DisplayField',
        'Ext.form.FieldSet'
    ],
	
    config: {
    	scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
        autoDestroy: false,
		fullscreen: true,
		//title: 'Confirm the Following Information',
		itemId: 'confirm_method',
		//layout: 'vbox',
		baseCls: 'confirm-view-class',
		
        items: [
        		
        		{
	        		xtype: 'panel',
	        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Confirm Information</div>'
	        	},
	    		{
		        	xtype: 'fieldset',
	                title: 'Contact Email',
	                items:[	
	                	/*
				        {
				        	xtype: 'displayField',
				        	label: 'Contact Email',
				        	displayText: 'All emails about your order will be sent here'
				        },
				        */
				        {
							xtype: 'panel',
							itemId: 'confirm_email',
							//id: 'confirm_email',
							//cls: 'x-field-input',
							style: {
								'padding':'10px',
								'width':'100%'
							},
							tpl: new Ext.XTemplate(
			    				'<div class="name">{Email}</div>'
							)
						}
				       ]
					},
				   	{
				   		xtype: 'fieldset',
	                	title: 'Payment Information',
	                	items:[	
	                		/*
					        {
				        		xtype: 'displayField',
				        		label: 'Payment Information',
				        		displayText: 'We\'ll use this method of payment'
				        	},
					        */
					        {
								xtype: 'panel',
								itemId: 'payment_info',
								//id: 'payment_info',	
								cls: 'x-field-input',
								style: {
									'padding':'10px',
									'width':'100%'
								},
								tpl: new Ext.XTemplate(
				    				'<div class="name">{Payment}</div>'
								)
							}
				   		]				   		   
				   	},
				   	{
				   		xtype: 'fieldset',
	                	title: 'Payment address',
	                	items:[
					        {
								xtype: 'panel',
								itemId: 'payment_address',
								//id: 'payment_address',
								cls: 'x-field-input',
								style: {
									'padding':'10px',
									'width':'100%'
								},
								tpl: new Ext.XTemplate(
				    				//'<div class="name_confirm">{Name}</div>',
				    				'<div class="name_confirm">{Address1}</div>',
				    				'<div class="name_confirm">{Address2}</div>',
				    				'<div class="name_confirm">{City}</div>',
				    				'<div class="name_confirm">{State}</div>',
				    				'<div class="name_confirm">{Zipcode}</div>'
								)
							}
				   		]
				   },
				   {
				   		xtype: 'fieldset',
	                	title: 'Shipment address',
	                	items:[
					        {
								xtype: 'panel',
								itemId: 'shipping_address',
								//id: 'shipping_address',
								cls: 'x-field-input',
								style: {
									'padding':'10px',
									'width':'100%'
								},
								tpl: new Ext.XTemplate(
				    				//'<div class="name_confirm">{Name}</div>',
				    				'<div class="name_confirm">{Address1}</div>',
				    				'<div class="name_confirm">{Address2}</div>',
				    				'<div class="name_confirm">{City}</div>',
				    				'<div class="name_confirm">{State}</div>',
				    				'<div class="name_confirm">{Zipcode}</div>'
								)
							}
				   		]
				   	},
					{
				   		xtype: 'fieldset',
	                	title: 'How Did you hear about us?',
	                	items:[	
					        { 
								itemId: 'selectsource',
								//labelWidth: '60%',
								//id: 'selectsource',
								xtype: 'selectfield',
								placeHolder: 'Sorry, we could not get any value',
								valueField:'id',
								displayField:'source',
								//label: 'Let us know how you hear about us',
								store: 'SourceStore',
								name: 'source'
							}
				   		]				   		   
				  	},
				  	
				  	{	
				   		xtype: 'fieldset',
	                	title: '',
	                	cls: 'x-fieldset-custom',
	                	itemId: 'fieldset_promo_code',
	                	name: 'fieldset_promo_code',
	                	items:[	
	                			{
	                				xtype: 'button',
				                   	flex: 1,
			                        ui: 'confirm',
			                        text: 'Enter a Promo Code',
			                       	//icon: true,
                					iconCls: 'icon-bullhorn',
                					style: 'margin-bottom: 5px',
			                        listeners:{
		                        		tap: {
									       	
									   		fn: function() {
									     		(Ext.select(".x-fieldset-custom")).removeCls('x-fieldset-custom');
					                			Ext.getCmp("enter_promocode").show(); 
									        }
									   	}
									}
	                			},
	                			{
				                	xtype: 'panel',
				                	width: '100%',
				                	style: 'display:none',
				                	itemId: 'enter_promocode',
				                	id: 'enter_promocode',
				                	layout: {
				                    	type: 'hbox'
				                	},
				                	items: [
		                			{
									    xtype: 'textfield',
									    flex: 2,
	                    				name: 'enter_promocode_text',
									    itemId: 'enter_promocode_text',
									    id: 'enter_promocode_text',
									    placeHolder: 'Promo Code'
									},
									{
				                        xtype: 'button',
				                        flex: 1,
				                        ui: 'confirm',
				                        text: 'Apply',
				                        listeners:{
				                        	 tap: {
										        fn: function() {
										        	
										        	var bbwStore = Ext.getStore('SettingsStoreBBW');
		        									user = bbwStore.getCookie("user");
										        	
										        	Ext.Ajax.request({
													    url: 'json_adapter.php',
													    params: {
													        code_apply: Ext.getCmp("enter_promocode_text").getValue(),
													        user_id: user.Id
													    },
													    success: function(response){
													        var text = response.responseText;
													        Ext.Msg.alert('Promo Code', text, Ext.emptyFn);
													    }
													});
										        },
										        element: 'element'
										    }
				                        }
				                    }
								]
							}
						]
					},
					
					{	
				   		xtype: 'fieldset',
	                	title: '<span style="text-decoration: underline; color:#0c9eef;" class="view_items_promo">View The Items I’m Selling</span>',
	                	cls: 'x-fieldset-custom-popup',
	                	itemId: 'fieldset_view_items',
	                	name: 'fieldset_view_items',
	                	style: 'text-align: center',
	                	listeners:[ 
	                		{
					            element: 'element',
					            delegate: 'span.view_items_promo',
					            event: 'tap',
					            fn: function() {
					                
					                var reuse_items = mob.app.application.getController('mob.controller.tablet.Category');
					                reuse_items.onBoxItemsButton();
					                
					            }	
					        }
	                	]
	                },
					
				  	{
				   		xtype: 'fieldset',
	                	title: 'Terms of Services',
	                	items:[			
						  	{
					            xtype: 'checkboxfield',
					            //labelWidth: '80%',
					            name: 'terms',
					            itemId: 'terms',
					            //id: 'terms',
					            value: '1',
					            //label: 'I have read and agree to the terms and conditions',
					            checked: false,
					            style:{
					            	'width':'100%'
					            }
					        }]				   		   
				  	},
				  	{
						xtype: "button",
						ui: "confirm",
						text: "Submit",
						margin: '15px',
						padding: '10px',
						id: 'confirm_submit_order',
						itemId: 'confirm_submit_order'					
				    },
				    {
						xtype: 'accountlinks',
						style: {
						    'height': '237px'
						}
					},
					{
						xtype: 'bottomareaclients'
					}
				    
				    
				    	
        ]
    },
    
    initialize: function() {
    
    	//console.log("confirm init");	
    
    },
    
    updateData: function(newData) {
    	
    	this.down("#confirm_email").setData(newData);
    	if(newData.PaypalEmail == '')
    	{
    		this.down("#payment_info").setHtml("Check");
    	}else{
    		this.down("#payment_info").setHtml("PayPal");	
    	}
    	for(var a = 0; a < newData.ClientAddresses.length; a++)
    	{
    		if(newData.ClientAddresses[a].PaymentFlag == 1)
    		{
    			this.down("#payment_address").setData(newData.ClientAddresses[a]);
    		}
    		if(newData.ClientAddresses[a].ShippingFlag == 2)
    		{
    			this.down("#shipping_address").setData(newData.ClientAddresses[a]);
    		}
    	}
    	this.down("#selectsource").setValue(newData.HeardSource);
    	if(newData.Confirm != null && !newData.Confirm.pass)
    	{
    		Ext.Msg.show({
				title: 'Alert',
				message: newData.Confirm.answer,
				buttons: Ext.MessageBox.OK,
				modal: false,
				autoDestroy: true,
				fn: function(buttonId) {}
			});
			Ext.getCmp("confirm_submit_order").hide();
    	}else{
    		Ext.getCmp("confirm_submit_order").show();
    	}
    }
});
