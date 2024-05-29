Ext.define('mob.view.tablet.Product', {
    extend: 'Ext.form.FormPanel',
    xtype: 'product_obj',
	
    requires: [
			'Ext.Img', 
			'mob.view.LoginRegister'
			],
			
    config: {
    	
        baseCls: 'product-view',
        autoDestroy: false,
		fullscreen: true,
		type: 'formpanel',
		
		scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },
		
		/*scrollable: {
        	direction: 'vertical',
        	directionLock: true
        },*/
        
        items: [
			{ 
				//scrollable: false,
				//height: '520px',
					
				xtype:'panel',
				layout: 'vbox',
				flex: 3,
				
				style:{
					'min-height': '520px',
				   	'background-color': '#b6b6b6'
				},
				items:[
					
					{ 
						//scrollable: false,
						//height: '520px',
						
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
									'min-height':'25px',
									'text-align':'center'
								},
								html: '<span style="width: 100%;line-height:25px;font-size:16px;font-weight:bold;color:#14a9ea;">&nbsp;&nbsp;&nbsp;BuyBackWorld Instant Quote</span>'
							},
							
							{
								xtype: 'panel',
								id: 'quick_pass_outer',
								itemId: 'quick_pass_outer',
								style:{
									'width':'100%',
									//'min-height':'50px',
									'display': 'inline-table',
									'text-align':'center'
								},
								items:[{
									xtype: "button",
									flex: 1,
									ui: "normal",
									text: "Instant Quote = $150",
									padding: '10 0 10 0',
									cls: 'submit_order_btn_instant',
									itemId: 'submit_instant_btn',
									id: 'submit_instant_btn',
									style:{
									    'margin': '10px 5px 10px 5px',
									    'padding': '10px 0 !important',
									    'float': 'right',
									    'display': 'inline-block',
									    'width': '46%',
									    'font-size': '65%'
									}
								},{
									xtype: "button",
									flex: 1,
									ui: "normal",
									text: "Quick Pay Quote = $100",
									padding: '10 0 10 0',
									cls: 'submit_order_btn_top',//submit_order_btn_passive
									iconCls: 'icon-glyph-bolt',//
									itemId: 'submit_quick_pass_btn',
									id: 'submit_quick_pass_btn',
									style:{
									    'margin': '10px 5px 10px 5px',
									    'padding': '10px 0 !important',
									    'float': 'left',
									    'display': 'inline-block',
									    'width': '46%',
									    'font-size': '65%'
									}
								},{
			    					xtype: 'panel',
			    					//layout: 'hbox',
			    					itemId: 'quick_pass_text',
			    					iconCls: 'icon-question',//icon-glyph-bolt
									id: 'quick_pass_text',
			    					html: '<div style="font-size: 75%; text-decoration: underline;width: 100%;color: #6cc644;text-transform: uppercase;font-weight: 800;text-align: center;color: #6cc644;"><img style="margin-bottom: -5px;" src="/images/266-question.png" alt="Quick Pass" />&nbsp;How Does It Work&nbsp;<img style="margin-bottom: -5px;" src="/images/266-question.png" alt="Quick Pass" /></div>',
			    					style:{
			    						'width': '48%',
			    						'float': 'left'
			    					},
			    					listeners: {
			    					 	
			    					 	initialize: function() {
									        this.element.on({
											    singletap: function() { 
											    
											    	 var popup = new Ext.Panel({
											            modal: true,
											            centered: true,
											            scrollable: 'vertical',
											            
											            /*{
														    direction: 'vertical',
														    directionLock: true
														},*/
														
											            modal: true,
											            width: '90%',
											            height: '90%',
											            styleHtmlContent: true,
											            html: 'text',
											            items: [{
											                xtype: 'toolbar',
											                title: 'HOW DOES BUYBACKWORLD QUICK PAY™ WORK?',
											                style: {
											                	'font-size':'55%'
											                },
											                docked: 'top', 
											                items: [{
											                    	xtype: 'spacer'
											                	},{
											                    	text: 'x',
											                    	style: {
													                	'font-size':'150%'
													                },
											                    	handler: function(){
											                       		popup.hide();
											                    	}
											                	}]
											            	}]
											            	
											        	});
											        
											    	Ext.Viewport.add(popup);
											    	
											    	Ext.Ajax.request({
														url: '/app/quick_pass_text.txt',
														method: 'POST',
														disableCaching: true,
														success: function(response) {
															popup.setHtml(response.responseText);
														},
														failure: function(response) {
															popup.setHtml("no results");
														},
														callback: function(response) {
															popup.show();
														}
													});
											    	
											    }
									        });
									    }
									}
								}]
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
				            				'<div class="text"></div>',
											'<div style="width: 100%;" id="price_value">${ExcellentPrice}</div>',
											'<div style="width: 100%;" id="price_condition">{Categoryid.ConditionSelect.ExcellentName}</div>'
				        				)
									}]
		    				},
		    				
		    				{
								xtype: "button",
								ui: "confirm",
								text: "Sell Now",
								padding: '10 0 10 0',
								cls: 'submit_order_btn',
								iconCls: '',
								itemId: 'submit_order',
								id: 'submit_order_btn',
								style:{
								    'margin': '10px',
								    'padding': '10px 0 !important'
								}
							}]
						},
						
						/*
						{ 
							xtype:'panel',
							style:{
								'height': '10px'
							},
							cls: 'name_product_line_description',
							items:[
							{
								xtype: 'panel',
								itemId: 'name_product_line',
								cls: 'name_product_line',
		        				tpl: new Ext.XTemplate(
		            				'<div class="name" style="font-size: 12px;width: 100%;">&nbsp;&nbsp;&nbsp;My <span style="font-weight: bold;">{Name}</span> is...</div>'
		        				)
		    				}]
						},
						*/
						
						{
							scrollable: null,
							itemId: 'dead_panel_area',
							id: 'dead_panel_area',
							xtype: 'panel',
							style:{
								'padding': '1px',
								'margin': '5px 10px'
							},
							items:[
								{
								    xtype: 'label',
								    html: 'Does the item power on and hold a charge?',
								    style:{
								    	    'line-height': '40px',
										    'font-weight': 'bold',
										    'font-size': '16px'
								    	}
								},
								{	
									xtype: 'radiofield',
									labelWidth: '85%',
									labelWrap: true,
									labelAlign: 'right',
									cls: 'question_option_class',
				        			name: 'question_option_dead',
									itemId: 'dead_popup_yes',
				 					value: 4,
									label: '<span style="color: #14a9ea; font-size: 90%; font-weight: bold;" id="deadNameYes">YES</span><br /><span style="font-weight: normal; font-size: 12px;">The item <span style="color: green; font-weight: bold;">DOES</span> power on and hold a charge</span>',
									
									listeners:{
										initialize: function(obj, eOpts){
											obj.label.parent().setStyle({"border":"1px solid transparent"});
										},
										check: function(obj, e, eOpts ){
											Ext.getCmp('submit_order_btn').setDisabled(false);
										}
									}
								},
								{
									xtype: 'radiofield',
									labelWidth: '85%',
									labelWrap: true,
									labelAlign: 'right',
									cls: 'question_option_class',
				        			name: 'question_option_dead',
									itemId: 'dead_popup_no',
				 					value: 5,
									label: '<span style="color: #14a9ea; font-size: 90%; font-weight: bold;" id="deadNameNo">NO</span><br /><span style="font-weight: normal; font-size: 12px;">The item <span style="color: red; font-weight: bold;">DOES NOT</span> power on and hold a charge</span>',
									
									listeners:{
										initialize: function(obj, eOpts){
											obj.label.parent().setStyle({"border":"1px solid transparent"});
										},
										check: function(obj, e, eOpts ){
											Ext.getCmp('submit_order_btn').setDisabled(false);
										}
									}
								}
							]
						},
						
						//add items radio buttons
						
						{
							scrollable: null,
							itemId: 'question_panel_area',
							id: 'question_panel_area',
							xtype: 'panel',
							style:{
								'padding': '1px',
								'margin': '5px 10px'
							},
							items:[]
						},
						
						{
							scrollable: null,
							
							xtype: 'panel',
							style:{
								'padding': '1px',
								'margin': '5px 10px'
							},
							items:[
							
								{
									xtype: 'hiddenfield',
									itemId: 'hidden_dead_flag',
									id: 'hidden_dead_flag',
									value: 0
								},
								{
									xtype: 'hiddenfield',
									itemId: 'hidden_quick_pass',
									id: 'hidden_quick_pass',
									value: 0
								},
								{
									xtype: 'radiofield',
									labelWidth: '85%',
									labelWrap: true,
									labelAlign: 'right',
									cls: 'question_option_class',
				        			name: 'question_option',
									itemId: 'poor_popup',
				 					value: 4,
									label: '<span style="color: #14a9ea; font-size: 90%; fomt-weight: bold;" id="poorName"></span><span><a id="poorLinkShowMore" href="#" style="margin-left: 10px; color: #14a9ea; font-size: 80%; fomt-weight: bold;">More Description Details</a></span><br /><span style="font-weight: normal; font-size: 12px;" id="poorTitle">Does not turn on or has heavy physical damage</span><br /><span id="poorText" style="font-weight: normal; font-size: 12px; display: none;"></span>',
									
									listeners:{
										initialize: function(obj, eOpts){
											obj.label.parent().setStyle({"border":"1px solid transparent"});
										},
										check: function(obj, e, eOpts ){
											obj.label.parent().setStyle({"border":"1px solid #14A9EA", "border-radius": "5px 5px 5px 5px"});
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="poorName"]')[0].innerHTML;
											
											
											//check additional module questions
											
											if(Ext.getCmp("hidden_dead_flag").getValue() == '1') {
												Ext.getCmp("dead_panel_area").show();
												Ext.getCmp('submit_order_btn').setDisabled(true);
											}
										},
										uncheck: function(obj, e, eOpts ){
											
											//check additional module questions
											
											obj.label.parent().setStyle({"border":"1px solid transparent"});
											Ext.getCmp("dead_panel_area").hide();
											Ext.getCmp('submit_order_btn').setDisabled(false);
										}
									}
								}
							]
						},
						
						{
							scrollable: null,
							
			        		xtype: 'panel',
							style:{
								'margin': '5px 10px',
								'padding': '1px'
							},
							items:[{
								xtype: 'radiofield',
								labelWidth: '85%',
								labelWrap: true,
								labelAlign: 'right',
								cls: 'question_option_class',
				        		name: 'question_option',
								itemId: 'average_popup',
				 				value: 3,
								label: '<span style="color: #14a9ea; font-size: 90%; fomt-weight: bold;" id="averageName"></span><span><a id="averageLinkShowMore" href="#" style="margin-left: 10px; color: #14a9ea; font-size: 80%; font-weight: bold;">More Description Details</a></span><br /><span style="font-weight: normal; font-size: 12px;" id="averageTitle">100% functional, normal signs of use</span><br /><span id="averageText" style="font-weight: normal; font-size: 12px; display: none;"></span>',
								
								listeners:{
									initialize: function(obj, eOpts){
										obj.label.parent().setStyle({"border":"1px solid transparent"});
									},
									check: function(obj, e, eOpts ){
										obj.label.parent().setStyle({"border":"1px solid #14A9EA", "border-radius": "5px 5px 5px 5px"});
										Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="averageName"]')[0].innerHTML;
									},
									uncheck: function(obj, e, eOpts ){
										obj.label.parent().setStyle({"border":"1px solid transparent"});
									}
								}
							}]
			    		},
						{
							scrollable: null,
							
			        		xtype: 'panel',
							style:{
								'margin': '5px 10px',
								'padding': '1px'
							},
							items:[{
								xtype: 'radiofield',
								labelWidth: '85%',
								labelWrap: true,
								labelAlign: 'right',
								cls: 'question_option_class',
				        		name: 'question_option',
								itemId: 'excellent_popup',
				 				value: 2,
								label: '<span style="color: #14a9ea; font-size: 90%; fomt-weight: bold;" id="excellentName"></span><span><a id="excellentLinkShowMore" href="#" style="margin-left: 10px; color: #14a9ea; font-size: 80%; font-weight: bold;">More Description Details</a></span><br /><span style="font-weight: normal; font-size: 12px;" id="excellentTitle">100% functional, very light signs of use</span><br /><span id="excellentText" style="font-weight: normal; font-size: 12px; display: none;"></span>',
								
								checked: true,
								listeners:{
									initialize: function(obj, eOpts){
										obj.label.parent().setStyle({"border":"1px solid #14A9EA"});
									},
									check: function(obj, e, eOpts ){
										obj.label.parent().setStyle({"border":"1px solid #14A9EA", "border-radius": "5px 5px 5px 5px"});
										Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="excellentName"]')[0].innerHTML;
									},
									uncheck: function(obj, e, eOpts ){
										obj.label.parent().setStyle({"border":"1px solid transparent"});
									}
								}
							}]
			    		},
						{
							scrollable: null,
							
			        		xtype: 'panel',
							style:{
								'margin': '5px 10px',
								'padding': '1px'
							},
							items:[{
									xtype: 'radiofield',
									labelWidth: '85%',
									labelWrap: true,
									labelAlign: 'right',
									cls: 'question_option_class',
				        			name: 'question_option',
									itemId: 'new_popup',
				 					value: 1,
									label: '<span style="color: #14a9ea; font-size: 90%; fomt-weight: bold;" id="newName"></span><span><a id="newLinkShowMore" href="#" style="margin-left: 10px; color: #14a9ea; font-size: 80%; font-weight: bold;">More Description Details</a></span><br /><span style="font-weight: normal; font-size: 12px;" id="newTitle">Brand New in Box SEALED and never used</span><br /><span id="newText" style="font-weight: normal; font-size: 12px; display: none;"></span>',
									
									listeners:{
										initialize: function(obj, eOpts){
											obj.label.parent().setStyle({"border":"1px solid transparent"});
										},
										check: function(obj, e, eOpts ){
											obj.label.parent().setStyle({"border":"1px solid #14A9EA", "border-radius": "5px 5px 5px 5px"});
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="newName"]')[0].innerHTML;
										},
										uncheck: function(obj, e, eOpts ){
											obj.label.parent().setStyle({"border":"1px solid transparent"});
										}
									}
								}
							]
			    		}
			    	]
		},
		{
			//scrollable: false,
			//height: '237px',
			
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
        
        if(parseInt(newData.QuickPassFlag) && parseInt(newData.QuickPassLive)) {
        	Ext.getCmp("quick_pass_outer").show();
        	
        	if(parseInt(newData.QuickPassStatusExcellent)) {
        		Ext.getCmp("quick_pass_outer").show();
        		Ext.getCmp("quick_pass_text").show();
        		Ext.getCmp("submit_instant_btn").setHtml("Instant Quote = $" + newData.ExcellentPrice);
        		Ext.getCmp("submit_quick_pass_btn").setHtml("Quick Pay Quote = $" + newData.QuickPassStatusExcellentPrice);
        	} else {
        		Ext.getCmp("quick_pass_outer").hide();
        		Ext.getCmp("quick_pass_text").hide();
	        }
        }else{
        	Ext.getCmp("quick_pass_outer").hide();
        	Ext.getCmp("quick_pass_text").hide();
        }	
        
        Ext.getCmp("dead_panel_area").hide();
        
        if(newData.QuestionModuleArray.length > 0) {
        //	Ext.getCmp('submit_order_btn').setDisabled(true);
        }
        
        //
        
        Ext.getCmp("submit_instant_btn").addCls("outline_button_top");
        Ext.getCmp("submit_quick_pass_btn").addCls("outline_button_top_default");
        
        //
        
        if(newData.DeadPriceEnabled == "1") {
        	this.down("#hidden_dead_flag").setValue(1);
        }else{
        	this.down("#hidden_dead_flag").setValue(0);
        }
        
		var image = this.down('image');
		
        image.element.dom.style.backgroundSize = "30%";
        image.element.dom.style.backgroundImage = 'url(resources/images/loading.gif)';
        image.setSrc('');//
        image.setSrc('/thumb.php?file=product/' + newData.Picture);  //{Picture}&sizex=110&sizey=123
        
    	this.down("#description").setData(newData);
    	
    	if(newData.ConditionObject != null) {
    	
	    	Ext.DomQuery.select('span[id="newName"]')[0].innerHTML = newData.ConditionObject.NewOptionName;
			Ext.DomQuery.select('span[id="excellentName"]')[0].innerHTML = newData.ConditionObject.ExcellentName;
			Ext.DomQuery.select('span[id="averageName"]')[0].innerHTML = newData.ConditionObject.AverageName;
			Ext.DomQuery.select('span[id="poorName"]')[0].innerHTML = newData.ConditionObject.PoorName;
			//
			Ext.DomQuery.select('span[id="newTitle"]')[0].innerHTML = newData.ConditionObject.NewOptionTitle;
			Ext.DomQuery.select('span[id="excellentTitle"]')[0].innerHTML = newData.ConditionObject.ExcellentTitle;
			Ext.DomQuery.select('span[id="averageTitle"]')[0].innerHTML = newData.ConditionObject.AverageTitle;
			Ext.DomQuery.select('span[id="poorTitle"]')[0].innerHTML = newData.ConditionObject.PoorTitle;
			//
			Ext.DomQuery.select('span[id="poorText"]')[0].innerHTML = newData.ConditionObject.PoorText;
			Ext.DomQuery.select('span[id="averageText"]')[0].innerHTML = newData.ConditionObject.AverageText;
			Ext.DomQuery.select('span[id="excellentText"]')[0].innerHTML = newData.ConditionObject.ExcellentText;
			Ext.DomQuery.select('span[id="newText"]')[0].innerHTML = newData.ConditionObject.NewOptionText;
    	}
    	
    	document.getElementById('poorLinkShowMore').addEventListener("click",
           function(){
               
               if(Ext.get('poorLinkShowMore').getHtml() == 'More Description Details') {
               	   Ext.get('poorText').show();
               	   Ext.get('poorLinkShowMore').setHtml('Hide');
               }else{
               	   Ext.get('poorText').hide();
               	   Ext.get('poorLinkShowMore').setHtml('More Description Details');
               }
               
           }, false);
		
		document.getElementById('averageLinkShowMore').addEventListener("click",
           function(){
               
               if(Ext.get('averageLinkShowMore').getHtml() == 'More Description Details') {
               	   Ext.get('averageText').show();
               	   Ext.get('averageLinkShowMore').setHtml('Hide');
               }else{
               	   Ext.get('averageText').hide();
               	   Ext.get('averageLinkShowMore').setHtml('More Description Details');
               }
               
           }, false);
		
    	document.getElementById('excellentLinkShowMore').addEventListener("click",
           function(){
               
               if(Ext.get('excellentLinkShowMore').getHtml() == 'More Description Details') {
               	   Ext.get('excellentText').show();
               	   Ext.get('excellentLinkShowMore').setHtml('Hide');
               }else{
               	   Ext.get('excellentText').hide();
               	   Ext.get('excellentLinkShowMore').setHtml('More Description Details');
               }
               
           }, false);
    	
    	document.getElementById('newLinkShowMore').addEventListener("click",
           function(){
               
               if(Ext.get('newLinkShowMore').getHtml() == 'More Description Details') {
               	   Ext.get('newText').show();
               	   Ext.get('newLinkShowMore').setHtml('Hide');
               }else{
               	   Ext.get('newText').hide();
               	   Ext.get('newLinkShowMore').setHtml('More Description Details');
               }
               
           }, false);
    	
    	//
    	
    	//console.log(Ext.query(".esn-txt"));
    	//console.log(document.querySelectorAll('[data-target="#esn"]'));
    	
    	Ext.Array.forEach(document.querySelectorAll('[data-target="#esn"]'), function(el, index, elSelf) {
    		
    		el.addEventListener("click", function(){ 
    			
    			var popup = new Ext.Panel({
	            modal: true,
	            centered: true,
	            scrollable: 'vertical',
	            modal: true,
	            width: '90%',
	            height: '90%',
	            styleHtmlContent: true,
	            html: 'text',
	            items: [{
	                xtype: 'toolbar',
	                title: 'What is an ESN number?',
	                style: {
	                	'font-size':'55%'
	                },
	                docked: 'top', 
	                items: [{
	                    	xtype: 'spacer'
	                	},{
	                    	text: 'x',
	                    	style: {
			                	'font-size':'150%'
			                },
	                    	handler: function(){
	                       		popup.hide();
	                    	}
	                	}]
	            	}]
	            	
	        	});
	        
		    	Ext.Viewport.add(popup);
		    	
		    	Ext.Ajax.request({
					url: '/app/esn_pass_text.txt',
					method: 'POST',
					disableCaching: true,
					success: function(response) {
						popup.setHtml(response.responseText);
					},
					failure: function(response) {
						popup.setHtml("no results");
					},
					callback: function(response) {
						popup.show();
					}
				});
				
    		});
    		
    	})
    	
    	Ext.Array.forEach(document.querySelectorAll('[data-target="#imei"]'), function(el, index, elSelf) {
    		
    		el.addEventListener("click", function(){ 
    			
    			var popup = new Ext.Panel({
	            modal: true,
	            centered: true,
	            scrollable: 'vertical',
	            modal: true,
	            width: '90%',
	            height: '90%',
	            styleHtmlContent: true,
	            html: 'text',
	            items: [{
	                xtype: 'toolbar',
	                title: 'What is an IMEI number?',
	                style: {
	                	'font-size':'55%'
	                },
	                docked: 'top', 
	                items: [{
	                    	xtype: 'spacer'
	                	},{
	                    	text: 'x',
	                    	style: {
			                	'font-size':'150%'
			                },
	                    	handler: function(){
	                       		popup.hide();
	                    	}
	                	}]
	            	}]
	            	
	        	});
	        
		    	Ext.Viewport.add(popup);
		    	
		    	Ext.Ajax.request({
					url: '/app/imei_pass_text.txt',
					method: 'POST',
					disableCaching: true,
					success: function(response) {
						popup.setHtml(response.responseText);
					},
					failure: function(response) {
						popup.setHtml("no results");
					},
					callback: function(response) {
						popup.show();
					}
				});
				
    		});
    		
    	})
    	
    	
    	
    }
});
