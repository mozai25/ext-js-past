Ext.define('mob.view.tablet.GiftCard', {
    extend: 'Ext.form.FormPanel',
    xtype: 'gift_obj',
	
    requires: [
			'Ext.Img', 
			'mob.view.LoginRegister'
			],

    config: {
    	
        baseCls: 'gift-view',
        autoDestroy: false,
		fullscreen: true,
		type: 'formpanel',
		
		scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
        
        items: [
			{ 	
				xtype:'panel',
				layout: 'vbox',
				flex: 2,
				
				style:{
					'min-height': '250px',
				   	'background-color': '#b6b6b6'
				},
				items:[
					{ 	
						xtype:'panel',
						style:{
							'min-height': '190px',
						   	'padding': '5px',
						   	'margin': '10px',
				   			'background-color': '#FFFFFF'
						},
						layout: 'vbox',
						cls: 'panel_description',
						items:[
							{
								xtype: 'panel',
								style:{
									'width':'100%',
									'min-height':'50px',
									'text-align':'center'
								},
								html: '<span style="width: 100%;line-height:25px;font-size:16px;font-weight:bold;color:#01d2cf;">&nbsp;Your BuyBackWorld Instant Cash Quote</span>'
							},
							{
								xtype: 'panel',
								layout: 'hbox',
								style:{
									'width':'100%',
									'min-height':'100px'
								},
								items:[{
										xtype: 'image',
			        					cls: 'product_image_view',
			        					flex: 1
									},
									{
										xtype: 'panel',
										flex: 1,
										itemId: 'description',
										cls: 'description',
				        				tpl: new Ext.XTemplate(
				            				'<div style="width: 100%;" class="name">{Name}</div>',
				            				'<div class="text">'+
				            					'<input type="hidden" name="items_count" id="items_count" value="{GiftFinalCount}" />'+
				            					'<input type="hidden" name="items_price" id="items_price" value="{GiftFinalPrice}" />'+
				            					'<input type="hidden" name="items_init_price" id="items_init_price" value="{GiftInitPrice}" />'+
				            				'</div>',
											'<div style="width: 100%; margin-top: 10px;" id="balance_name_value"><span style="color: #6cc644;">Balance</span>: ${GiftInitPrice}</div>',
											'<div style="width: 100%; margin-top: 10px;" id="price_value">{GiftFinalPriceText}</div>'
				        				)
									}]
		    				},
			        		{
								xtype: "button",
								ui: "confirm",
								text: "Sell Now",
								padding: '10 0 10 0',
								cls: 'submit_order_btn',
								itemId: 'submit_gift',
								style:{
								    'margin': '10px',
								    'padding': '10px 0 !important'
								}
							},
							{
								xtype: "button",
								ui: "action",
								text: "Update My Balance",
								padding: '10 0 10 0',
								//cls: 'submit_order_btn',
								itemId: 'update_gift',
								style:{
								    'margin': '10px',
								    'padding': '10px 0 !important'
								}
							}]
						}]
		},
		{
			xtype: 'accountlinks'
		},
		{
			xtype: 'bottomareaclients'
		}
		
		]
    },

    initialize: function() {
		
        var image = this.down('image');
        image.on({
            scope: this,
            load: function() {
                image.element.dom.style.backgroundSize = "contain";
            },
            error: function() {
                image.element.dom.style.backgroundSize = "contain";
            }
        });
    },	

    updateData: function(newData) {
        
       	//console.log(newData);
       	
       	//image
       	var image = this.down('image');
        image.element.dom.style.backgroundSize = "30%";
        image.element.dom.style.backgroundImage = 'url(resources/images/loading.gif)';
        image.setSrc('');//
        image.setSrc('/thumb.php?file=product/' + newData.Picture);  //{Picture}&sizex=110&sizey=123
       	if(newData.GiftFinalCount > 1) 
       	{
       		newData.GiftFinalPriceText = newData.GiftFinalCount + ' x ' + '$' + newData.GiftFinalPrice;
       	}else{
       		newData.GiftFinalPriceText = '$' + newData.GiftFinalPrice;
       	}
       	this.down("#description").setData(newData);
    }
});
