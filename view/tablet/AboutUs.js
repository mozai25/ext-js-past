Ext.define('mob.view.tablet.AboutUs', {
    extend: 'Ext.TabPanel',
    xtype: 'aboutus',
    
	requires: [
			'mob.view.tablet.BottomAreaClients'
	],
	
    config: {
        autoDestroy: false,
		fullscreen: true,
		baseCls: 'x-shipping-info-view',
		itemId: 'main_about_us',
    	layout: {
            type: 'card',
			animation:{
				type: 'flip'
			}
        },
		tabBarPosition: 'bottom',
		
		items:[
			{
				iconCls: 'icon-story',
				scrollable: {
		        	direction: 'vertical',
		        	directionLock: true
		        },
				title: 'Our Story',
				itemId: 'our_story_tab',
    			xtype: 'panel',
    			layout: 'vbox',
        		style:{
		        	'height':'100%',
				   	'background-color': '#FFFFFF'
		        },
    			items:[
    				{
		        		xtype: 'panel',
		        		style:{
				        	'height':'100%',
				        	'padding':'15px 10px'
				        },
				     	
				     	items:[
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Our Story</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		/*scrollable: {
						        	direction: 'vertical',
						        	directionLock: true
						        },*/
						        scrollable: null,
				        		html: 'Please wait...',
				        		itemId: 'about_us_id',
				        		style:{
				        			'font-size':'12px',
				        			'margin':'0px 15px 10px',
				        			'height':'auto'
				        		}
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
    			
			},
			{
				iconCls: 'icon-goal',
				scrollable: {
		        	direction: 'vertical',
		        	directionLock: true
		        },
				title: 'Our Goals',
				itemId: 'our_goals_tab',
    			xtype: 'panel',
    			layout: 'vbox',
        		style:{
		        	'height':'100%',
				   	'background-color': '#FFFFFF'
		        },
    			items:[
    				{
		        		xtype: 'panel',
		        		style:{
				        	'height':'auto',
				        	'padding':'15px 10px'
				        },
				     	
				     	items:[
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Our Goals</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		/*scrollable: {
						        	direction: 'vertical',
						        	directionLock: true
						        },*/
						        scrollable: null,
						        cls: 'our_goal_area',
				        		html: 'Please wait...',
				        		itemId: 'our_goals',
				        		style:{
				        			'font-size':'12px',
				        			'margin':'0px 15px 10px',
				        			'height':'auto'
				        		}
				        	}
				     	]		
				    },
					{
						xtype: 'accountlinks',
						style: {
						    'height': '237px'
						}
					},
					{
						xtype: 'bottomareaclients'
					}
    			]
			},{
				iconCls: 'icon-people',
				scrollable: {
		        	direction: 'vertical',
		        	directionLock: true
		        },
				title: 'Our Team',
				itemId: 'our_team_tab',
    			xtype: 'panel',
    			layout: 'vbox',
        		style:{
		        	'height':'100%',
				   	'background-color': '#FFFFFF'
		        },
    			items:[
    				{
		        		xtype: 'panel',
		        		style:{
				        	'height':'auto',
				        	'padding':'15px 10px'
				        },
				     	
				     	items:[
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">Our Team</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		/*scrollable: {
						        	direction: 'vertical',
						        	directionLock: true
						        },*/
						        scrollable: null,
				        		html: 'Please wait...',
				        		itemId: 'our_team',
				        		style:{
				        			'font-size':'12px',
				        			'margin':'0px 15px 10px',
				        			'height':'auto'
				        		}
				        	}
				     	]		
				    },
					{
						xtype: 'accountlinks',
						style: {
						    'height': '237px'
						}
					},
					{
						xtype: 'bottomareaclients'
					}
    			]
			}]
    }

});