Ext.define('mob.view.tablet.Brands', {
    extend: 'Ext.Panel',
    xtype: 'brands',
	
    	config: {
        	//title: 'Brands',
        	
        	xtype: 'panel',
    		scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },
        	
        	items:[
    			{
    				xtype: 'panel',
    				style:{
		        		'height':'300px',
		        		'background-color': '#B6B6B6'
		        	},
    				itemId: 'properties_cover_panel',
    				layout: 'vbox',	
    				items:[{
    						scrollable: null,
    						directionLock: true,
		    				xtype: 'list',
				        	cls: 'x-properties-items',
				        	itemId: 'brands_list_items',
				        	name: 'brands_list_items',
							loadingText: false,
				        	store: 'BrandsStore',
				        	onItemDisclosure: true,
				        	style:{
				        		//'flex':'1',
				        		'height':'300px',
				        		'width':'90%',
				        		'margin':'0 auto'
				        	},
				        	itemTpl: [
				            	'<div class="headshot" style="background:url(\'/thumb.php?file=categoryimages/{Picture}&sizex=60&sizey=60\') 50% top no-repeat;"></div>',
				            	'<div class="name">{Description}</div>'
				        	].join('')
    					}]
    			},{
					xtype: 'accountlinks'
				},	
				{
					xtype: 'bottomareaclients'
				}	
    			
    		]
        	
    	}
		
});