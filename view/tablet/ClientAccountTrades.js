Ext.define('mob.view.tablet.ClientAccountTrades', {
    extend: 'Ext.Panel',
    xtype: 'clientaccounttrades',
	
    	config: {
        	title: 'Trades',
        	scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },
	        
        	items:[
        		{
        			xtype: 'toolbar',
        			docked: 'top',
        			style:{
        				'width':'100%',
        				'margin-top':'30px'
        			},
        			items:[
        				
        				{
        					text: 'Pending',
        					xtype: 'button',
        					itemId: 'pending'
        				},
        				{
        					text: 'Completed',
        					xtype: 'button',
        					itemId: 'completed'
        				}
        			]
        				
        		},
        		{
        			scrollable: null,
    				xtype: 'list',
    				//cls: 'x-client-account-trades',
    				style:{
		        		'height':'35px',
		        		'width':'100%'
		        		
		        	},
    				itemTpl: [
	        		
		        		'<span style="width:25%; float:left; font-size: 10px;font-weight: bold;">Items</span>',
						'<span style="width:25%; float:left; font-size: 10px;font-weight: bold;">Date</span>',
						'<span style="width:25%; float:left; font-size: 10px;font-weight: bold;">Status</span>',
		            	'<span style="width:25%; float:left; font-size: 10px;font-weight: bold;">Box ID</span>'
					
		        	].join(''),
		        	data: [
				        { title: 'Item 1' }
				  	]
				},
        		{
		        	xtype: 'list',
		        	cls: 'x-client-account-trades',
		        	itemId: 'clientaccounttradesView',
					autoDestroy: false,
					loadingText: false,
		        	store: 'TradesStore',
		        	style:{
		        		'height':'150px'
		        	},
		        	itemTpl: [
		        		
		        		'<span style="width:25%; float:left; font-size: 10px;">{totalCount} worth ${totalOrderPrice}</span>',
						'<span style="width:25%; float:left; font-size: 10px;">{boxObject.DateAction}</span>',
						'<span style="width:25%; float:left; font-size: 10px;">{boxObject.OrderStatus}</span>',
		            	'<span style="width:25%; float:left; font-size: 10px;">{boxPS}</span>'

		        	].join('')
        		},{
					xtype: 'accountlinks'
				},
				{
					xtype: 'bottomareaclients'
				}
        		
        	]
        	
        	
        	
        	
    	}
		
});