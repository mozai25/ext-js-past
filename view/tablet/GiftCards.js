Ext.define('mob.view.tablet.GiftCards', {
    extend: 'Ext.form.Panel',
    xtype: 'giftcards',
	
	//
	
    config: {
        autoDestroy: true,
		fullscreen: true,
		baseCls: 'giftcards-view-window',
		title: 'Gift Cards',
		itemId: 'giftCardsForm',
    	scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
    		
        items: [
        	
        	{
	            xtype: 'fieldset',
	            title: 'SELECT YOUR GIFT CARD BRAND',
	            items: [
	                {
	                    xtype: 'selectfield',
	                    id: 'brandCardItems',
	                    itemId: 'brandCardItems',
	                    label: 'BRAND',
	                    valueField:'Id',
						displayField:'Description',
						store: 'BrandsStore'
	                },
	                {
	                    xtype: 'textfield',
	                    itemId: 'valueCardPrice',
	                    id: 'valueCardPrice',
	                    label: 'CARD VALUE'
	                },
	                {
	                    xtype: 'selectfield',
	                    itemId: 'brandCardCount',
	                    id: 'brandCardCount',
	                    label: 'QUANTITY',
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
						xtype: 'button',
				        text: 'Sell It Now',
				        ui: 'confirm',
				        itemId: 'sell_gifts_button',
				        cls: 'sell_gifts_button',
				        style:{
				        	'width':'99%',
				        	'height':'40px',
				        	'margin':'5px'
				        }
					},
					{
						xtype: 'panel',
						style:{
							'height':'auto',
							'margin':'10px 0px 20px 2px'
						},
						html:'<div style="font-size: 14px;text-align: center;padding: 0 10px; font-weight: bold;">'+
							'<a href="#gift-card-balance-check/">Search Our Directory</a>'+
							'</div>'
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
					'For your convenience, we always provide you with a FREE Shipping Label right after you complete your order so all you have to do is pack your gift cards up and drop them in any blue mailbox or give them to your local postal worker! If you prefer using your own shipping method, we recommend using USPS First Class Mail, USPS Priority Mail, or USPS Certified Mail.'+
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
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html: '<span style="float: left;font-size: 20px;margin: 15px 0;width: 100%;text-align: center;">Common Questions About Selling Your Gift Cards To BuyBackWorld</span><br />'+
					'<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<b>How do I sell my gift cards?</b><br />'+
					'All you need to do is select your gift card brand in the drop down above and enter its'+ 
					'current balance value to receive an instant cash buyback quote from us. If you accept'+ 
					'our instant quote, you can complete your checkout and then immediately receive a'+ 
					'FREE SHIPPING LABEL to mail BuyBackWorld your gift card. Once we receive your gift card,'+ 
					'we\'ll verify the value and issue payment through either check, PayPal, Direct Deposit, '+
					'PrePaid Debit Card or a BuyBackWorld.com gift card, whichever you prefer. '+
					'It really is that fast and easy to turn your unwanted gift cards into cash with BuyBackWorld!'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html: '<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<b>What kind of shipping method should I use to mail my gift cards in?</b><br />'+
					'For your convenience, we always provide you with a FREE Shipping Label right after you complete your order so all you have to do is pack your gift cards up and drop them in any blue mailbox or give them to your local postal worker! If you prefer using your own shipping method, we recommend using USPS First Class Mail, USPS Priority Mail, or USPS Certified Mail.'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html: '<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<b>How long does it take to get paid?</b><br />'+
					'Once your gift cards are received, their values are verified and your payment is issued within two business days of verification. Payment delivery times depend on the payment method you choose, but rest assured that you\'re always turning your unwanted gift cards into quick cash the fast and easy way with BuyBackWorld! Additionally, we always keep you posted at every step of the way via email so you\'ll always know the status of your transaction.'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html: '<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<b>Can I sell my store (merchandise) credit?</b><br />'+
					'Yes, you can get cash back for store credit IF (AND ONLY IF) the store credit is in the form of a physical plastic card and NEVER EXPIRES. Simply treat the store credit card as a gift card when selling your gift card on BuyBackWorld and we\'ll take care of the rest!'+
					'</div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'auto',
					'margin':'0px 0px 10px 0px'
				},
				html: '<div style="font-size: 12px;text-align: left;padding: 0 10px;">'+
					'<b>Why Should I Sell My Gift Cards Online for Cash to BuyBackWorld?</b><br />'+
					'Earn cash for gift cards with the BuyBackWorld gift card exchange program. You can easily sell your gift cards online and turn unwanted store credit into money. Our gift card buy back portal allows you to easily trade in your old and unwanted gift card for cash. We buy back cards from hundreds of different merchants and leading retailers such as Apple, Home Depot, Kohl\'s, Macy\'s, Target, and Walmart. You may have received a card as a gift from a store that you never intend on making a purchase from. Did you know that consumers in the U.S. allow billions of dollars in gift card spend or store credit to go unused annually? Don\'t let your unwanted gift cards sit idle and collect dust. Why not exchange that credit into cash that you can use to pay bills or buy something you actually want? '+
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
    }

});
