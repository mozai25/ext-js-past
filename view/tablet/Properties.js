Ext.define('mob.view.tablet.Properties', {
    extend: 'Ext.Panel',
    xtype: 'properties',
	
    	config: {
    		
    		xtype: 'panel',
    		scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },
	        directionLock: true,
	        
    		items:[
    			
    			{
    				xtype: 'panel',
    				style:{
		        		'height':'300px',
		        		'background-color': '#B6B6B6'
		        	},
    				itemId: 'properties_cover_panel',
    				layout: 'vbox',	
    				directionLock: true,
    				items:[
    					{
		    				scrollable: null,
		    				directionLock: true,
				        	xtype: 'list',
				        	cls: 'x-properties-items',
				        	itemId: 'property_list_items',
				        	name: 'property_list_items',
							loadingText: false,
				        	store: 'PropertiesStore',
				        	onItemDisclosure: true,
				        	style:{
				        		//'flex':'1',
				        		'height':'300px',
				        		'width':'90%',
				        		'margin':'0 auto'
				        	},
				        	itemTpl: [
				            	'<div class="headshot" style="background:url(\'/thumb.php?file=categoryimages/{Picture}&sizex=60&sizey=60\') 50% top no-repeat;"></div>',
				            	'<div class="name">{Value}</div>'
				        	].join('')
    					}
    				],
    				listeners:{
    				
    					initialize: function(obj, e){
    					
    					}
    				
    				}
    				
    			},{
					xtype: 'accountlinks'
				},
				{
					xtype: 'bottomareaclients'
				}	
    			
    		]
    		
    	}
		
});