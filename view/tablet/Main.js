Ext.define('mob.view.tablet.Main', {
    extend: 'mob.view.Main',
    xtype: 'main',

    requires: [
        'mob.view.Categories'
    ],

    config: {
    	
        fullscreen: true,
        autoDestroy: false,
        itemId: 'main_view_nav',
        id: 'main_view_nav',
        
		items: [
				{ 
					xtype: 'label', 
					html: 'home', 
					baseCls: 'top-label-info', 
					id: 'breadcrambs'
				},
				{ 
					xtype: 'label', 
					html: '',
					baseCls: 'topbutton-label-info', 
					id: 'breadcrambs_buttons',
					hidden: false
				},
				{
						xtype: 'panel',
						scrollable: {
				        	direction: 'vertical',
				        	directionLock: true,
				        	momentumEasing:  {
						     	momentum: {
						       		acceleration: 30,
						       		friction: 0.5
						     	},
						     	bounce: {
						       		acceleration: 0.0001,
						        	springTension: 0.9999
						     	},
						     	minVelocity: 5
						  },
						  outOfBoundRestrictFactor: 0
				        },
						id: 'main_panel_scroll_menu',
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
									xtype: 'panel',
									hidden: true,
									id: 'banner_front',
									style:{
										'margin':'5px 0px 5px 0px'
									},
									html: ''
								},	
								
								{
									xtype: 'panel',
									id: 'carousel_front_categories',
									style:{
										'height':'270px',
										'background-color':'#21b0ed',
										'position':'relative'
									},
									items:[
											
											{
												xtype: 'carousel',
												style:{
													'height':'270px',
													'background-color':'#21b0ed'
												},
												indicator: false,
												
												items:[
													
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:18px;">BUY OR SELL IN SECONDS</div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">'+
																		'<ul class="carouseltxt">'+
																			'<li><i style="margin-right: 5px;"><img width="20px" src="/images/icon-a-instant-quote.png" alt=""></i><span class="top-front-carousel"> 1. Get an Instant Quote</span></li>'+                
																			'<li><i style="margin-right: 5px;"><img width="20px" src="/images/icon-c-paid-cahse.png" alt=""></i><span class="top-front-carousel"> 3. Get Paid Cash</span></li>'+
																			'<li><i style="margin-right: 5px;"><img width="20px" src="/images/icon-b-ship.png" alt=""></i><span class="top-front-carousel"> 2. Ship For Free</span></li>'+
																			'<li><i style="margin-right: 5px;"><img width="20px" src="/images/icon-d-30-day-guarantee.png" alt=""></i><span class="top-front-carousel"> 4. 30 Day Guarantee</span></li>'+
																		'</ul>'+
																		'</div>'+
																	'</div>'
																
															},
															{
																xtype: 'panel',
																layout: 'hbox',
																style:{
																	//'width':'100%',
																	'display': 'inline-table',
																	'text-align':'center'
																},
																items:[	
																{
																	xtype: 'button',
															        text: 'SELL NOW',
															        //badgeText: 'New',
															        ui: 'confirm',
															        itemId: 'front_general_button',
															        cls: 'front_general_button',
															        style:{
															        	'width':'100px',
															        	'height':'30px',
															        	'margin':'5px 5px 5px 5px'
															        }
																},
																{
																	xtype: 'button',
															        text: 'BUY NOW',
															        //badgeText: 'New',
															        ui: 'confirm',
															        itemId: 'front_store_buy_button',
															        cls: 'sell_iphone_now_btn',
															        style:{
															        	'width':'100px',
															        	'height':'30px',
															        	'margin':'5px 5px 5px 5px'
															        }
																}]
															}
														],
														style:{
															'height':'285px',
															'background': 'url("/images/iphonex.png") no-repeat scroll 50% 95% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Sell Your iPhone Today</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">BuyBackWorld Buys All Models, All Carriers.</div>'+
																		'<div style="font-size: 12px; margin-top: 5px; font-weight: normal;">Instant Quote. Free Shipping. No Risks, No Hassles.</div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Sell iPhone',
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
															'height':'310px',
															'background': 'url("/images/iphone-home.png") no-repeat scroll 50% 95% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Sell Any Cell Phone</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">Android, Samsung Galaxy, Google Pixel, and More.</div>'+
																		'<div style="font-size: 12px; margin-top: 5px; font-weight: normal;">Instant Quote. Free Shipping. No Risks, No Hassles.</div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Sell Cell Phone',
														        //badgeText: 'New',
														        ui: 'confirm',
														        itemId: 'front_blackberry_button',
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
															'background': 'url("/images/bb-home-cellphone.png") no-repeat scroll 50% 95% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Sell Any Used Samsung</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">Galaxy, Note, Edge, Gear, and More.</div>'+
																		'<div style="font-size: 12px; margin-top: 5px; font-weight: normal;">Instant Quote. Free Shipping. No Risks, No Hassles.</div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Sell Samsung',
														        //badgeText: 'New',
														        ui: 'confirm',
														        itemId: 'front_samsung_button',
														        cls: 'sell_iphone_now_btn',
														        style:{
														        	'width':'200px',
														        	'height':'40px',
														        	'margin':'5px auto 0 auto'
														        }
															}
														],
														style:{
															'height':'320px',
															'background': 'url("/images/samsung-home.png") no-repeat scroll 50% 90% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Sell All iPads</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">Air, Mini, Pro, and More. </div>'+
																		'<div style="font-size: 12px; margin-top: 5px; font-weight: normal;">Instant Quote. Free Shipping. No Risks, No Hassles. </div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Sell iPad',
														        //badgeText: 'New',
														        ui: 'confirm',
														        itemId: 'front_ipad_button',
														        cls: 'sell_iphone_now_btn',
														        style:{
														        	'width':'200px',
														        	'height':'40px',
														        	'margin':'5px auto 0 auto'
														        }
															}
														],
														style:{
															'height':'320px',
															'background': 'url("/images/ipad-home.png") no-repeat scroll 50% 90% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Have More Than 10 Items to Sell?</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">We Provide Enterprise Level Wireless BuyBack Solutions</div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">Sell In Bulk Now </div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Bulk BuyBack',
														        //badgeText: 'New',
														        ui: 'confirm',
														        itemId: 'front_bulk_sell_button',
														        cls: 'sell_iphone_now_btn',
														        style:{
														        	'width':'200px',
														        	'height':'40px',
														        	'margin':'5px auto 0 auto'
														        }
															}
														],
														style:{
															'height':'310px',
															'background': 'url("/images/bulk-home.png") no-repeat scroll 50% 90% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Couldn’t Find The Item You Wanted to Sell?</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">Simply fill out our Custom Quote Form to SELL ANY ITEM</div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Custom Quote',
														        //badgeText: 'New',
														        ui: 'confirm',
														        itemId: 'front_custom_quote_button',
														        cls: 'sell_iphone_now_btn',
														        style:{
														        	'width':'200px',
														        	'height':'40px',
														        	'margin':'5px auto 0 auto'
														        }
															}
														],
														style:{
															'height':'295px',
															'background': 'url("/images/custom-home.png") no-repeat scroll 50% 90% #21b0ed'
														}
													},
													{
														xtype:'panel',
														items:[
															{
																xtype: 'panel',
																html: '<div class="home_mobile_image">'+
																		'<div><span style="font-size:16px;">Looking for a Great Deal?</span></div>'+
																		'<div style="font-size: 12px; margin-top: 5px;">Get A Great Deal On A Certified Pre-Owned Device Or A Discounted Gift Card</div>'+
																	'</div>'
																
															},	
															{
																xtype: 'button',
														        text: 'Buy Now',
														        //badgeText: 'New',
														        ui: 'confirm',
														        itemId: 'front_great_deal_button',
														        cls: 'sell_iphone_now_btn',
														        style:{
														        	'width':'200px',
														        	'height':'40px',
														        	'margin':'5px auto 0 auto'
														        }
															}
														],
														style:{
															'height':'285px',
															'background':'url("/images/seal-home.png") no-repeat scroll 50% 90% / 175px #21b0ed'
														}
													}
												],
												listeners:{
												
													initialize:function(obj, e){
														
														ss1_carousel = new Ext.Button({
															iconCls: 'carousel-left',
															cls: 'carousel_front_left_class',
												            width: '40px',
												            height: '50px',
												            text: '',
												            style: {
															    'margin-top': '150px',
															    'float': 'left',
															    'position': 'absolute',
															    'left': '0px',
															    'right': 'auto',
															    'z-index':'100',
															    'color':'white'
															},
															align: 'left',
															
															listeners: {
															    tap: function (list, index, item, record) {
															        
															        obj.previous();
															        
															    }
															}
															
												        });
												    	Ext.getCmp("carousel_front_categories").add(ss1_carousel);
												    	
												    	ss2_carousel = new Ext.Button({
												    		iconCls: 'carousel-right',
												    		cls: 'carousel_front_left_class',
												            width: '40px',
												            height: '50px',
												            text: '',
												            style: {
															    'margin-top': '150px',
															    'float': 'right',
															    'position': 'absolute',
															    'right': '0px',
															    'left': 'auto',
															    'z-index':'100',
															    'color':'white'
															},
															align: 'right',
															
															listeners: {
															    tap: function (list, index, item, record) {
															    	
															    	if(obj.getActiveIndex() == obj.getItems().length-1) {
																		obj.setActiveItem(0);
																	}else{
																		obj.next();
																	}
															    }	
															}
															
												        });
												    	Ext.getCmp("carousel_front_categories").add(ss2_carousel);
													
													}
												}
											}
										]
								},{
									xtype: 'panel',
									itemId: 'line_main_container',
									html: 'Select Your Item Below For An Instant Quote',
									style:{
										'background-color': '#57c428',
									    'color': '#FFFFFF',
									    'font-size': '14px',
									    'font-weight': 'bold',
									    'height': '40px',
									    'line-height': '40px',
									    'overflow': 'hidden',
									    'width': '95%',
									    'margin-left':'auto',
									    'margin-right':'auto',
									    'margin-top': '-25px',
									    'box-shadow': '5px 5px 7px #47b01a',
									    'z-index': '100'
									}
								},
								{
									xtype: 'panel',
									html: 'Instant Quote. Free Shipping. <br /> No Risks, No Hassles',
									style:{
										'background-color':'#ffffff',
										'text-align':'center',
										'margin-top':'10px',
										'font-size':'16px',
										'color':'black'
									}
								},
								{
									xtype: 'panel',
									id: 'carousel_main_container',
									items:[{xtype: 'categoriespage'}],
									style:{
										'background-color':'#ffffff',
										'margin-top': '0px'
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
									itemId: 'new_pages',
									style:{
										'width':'100%',
										'height':'151px',
										'background-color':'#14a9ea'
									},//margin: auto;position: absolute;top: 0;left: 0;bottom: 0;right: 0;
									html: '<div class="main_why_bbw">'+
											'<div class="what_bbw"><div class="what_bbw_inner" style="display: table-cell;height: 50px;vertical-align: middle;">What is BuyBackWorld?</div></div>'+
											'<div class="sell_to_bbw"><div class="sell_to_bbw_inner" style="display: table-cell;height: 50px;vertical-align: middle;">What Can I Sell to BuyBackWorld?</div></div>'+
											'<div class="why_to_bbw"><div class="why_to_bbw_inner" style="display: table-cell;height: 50px;vertical-align: middle;">Why Should I Sell to BuyBackWorld?</div></div>'+
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
									html: '<div style="font-weight: bold; text-transform: uppercase;">BuyBackWorld as seen on</div>'
									
								},
								{
									xtype: 'panel',
									style:{
										'height':'100px'
									},
									items:[
										{
											xtype: 'carousel',
											id: 'carousel_links',
											itemId: 'carousel_links',
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
										        	html: '<a href="http://www.pcworld.com/article/260429/iphone_trade_in_flurry_begins.html" target="_blank"><div class="pcworld"></div></a>'+
										        			'<div class="more_links_tocheck"></div>'	
										        }]
											},{
												xtype:'button',
												cls: 'btn_left_class',
												//iconCls: 'icon-right',
								                id: 'carousel-btn-left',
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
												    	Ext.getCmp('carousel_links').previous();
												    }
												}
											},
											{
												xtype:'button',
												cls: 'btn_right_class',
								                id: 'carousel-btn-right',
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
												    	Ext.getCmp('carousel_links').next();
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
				]
	      		
	      
	      
    }


});
