Ext.define('mob.view.tablet.PressReleases', {
    extend: 'Ext.form.Panel',
    xtype: 'pressreleases',
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		baseCls: 'x-shipping-info-view',
    	layout: 'vbox',
    	//scrollable: null,
    	//title: 'Check',
    	items: [
    		{
    			xtype: 'panel',
    			layout: 'vbox',
        		style:{
		        	'min-height': '450px',
				   	'background-color': '#FFFFFF'
		        },
    			items:[
    				{
		        		xtype: 'panel',
		        		style:{
				        	'height': 'auto',
				        	'padding':'15px 10px'
				        },
				     	
				     	items:[
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #00d2cf; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Recent Press & Media Coverage</div>'
				        	},
				        	{
				        		xtype: 'dataview',
			        			autoDestroy: false,
								loadingText: false,
								style: {
									'height':'250px',
									'background-color':'white'
								},
								itemId: 'tradeDetailsAccountId',
					        	store: 'PressStore',
					        	itemTpl: [
									'<div style="float: left;width: 100%;padding: 3px 0px;border-top: 1px solid #00D2CF;">'+
										'<div style="margin-right: 5px;width:75px;height:60px;float:left;background:url(\'/thumb.php?file=images/{image}&sizex=60&sizey=60\') left top no-repeat;"></div>'+
										'<div style="width:85%;font-size:10px;margin-right:5px;"><a style="text-decoration: none;color: black;line-height:14px;" target="_blank" href="{link}">{text}</a><span style="font-size:10px;line-height:14px;">&nbsp;{date}</span></div>'+
					            	'</div>'
					        	].join('')
				        	}
				     	]		
				    },
					{
						xtype: 'accountlinks'
					},
					{
						xtype: 'bottomareaclients'
					}
    			]
    		}
        ]
    }

});