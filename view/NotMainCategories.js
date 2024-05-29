Ext.define('mob.view.NotMainCategories', {
    extend: 'Ext.Panel',//Carousel
    xtype: 'notmaincategoriespage',
	
    	config: {
        	
			scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },
			id: 'not_main_panel_scroll_menu',
			//layout:  'fit',
			
			items:[
			{
				xtype: 'panel',
				layout:  'vbox',
				style:{
					'background-color': '#FFFFFF',
				    'height': '100%',
				    'margin': '0 auto',
				    'overflow': 'hidden',
				    'width': 'auto',
				    'text-align':'center'
				},
				items:[
					{
						xtype:'panel',
						items:[
							{
								xtype: 'panel',
								html: '<div class="home_mobile_image">'+
										'<div><span style="font-size:15px;">Select Your Device For An Instant Quote.</span> BuyBackWorld purchases over 10,000 items in over 20 categories.</div>'+
										'<div style="font-size: 22px; margin-top: 5px;">Sell Your iPhone Today</div>'+
									'</div>'
								
							},	
							{
								xtype: 'button',
						        text: 'Sell Now',
						        //badgeText: 'New',
						        ui: 'confirm',
						        itemId: 'front_iphone_button',
						        cls: 'sell_iphone_now_btn',
						        style:{
						        	'width':'200px',
						        	'height':'40px',
						        	'margin':'5px auto 0 auto'
						        }
							}
						],
						style:{
							'height':'315px',
							'background': 'url("/images/iphone-home.png") no-repeat scroll 50% 105% #21b0ed'
						}
					},
					{
						xtype: 'panel',
						html: 'Select Your Item Below For An Instant Quote',
						style:{
							'background-color': '#00D24B',
						    'box-shadow': '5px 5px 7px #037F7D',
						    'color': '#FFFFFF',
						    'font-size': '14px',
						    'font-weight': 'bold',
						    'height': '40px',
						    'line-height': '40px',
						    'margin-left': 'auto',
						    'margin-right': 'auto',
						    'margin-top': '-25px',
						    'overflow': 'hidden',
						    'width': '95%',
						    'z-index': '100'
						}
					},
					{
						xtype: 'panel',
						id: 'carousel_not_main_container',
						
						items:[
							{
								xtype: 'carousel',
								cls: ["x-categories-item-front"],
								itemId: 'notmain_categories_page',
								id: 'notmain_categories_page',
								baseCls: 'x-categories',
								loadingText: false,
								indicator: false
							}
						],
						
						style:{
							'background-color':'#ffffff',
							'position':'relative',
							'margin-top':'-15px'
						}
					},	
					{
						xtype: 'panel',
						html: '(Scroll left or right to sell other items)',
						style:{
							'background-color':'#ffffff',
							'text-align':'center',
							'margin-top':'5px',
							'margin-bottom':'5px',
							'font-size':'12px',
							'color':'black',
							'font-style':'italic'
						}
					},
					{
						xtype: 'panel',
						style:{
							'width':'100%',
							'height':'151px',
							'background-color':'#14a9ea'
						},//margin: auto;position: absolute;top: 0;left: 0;bottom: 0;right: 0;
						html: '<div class="main_why_bbw">'+
								'<div class="what_bbw"><div style="display: table-cell;height: 50px;vertical-align: middle;">What is BuyBackWorld?</div></div>'+
								'<div class="sell_to_bbw"><div style="display: table-cell;height: 50px;vertical-align: middle;">What Can I Sell to BuyBackWorld?</div></div>'+
								'<div class="why_to_bbw"><div style="display: table-cell;height: 50px;vertical-align: middle;">Why Should I Sell to BuyBackWorld?</div></div>'+
							'</div>'
					},
					{
						xtype: 'panel',
						style:{
							'font-size':'16px',
							'color':'#696969',
							'height':'60px',
							'line-height':'60px',
							'border-bottom':'1px solid #CCCCCC'
						},
						html: '<div>BuyBackWorld as seen on</div>'
						
					},
					{
						xtype: 'panel',
						style:{
							'height':'100px'
						},
						items:[
							{
								xtype: 'carousel',
								id: 'carousel_links_notmain',
								style:{
									'height':'100px'
								},
								defaults: {
							        styleHtmlContent: true
							    },
							    indicator: false,
							    items: [{
							            html : '<a href="http://www.forbes.com/sites/davidewalt/2012/09/21/at-iphone-5-launch-in-new-york-its-all-about-marketing/" target="_blank"><div class="forbes"></div></a>'+
							            		'<a href="http://techcrunch.com/2013/03/06/ebay-discontinues-instant-sale-service-for-cash-trade-ins-on-phones-and-other-gadgets/" target="_blank"><div class="techcrunch"></div></a>'
							        },{
							            html : '<a href="http://usatoday30.usatoday.com/tech/story/2012/09/23/iphone-5-first-day-sales/57815108/1" target="_blank"><div class="usatoday"></div></a>'+
							            		'<a href="http://abclocal.go.com/kgo/story?section=news/7_on_your_side&amp;id=8772634" target="_blank"><div class="abc"></div></a>'
							        },{
							            html : '<a href="http://www.nytimes.com/2012/05/24/technology/personaltech/a-second-chance-for-idle-electronics.html?_r=3&amp;ref=technology&amp;" target="_blank"><div class="newyork"></div></a>'+
							            		'<a href="http://www.maclife.com/article/howtos/how_sell_your_old_iphone" target="_blank"><div class="maclife"></div></a>'
							        },{
							        	html: '<a href="http://www.pcworld.com/article/260429/iphone_trade_in_flurry_begins.html" target="_blank"><div class="pcworld"></div></a>'
							        }]
								},{
									xtype:'button',
									cls: 'btn_left_class',
									//iconCls: 'icon-right',
					                //id: 'carousel-btn-left',
					                width: '20px',
					                height: '50px',
					                style: {
									    'left': '0',
									    'position': 'absolute',
									    'top': '25px'
									},
									align: 'left',
									
									listeners: {
									    tap: function (list, index, item, record) {
									    	Ext.getCmp('carousel_links_notmain').previous();
									    }
									}
								},
								{
									xtype:'button',
									cls: 'btn_right_class',
					                //id: 'carousel-btn-right',
					                width: '20px',
					                height: '50px',
					                style: {
									    'right': '0',
									    'position': 'absolute',
									    'top': '25px'
									},
									align: 'right',
									listeners: {
									    tap: function (list, index, item, record) {
									    	Ext.getCmp('carousel_links_notmain').next();
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
						xtype: 'accountlinks'
					},
					
					{
						xtype: 'bottomareaclients'
					}
				]
			}]
    	}
		
});