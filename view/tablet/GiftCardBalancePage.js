Ext.define('mob.view.tablet.GiftCardBalancePage', {
    extend: 'Ext.form.Panel',
    xtype: 'giftcardbalancepage',
    
    requires: [
			'Ext.Img', 
			'mob.view.LoginRegister'
			],
    
    config: {
        autoDestroy: true,
		fullscreen: true,
		baseCls: 'giftcards-page-window',
		title: 'Gift Card Balance Page',
		itemId: 'giftCardBalancePage',
    	scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
    	items: [
        	{
	            xtype: 'fieldset',
	            items: [
	            	 {
	                    xtype: 'hiddenfield',
	                    name: 'balance_product_id',
	                    itemId: 'balance_product_id'
	                },
	                {
	                    xtype: 'hiddenfield',
	                    name: 'balance_category_id',
	                    itemId: 'balance_category_id'
	                },
	                {
	                    xtype: 'hiddenfield',
	                    name: 'balance_brand_id',
	                    itemId: 'balance_brand_id'
	                },
	            	{
						xtype: 'panel',
						itemId: 'page_title',
						cls: 'page_title_description',
						tpl: new Ext.XTemplate(
		    				'<div style="width: 100%; font-size: 18px; padding: 0px 0px;" class="name">Check Your {Brand.Description} Gift Card Balance</div>'
						)
					},
					{
						xtype: 'panel',
						itemId: 'page_under_title',
						cls: 'page_under_title_description',
						tpl: new Ext.XTemplate(
		    				'<div style="width: 100%; font-size: 14px;  padding: 0px 0px;" class="name">'+
		    				'Are you wondering what the balance of your <b>{Brand.Description}</b> gift card is '+ 
		    				'and how you can check it? Look no further - BuyBackWorld has the answer! '+ 
		    				'All you need to check your <b>{Brand.Description}</b> gift card balance is the card number '+
		    				'and PIN (if applicable). While you\'re here, be sure to check out all the great deals '+ 
		    				'on our discounted gift cards for sale or sell your <b>{Brand.Description}</b> gift card for cash now! '+
		    				'</div>'
						)
					},
					
					{
						xtype: 'panel',
						itemId: 'gift_details',
						cls: 'gift_details_css',
						iconCls: 'icon-goal',
						tpl: new Ext.XTemplate(
		    				'<div style="width: 100%; font-size: 14px;  padding: 0px 0px; text-align: center; margin: 5px 0px 0px 0px;" class="name">'+
		    					'<b>Website</b>: <a style="font-weight: bold; text-decoration: none;" href="{CardBalanceLink}">{CardBalanceLink}</a>'+
		    				'</div>'+
		    				'<div style="width: 100%; font-size: 14px;  padding: 0px 0px; text-align: center; margin: 5px 0px 5px 0px;" class="name">'+
		    					'<b>Phone</b>: <a style="font-weight: bold; text-decoration: none;" href="tel:{CardBalanceCheck}">{CardBalanceCheck}</a>'+
		    				'</div>'
						)
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
	        					flex: 1,
	        					style:{
									'width':'100%',
									'min-height':'150px'
								}
							}]
    				},
	                {
						xtype: 'button',
				        text: 'Sell Now',
				        ui: 'confirm',
				        itemId: 'sell_now_balance_button',
				        cls: 'sell_now_balance_button',
				        style:{
				        	'width':'99%',
				        	'height':'40px',
				        	'margin':'5px 0px 5px 0px'
				        }
					},
	                {
						xtype: 'button',
				        text: 'Buy Now',
				        ui: 'action',
				        itemId: 'buy_now_balance_button',
				        cls: 'buy_now_balance_button',
				        style:{
				        	'width':'99%',
				        	'height':'40px',
				        	'margin':'5px 0px 5px 0px'
				        },
				        handler: function() {
				        	window.location = 'https://store.buybackworld.com/buy-gift-cards';
				        }
					}
	            ]
	        },
	        {
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html:'<span style="float: left;font-size: 20px;margin: 15px 0;width: 100%;text-align: center;">How Selling Your Gift Card for Cash to BuyBackWorld Works</span><br />'+ 
					'<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<span style="color: #6cc644;"><b>STEP 1: GET AN INSTANT QUOTE</b></span><br />'+
					'Tell us which gift cards you want to sell and we\'ll give you an upfront instant cash quote to buy them.'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html:'<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<span style="color: #6cc644;"><b>STEP 2: SHIP YOUR GIFT CARDS FOR FREE</b></span><br />'+
					'Mail your gift cards to us for FREE using our prepaid shipping label. It doesn\'t cost you anything!'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 20px 0px'
				},
				html:'<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<span style="color: #6cc644;"><b>STEP 3: GET PAID CASH</b></span><br />'+
					'Once we receive your gift cards and verify the amounts, we\'ll issue your payment. It\'s that Fast and Easy!'+
					'</div>'
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
    },
    
    initialize: function() {
		
		console.log("init function");
		
        var image = this.down('image');
		
		console.log(image);
		
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
        
        console.log(newData);
        
		var image = this.down('image');
		
        image.element.dom.style.backgroundSize = "30%";
        image.element.dom.style.backgroundImage = 'url(resources/images/loading.gif)';
        image.setSrc('');//
        image.setSrc('/thumb.php?file=product/' + newData.Picture);  //{Picture}&sizex=110&sizey=123
        
    	this.down("#page_under_title").setData(newData);//
    	this.down("#page_title").setData(newData);//
    		
    	if(newData.CardBalanceLink == '') {
    		newData.CardBalanceLink = 'N/A'
    	}
    	
    	this.down("#gift_details").setData(newData);//
   	}
    
});
