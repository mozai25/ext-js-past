Ext.define('mob.view.tablet.GiftCardBalance', {
    extend: 'Ext.form.Panel',
    xtype: 'giftcardbalance',
    
    requires: [
			'Ext.Img', 
			'mob.view.LoginRegister'
			],
    
    config: {
        autoDestroy: true,
		fullscreen: true,
		baseCls: 'giftcards-view-window',
		title: 'Gift Card Balance',
		itemId: 'giftCardBalanceForm',
    	scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
    		
        items: [
        	{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'10px 0px 10px 0px'
				},
				html:'<div style="font-size: 20px;text-align: center;padding: 0 10px;color: #0c9eef;">'+
						'Gift Card Balance Check'+
					'</div>'
			},
        	{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html:'<div style="font-size: 14px;text-align: center;padding: 0 10px;">'+
					'Looking to check the balance of your gift card? You are visiting the right place to find all the answers!'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html:'<div style="font-size: 14px;text-align: center;padding: 0 10px;">'+
					'After you have checked and verified your gift card balance, you can choose the sell gift card	option to sell any unwanted'+
					'leftover balance to BuyBackWorld. You can also choose to buy gift cards'+ 
					'from us at a discount to save even more money at all of your favorite retailers.'+ 
					'It\'s that fast and easy!'+
					'</div>'
			},
        	{
	            xtype: 'fieldset',
	            //title: 'Gift Card Balance Check',
	            items: [
	            	{
	                    xtype: 'selectfield',
	                    id: 'giftCardItems',
	                    itemId: 'giftCardItems',
	                    label: 'BRAND',
	                    valueField:'Id',
						displayField:'Description',
						store: 'BrandsStore'
	                },
	                {
						xtype: 'button',
				        text: 'Search Now',
				        ui: 'confirm',
				        itemId: 'sell_gift_balance_button',
				        cls: 'sell_gift_balance_button',
				        style:{
				        	'width':'99%',
				        	'height':'40px',
				        	'margin':'5px'
				        }
					}
	            ]
	        },
    		{
				xtype: 'panel',
				style:{
					'height':'120px',
					'background-color':'#b6b6b6',
					'padding':'15px 10px',
					'line-height':'18px',
					'font-size':'12px',
					'text-align': 'center'
				},
				html:'&copy; Copyright 2017 Dreven Holdings Group Inc. All Rights Reserved All brands and Trademarks found on www.buybackworld.com are property of their respective owners. <br /><a style="color:black;text-decoration:none;display:none;" class="full_site_link" href="/login">Full Site</a><br />'
			}
		    
        ]
    }
});
