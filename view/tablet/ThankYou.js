Ext.define('mob.view.tablet.ThankYou', {
    extend: 'Ext.form.Panel',
    xtype: 'thankyou',
	
	requires: [
        
    ],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		//title: 'Thank You',
		itemId: 'thankyouForm',
		cls: 'panel_main_thankyou',
    	
        items: [	
			{ 
			xtype:'panel',
			layout: 'vbox',
			cls: 'panel_description_thankyou',
			items:[
				
				{
					xtype: 'panel',
					itemId: 'thankyou_description',
					style:{
						'padding':'10px',
						'font-size':'12px'
					},
					cls: 'thankyou_description',
    				tpl: new Ext.XTemplate(
    					
						'<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1013155245/?value={totalOrderPrice}&amp;currency_code=USD&amp;label=G1oMCPPk6wEQrYuO4wM&amp;guid=ON&amp;script=0"/>'+
						'<img src="//bat.bing.com/action/0?ti=4050027&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" />'+
    					'<iframe src="https://sellmymobile.reliatrk.com/p.ashx?a=32&e=4&t={boxPS}&p={totalOrderPrice}" height="1" width="1" frameborder="0"></iframe>'+
    					'<img src="https://shareasale.com/sale.cfm?amount={totalOrderPrice}&tracking={boxPS}&transtype=SALE&merchantID=48351&storeID=1" width="1" height="1">'+
        				'<img src="https://spear.directtrack.com/i_sale/spear/51/:prod:{totalOrderPrice}:qty:1/{boxPS}/{boxObject.TotalCount}&sale_status=sale_pend" alt="image" height="1" width="1" style="display: none;" />'+
        				'<div class="thankyou-top"><span class="green-thankyou">Thank you,</span> {boxObject.UserObj.FirstName} {boxObject.UserObj.LastName}</div><div class="thankyou-site">For Choosing BuyBackWorld.com!<div style="background:none repeat scroll 0 0 #10A6E7;float:left;margin-top:20px;height:30px;width:100%;color: #FFFFFF;line-height: 30px;font-style: italic;text-align: center;"> What Happens Next:</div>'
    				)
				},
				{
					style:{
						'margin-top':'20px'
					},
    				xtype: 'panel',
    				html: '<div class="happen-content"><div class="img1"></div><h2>1. Check Your Email</h2></div>',
    				cls: 'thankyou_description1'
				},
				{
    				xtype: 'panel',
    				html: '<div class="happen-content"><div class="img2"></div><h2>2. Pack & Ship</h2></div>',
    				cls: 'thankyou_description2'
				},
				{
    				xtype: 'panel',
    				html: '<div class="happen-content"><div class="img3"></div><h2>3. Get Paid</h2></div>',
    				cls: 'thankyou_description3'
				}
				
				]
		}]
    },
    
    updateData: function(newData) {
        Ext.ComponentQuery.query('panel[itemId="thankyou_description"]')[0].setData(newData.raw);
        //
    	ga('require', 'ecommerce');
		ga('ecommerce:addTransaction', {
		  'id': newData.raw.boxPS, 
		  'revenue': newData.raw.totalOrderPrice
		});
		ga('ecommerce:send');
        //
    }

});
