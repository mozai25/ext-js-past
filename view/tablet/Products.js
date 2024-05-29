Ext.define('mob.view.tablet.Products', {
    extend: 'Ext.Panel',
    xtype: 'products',
	
    	config: {
    		
    		xtype: 'panel',
    		scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },
    		items:[
    				
    			{
    				xtype: 'panel',
    				style:{
		        		'height':'250px',
		        		'background-color': '#B6B6B6'
		        	},
    				itemId: 'properties_cover_panel',
    				layout: 'vbox',	
    				items:[
    					{
    						scrollable: null,
    						directionLock: true,
		    				xtype: 'list',
				        	cls: 'x-products-list-items',
				        	itemId: 'products_list_items',
				        	name: 'products_list_items',
							loadingText: false,
				        	store: 'ProductStore',
				        	onItemDisclosure: false,
				        	style:{
				        		//'flex':'1',
				        		'height':'250px',
				        		'width':'100%',
				        		'margin':'0 auto',
				        		'text-align': 'center',
				        		'vertical-align': 'top',
				        		'background-color': '#B6B6B6'
				        	},
				        	itemTpl: [
				            	'<div class="headshot" style="background:url(\'/thumb.php?file=product/{Picture}&sizex=120&sizey=80\') 50% 5px no-repeat;"></div>',
				            	'<div class="name">{Name}</div>',
				            	'<div class="select_product_btn">Select</div>'
				        	].join('')
		        		}
		        	]
		        	
    			},{
					xtype: 'accountlinks'
				},
				{
					xtype: 'bottomareaclients'
				}
    		]
    		
    	}
		
});