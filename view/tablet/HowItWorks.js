Ext.define('mob.view.tablet.HowItWorks', {
    extend: 'Ext.form.Panel',
    xtype: 'howitworks',
	
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
				        		html: '<div style="color: #14a9ea; font-size: 20px; width: 100%;text-align: center;margin: 10px;">How It Works</div>'
				        	},
				        	{
				        		xtype: 'panel',
				        		itemId: 'how_it_works',
				        		html: 'Please wait...',
				        		style:{
				        			'font-size':'12px',
				        			'margin':'0px 2px'
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
    		}
        ],
		listeners:{
		
			initialize: function(obj, e){
				
				Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading Terms of Sevices...'});
		        Ext.Ajax.request({
					url: '/app/json_adapter.php',
					method: 'POST',
					disableCaching: true,
					params: {
						action: "how_it_works"
					},
					success: function(response) {
						obj.down("#how_it_works").setHtml(response.responseText);
					},
					failure: function(response) {
						Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					},	
					callback: function(response) {
						Ext.Viewport.setMasked(false);
					}
				})
			}
		}
    }

});