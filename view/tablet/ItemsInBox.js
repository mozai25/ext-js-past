Ext.define('mob.view.tablet.ItemsInBox', {
    extend: 'Ext.Sheet',
    xtype: 'itemsinbox',
	
		requires: [
        
    	],	
		
		config: {
			//title: 'Box',
	        autoDestroy: false,
			itemId: 'items_in_box',
	    	layout: 'vbox',
	    	scrollable: null,
	    	baseCls: 'basket-product-view',
	        centered: true,
	        width: '95%',
	        height: '45%',
	        modal: true,
	        hideOnMaskTap: true,
	        
	        items: [
	        	{
	        		xtype: 'panel',
	        		html: '<div style="font-size:94%;width: 100%;text-align: center;"><b>MY BOX CONTENTS</b></div>'
	        	},
	        	{
	        		xtype: 'panel',
	        		html: '<div style="float:left;font-size:94%;width: 100%;"><div style="width:35px;float:left;font-size:94%;">&nbsp;</div><div style="width:37%;float:left;font-size:94%;"><b>Item</b></div><div style="width:15%;float:left;font-size:94%;"><b>Price</b></div><div style="width:23%;float:left;font-size:94%;"><b>Condition</b></div><div style="width:7%;float:left;font-size:94%;"><b>Remove</b></div></div>'
	        	},
	        	{
					xtype: 'dataview',
					flex: 3,
					id: 'boxItemsListID',
					itemId: 'boxItemsListID',
		        	cls: 'x-busket-products',
					loadingText: false,
		        	store: 'ItemInBoxStore',
		        	itemTpl: [
		        		'<div style="float: left;width: 100%;padding: 10px 0px;">'+
		        			'<div class="headshot" style="height: 35px;width:35px;padding: 0px;float: left; background:url(\'/thumb.php?file=product/{ProductObj.Picture}&sizex=35&sizey=35\') left top no-repeat;"></div>'+
		        			'<div style="width: 37%;padding: 0px;float: left;font-size: 12px;">{ProductObj.Name}</div>'+
		        			'<div style="width: 15%;padding: 0px;float: left;font-size: 12px;">${ProductPrice}</div>'+
		        			'<div style="width: 23%;padding: 0px;float: left;font-size: 12px;">{Condition}</div>'+
		        			'<div style="width: 15%;float: left;" id="{Id}"></div>'+
		        		'</div>'
		        	].join(''),
		        	listeners:{
			        
					    refresh: function(obj, eOpts){
					    	length = obj.getStore().data.all.length;
					        for(var i = 0; i < length; i++)
					        {
					        	id = obj.getStore().data.all[i].raw.Id;
					        	new Ext.Button({
					                renderTo: id,
					                itemId: id,
					                cls: 'x-buttons-delete',
					                ui: 'decline',
					                text: 'X'
					                //iconCls: 'delete'
					            })
					        }
					    }
				    }
				},
				{
	        		xtype: 'panel',
	        		itemId: 'boxTotalItems',
	        		height: 30,
	        		style: 'line-height: 30px',
	        		html: '<div style="float:left;font-size:94%;width: 100%;"><div style="width: 30%;float: left;"><b>TOTAL: </b><span id="total_count">0</span></div> <div style="width: 30%;float: left;"><b>Worth: </b>$<span id="total_worth">0</span></div> </div>'
	        	}
	        ]	
	        	        	
        },
        updateData: function(newData) {
			
			price_total = 0;
	    	for(var i=0; i<newData.length; i++)
	    	{	
	    		price_total += parseFloat(newData[i].data.ProductPrice);
	    	}
	    	Ext.select("#total_worth").setHtml(price_total.toFixed(2));
	    	Ext.select("#total_count").setHtml(newData.length);
	    }
		
});