Ext.define('mob.view.tablet.BottomAreaClients', {
    extend: 'Ext.Panel',
    xtype: 'bottomareaclients',
	
    	config: {
        	
			scrollable: false,
			itemId: 'buy_top_area_container',
			height: '625px',
			items:[
			
			{
				xtype: 'panel',
				itemId: 'buy_top_area',
				style:{
					'height':'260px',
					'color':'#686868',
					'font-family':'Roboto, sans-serif',
				  	'text-align':'center',
				    'background-color':'#ffffff'
				},
				html: '<span style="font-weight: 800;float: left;font-size: 20px;margin: 15px 0;width: 100%;">Buy. Bye.</span><br />'+
					'<div style="font-size: 12px;text-align: center;padding: 0 10px;"><span>We’ve Paid Out Over $25 Million to Over 200,000 Happy Customers. Become One Today!</span></div><br />'+
					'<div class="reseller"><img src="/images/stars.jpg" alt=""></div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'150px',
					'color':'#686868',
				    'text-align':'center',
				    'background-color':'#ffffff'
				},
				items:[
					{
						xtype: 'carousel',
						itemId: 'carousel_links_feedback',
						cls: 'carousel_links_feedback_class',
						autoDestroy: false,
						style:{
							'height':'150px'
						},
						defaults: {
							styleHtmlContent: true
						},
						indicator: false,
						
						items: [{
								html : '<div class="quote-left"><img src="/images/quote-left-mobile.png" alt=""></div><div><p class="author-text">I received my envelope and information, mailed my phone back and a few days later a check arrived. Very fast and efficient. Very pleased. I will use BuyBackWorld again. Very Satisfied!</p><p class="author-name">Gail from Spokane, WA</p></div><div class="quote-bottom"><img src="/images/quote-right-mobile.png" alt=""/></div>'
							},{
								html : '<div class="quote-left"><img src="/images/quote-left-mobile.png" alt=""></div><div><p class="author-text">Simply the best way to safely sell your like new cell phones for the most money.</p><p class="author-name">Leonard from Red Banks, MS</p></div><div class="quote-bottom"><img src="/images/quote-right-mobile.png" alt=""/></div>'
							},{
								html : '<div class="quote-left"><img src="/images/quote-left-mobile.png" alt=""></div><div><p class="author-text">I am so happy I found this site. They offer great prices for your old/unwanted items. Fast payment and I always got exactly what was estimated. A+++++</p><p class="author-name">Tamara from Los Angeles, CA</p></div><div class="quote-bottom"><img src="/images/quote-right-mobile.png" alt=""/></div>'
							},{
								html : '<div class="quote-left"><img src="/images/quote-left-mobile.png" alt=""></div><div><p class="author-text">It was a breeze to go through the process of selling my phone. They were right on the money with the bid, and came through as advertised with the money. I would definitely use them again to sell an old phone.</p><p class="author-name">David from Modesto, CA</p></div><div class="quote-bottom"><img src="/images/quote-right-mobile.png" alt=""/></div>'
							}],
							//leftchange
							
							listeners: {
							
								activeitemchange: function(item, value, oldValue, eOpts){
								
									
								
								}
							
							}
						
						},{
							xtype:'button',
							cls: 'btn_left_class',
							//iconCls: 'icon-right',
							itemId: 'carousel-btn-left-feedback',
							width: '20px',
							height: '50px',
							style: {
								'left': '0',
								'position': 'absolute',
								'top': '55px'
							},
							align: 'left',
							listeners: {
								tap: function (list, index, item, record) {
									
									if(this.getParent().getParent().down("#carousel_links_feedback").getActiveIndex() == 0) {
										this.getParent().getParent().down("#carousel_links_feedback").setActiveItem(3);
									}else{
										this.getParent().getParent().down("#carousel_links_feedback").previous();
									}
								}
							}
						},{
							xtype:'button',
							cls: 'btn_right_class',
							itemId: 'carousel-btn-right-feedback',
							width: '20px',
							height: '50px',
							style: {
								'right': '0',
								'position': 'absolute',
								'top': '55px'
							},
							align: 'right',
							listeners: {
								tap: function (list, index, item, record) {
									
									if(this.getParent().getParent().down("#carousel_links_feedback").getActiveIndex() == 3) {
										this.getParent().getParent().down("#carousel_links_feedback").setActiveItem(0);
									}else{
										this.getParent().getParent().down("#carousel_links_feedback").next();
									}
								}
							}
						}
					],
					listeners:{
						initialize: function(obj, e) {
							
						}
					}
				
			},
			{
				xtype: 'panel',
				cls: 'bottom_feedback_btn',
				style:{
					'height':'120px',
					'padding-top':'30px',
					'text-align':'center',
				    'background-color':'#ffffff'
				},
				html:'<div class="fr btnbottom"><a href="https://www.resellerratings.com/store/Buybackworld_com" target="_blank" class="btn btn-green btn-learn">Read More Reviews</a></div>'
			},
			{
				xtype: 'panel',
				style:{
					'height':'100px',
					'background-color':'#e8e8e8',
					'border-top':'1px solid #929292',
					'padding':'15px 10px',
					'line-height':'18px',
					'font-size':'12px',
					'text-align':'center'
				},
				html:'&copy; Copyright 2009-'+(new Date().getFullYear())+' Dreven Holdings Group Inc. All Rights Reserved All brands and Trademarks found on www.buybackworld.com are property of their respective owners. <br /><a style="color:black;text-decoration:none;display:none;" class="full_site_link" href="/">Full Site</a><br />'
			}
		]
			
    }
		
});