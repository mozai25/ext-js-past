Ext.define('mob.view.tablet.ClientAccountTradeDetails', {
    extend: 'Ext.Panel',//DataView
    xtype: 'clientaccounttradedetails',
	
    	config: {
        	//title: 'TradeDetails',
        	//baseCls: 'x-client-account-tradedetails',
        	scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },
	        itemId: 'clientAccountDetailsId',
        	items:[
        		{
        			scrollable: null,
    				xtype: 'list',
    				//cls: 'x-client-account-trades',
    				style:{
		        		'height':'35px',
		        		'width':'100%'
		        		
		        	},
    				itemTpl: [
	        		
		        		'<span style="width:35px; float:left; font-size: 10px;font-weight: bold;">&nbsp;</span>',
						'<span style="width:42%; float:left; font-size: 10px;font-weight: bold;">Product</span>',
						'<span style="width:18%; float:left; font-size: 10px;font-weight: bold;">Status</span>',
		            	'<span style="width:15%; float:left; font-size: 10px;font-weight: bold;">Offer</span>',
		            	'<span style="width:auto; float:left; font-size: 10px;font-weight: bold;">&nbsp;</span>'
					
		        	].join(''),
		        	data: [
				        { title: 'Item 1' }
				  	]
				},
        		{
        			xtype: 'dataview',
        			autoDestroy: false,
					loadingText: false,
					style: {
						'height':'150px',
						'background-color':'white'
					},
					itemId: 'tradeDetailsAccountId',
		        	store: 'TradeDetailStore',
		        	itemTpl: [
						'<div style="float: left;width: 100%;padding: 5px 0px;border-top: 1px solid #14a9ea;line-height: 30px;">'+
							'<div style="margin-right:5px;width:35px;height:35px;float:left;background:url(\'/thumb.php?file=product/{OrderDetails.Product.Picture}&sizex=30&sizey=30\') left top no-repeat;"></div>'+
							'<div style="font-size:10px;width:40%;float:left;margin-right:5px;line-height:12px;padding-top:7px;">{OrderDetails.Product.Name}</div>'+
		            		'<div style="font-size:10px;width:15%;float:left;margin-right:5px;">{OrderDetails.RecievedStatus}</div>'+
		            		'<div style="font-size:10px;width:15%;float:left;margin-right:5px;" id="price_{OrderDetails.Id}">{OrderDetails.Price}</div>'+
		            		'<div style="font-size:10px;width:35px;float:left;margin-top:5px;" id="details_{OrderDetails.Id}"></div>'+
		            	'</div>'
		        	].join(''),
					listeners:{
						
				    	refresh: function(obj, eOpts){
				    		
				    		length = obj.getStore().data.all.length;
				    		
				    		for(var i = 0; i < length; i++)
					        {
					        	id = obj.getStore().data.items[i].raw.OrderDetails.Id;
					        	if(obj.getStore().data.items[i].raw.OrderDetails.RecievedStatus != "Cancelled")
					        	{
					        		btn = new Ext.Button({
						                renderTo: 'details_'+id,
						                itemId: id,
						                width: '100%',
						                cls: 'x-buttons-delete',
						                ui: 'decline',
						                text: 'X'
					            	});
					            	
					        	}else{
					        		
					        	}
					        	
					        	if(Ext.dom.Element.get("price_"+id) != null)
					        	{
					        		if(obj.getStore().data.items[i].raw.OrderDetails.BuybackValue != 0)
					        		{
					        			Ext.dom.Element.get("price_"+id).setHtml(obj.getStore().data.items[i].raw.OrderDetails.BuybackValue);
					        		}else{
					        			Ext.dom.Element.get("price_"+id).setHtml(obj.getStore().data.items[i].raw.OrderDetails.Price);
					        		}
					        		
					        	}
					        }
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