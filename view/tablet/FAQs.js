Ext.define('mob.view.tablet.FAQs', {
    extend: 'Ext.form.Panel',
    xtype: 'faqs',
	
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
				        	'height': '120px'
				        },
				     	
				     	items:[
				        	{
				        		xtype: 'panel',
				        		html: '<div style="color: #00d2cf; font-size: 20px; width: 100%;text-align: center;margin: 10px;">FAQs</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		html: '<div style="margin: 0px 15px 10px;"> text text text text text </div>',
				        		style:{
				        			'font-size':'12px'
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
    		}
        ]
    }

});