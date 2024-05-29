Ext.define('mob.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main_top',
	
    config: {
		useTitleForBackButtonText: false,
		autoDestroy: false,
		defaultBackButtonText: 'Back',
			
		navigationBar: {
				
				zIndex: 1,
				cls: 'nav_bbw',
				style: {
					'height':'40px',
					'padding': '0px',
					'background-color': '#04B8B7',
					'color': '#04B8B7'
				},
				backButton: {
	                iconCls: 'arrow_left',
	                cls: 'back_bbw',
	                style:{
	                	'color':'#14a9ea',
	                	'background-color':'transparent',
	                	'background-image':'none'
	                }
	            },
	            
	            items: [
	            	{
	                    xtype: 'button',
	                    cls: 'my_logo_icon',
	                    itemId: 'my_logo_icon',
	                    align: 'left',
	                    hidden: false,
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	                {
	                    xtype: 'button',
	                    style:{
	                    	'color':'#00d24b',
	                    	'font-weight':'bold',
	                    	'font-size':'95%',
	                    	'margin':'0px',
	                    	'border-right':'1px solid #ccc',
	                    	'border-radius':'0px'
	                    },
	                    itemId: 'buy_more_items',
	                    cls: 'completed_class',
	                    align: 'right',
	                    hidden: false,
	                    text: 'BUY FROM US',
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	                {
	                    xtype: 'button',
	                    style:{
	                    	'color':'#10A6E7',
	                    	'font-weight':'bold',
	                    	'font-size':'95%',
	                    	'margin':'0px'
	                    },
	                    itemId: 'sell_bulk_items',
	                    cls: 'completed_class',
	                    align: 'right',
	                    hidden: false,
	                    text: 'SELL IN BULK',
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	                {
	                    xtype: 'button',
	                    style:{
	                    	'color':'#FC0202'
	                    },
	                    iconCls: 'icon-info',
	                    itemId: 'terms_condition',
	                    cls: 'completed_class',
	                    align: 'right',
	                    hidden: true,
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	                {
	                    xtype: 'button',
	                    style:{
	                    	'color':'#04B8B7'
	                    },
	                    iconCls: 'icon-add-address',
	                    itemId: 'new_address',
	                    cls: 'completed_class',
	                    align: 'right',
	                    text: 'Address',
	                    hidden: true,
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	                {
	                    xtype: 'button',
	                    style:{
	                    	'color':'#04B8B7'
	                    },
	                    iconCls: 'icon-reload',
	                    //itemId: 'completed',
	                    text: 'Completed',
	                    cls: 'completed_class',
	                    align: 'right',
	                    hidden: true,
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	                {
	                    xtype: 'button',
	                    style:{
	                    	'color':'#04B8B7',
	                    	'margin': '0',
    						'padding': '0'
	                    },
	                    iconCls: 'icon-box',
	                    itemId: 'box_items',
	                    cls: 'completed_class added_items_class',
	                    align: 'right',
	                    hidden: true,
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                },
	            	{
	                    xtype: 'button',
	                    style:{
	                    	'color':'#14a9ea'
	                    },
	                    iconCls: 'icon-list',
	                    cls: 'my_account_class',
	                    itemId: 'my_acccount',
	                    //id: 'my_acccount',
	                    //text: 'Account',
	                    align: 'right',
	                    hidden: false,
	                    hideAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeOut',
	                        duration: 200
	                    },
	                    showAnimation: Ext.os.is.Android ? false : {
	                        type: 'fadeIn',
	                        duration: 200
	                    }
	                }
	            ]
	        }
    	}
});
