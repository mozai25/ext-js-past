Ext.define('mob.view.tablet.ClientAccountAddresses', {
    extend: 'Ext.Panel',
    xtype: 'clientaccountaddresses',
	
    	config: {
        	title: 'Addresses',
        	scrollable: {
	        	direction: 'vertical',
	        	directionLock: true
	        },	
	        	
        	items:[
        		
        		{
        			xtype: 'dataview',
		        	baseCls: 'x-client-account-trades',
					autoDestroy: false,
					loadingText: false,
					style: {
						'height':'150px'
					},
					//id: 'ClientAddressListId',
					itemId: 'ClientAddressListId',
		        	store: 'ClientAddressStore',
		        	
		        	itemTpl: [
						'<div style="float: left;width: 100%;padding: 5px 0px;border-top: 1px solid #00D2CF;line-height: 30px;">'+
							'<div style="width:80%;font-size:10px;padding:0px 0px 0px 10px;float:left;">{Name}</div>'+
		            		//'<span style="width:16%;padding:10px;float:left;">{Address2}</span>'+
		            		//'<span style="width:16%;padding:10px;float:left;">{City}</span>'+
		            		//'<span style="width:16%;padding:10px;float:left;">{State}</span>'+
		            		//'<span style="width:16%;padding:10px;float:left;">{Zipcode}</span>'+		
		            		'<div style="width:15%;font-size:10px;padding:10px 0px;float:left;" id="address_{ID}"></div>'+
		            	'</div>'
		        	].join(''),
					listeners:{
						
						initialize: function(obj, eOpts){
							
							var bbwStore = Ext.getStore('SettingsStoreBBW');
		        			user = bbwStore.getCookie("user");
							store = obj.getStore();
							store.getProxy().setExtraParams(
							{ 
								//get values from phonegap
								user_id : user.Id
							});
							store.load();
							
						},
				    	refresh: function(obj, eOpts){
				    		
				    		//var bbwStore = Ext.getStore('SettingsStoreBBW');
		        			//user = bbwStore.getCookie("user");
				    		
				    		length = obj.getStore().data.all.length;
					        for(var i = 0; i < length; i++)
					        {
					        	id = obj.getStore().data.all[i].raw.ID;
					        	
					        	new Ext.Button({
									renderTo: "address_"+id,
								   	itemId: id,
								   	width: '100%',
								   	cls: 'x-buttons-edit',
								  	ui: 'confirm',
								    text: 'Edit'
								 });
					        	
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