Ext.define('mob.view.tablet.UpdateGiftPrice', {
    extend: 'Ext.form.Panel',
    xtype: 'update_gift_obj',
	
	//
	
    config: {
        baseCls: 'gift-view',
        autoDestroy: true,
		fullscreen: true,
		scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
        
        items: [
		{ 	
			xtype:'panel',
			style:{
				'min-height': '210px',
			   	'background-color': '#b6b6b6'
			},
			items:[
				{ 	
					xtype: 'fieldset',
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
		                    xtype: 'hiddenfield',
		                    name: 'gift_product_id',
		                    itemId: 'gift_product_id'
		                },
		                {
		                    xtype: 'hiddenfield',
		                    name: 'gift_brand_id',
		                    itemId: 'gift_brand_id'
		                },
						{
							//required: true,
							xtype: 'textfield',
							label: 'New Value',
							name: 'new_gift_value',
							itemId: 'new_gift_value',
							style:{
								'margin':'5px 15px 5px 15px',
								'border':'1px solid #dddddd'
							}
							//,placeHolder: 'New Value'
							//labelWidth: '50%'
						},
						{
		                    xtype: 'selectfield',
		                    itemId: 'gift_count_id',
		                    label: 'Quantity',
		                    style:{
								'margin':'5px 15px 5px 15px',
								'border':'1px solid #dddddd'
							},
		                    options: [
		                    	{text: '1', value: 1},
		                        {text: '2', value: 2},
		                        {text: '3', value: 3},
		                        {text: '4', value: 4},
		                        {text: '5', value: 5},
		                        {text: '6', value: 6},
		                        {text: '7', value: 7},
		                        {text: '8', value: 8},
		                        {text: '9', value: 9},
		                        {text: '10', value: 10}
		                    ]
		                },
						{
							xtype: "button",
							ui: "action",
							text: "Update My Balance Value",
							padding: '10 0 10 0',
							itemId: 'update_page_gift',
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
		],
		listeners : {
	        beforesubmit : function() {
	            return false;
	        }
	    }
    }
});
