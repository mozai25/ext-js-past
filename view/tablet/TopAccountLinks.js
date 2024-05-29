Ext.define('mob.view.tablet.TopAccountLinks', {
    extend: 'Ext.List',
    xtype: 'topaccountlinks',
	
    	config: {
    		modal: true,
    		left: 0,
           	top: 0,
           	width:'100%',
           	height:'375px',
           	hideOnMaskTap: false,
        	scrollable: {
                scroller: {
                    disabled: false
                }
            },
			onItemDisclosure: true,
			itemId: 'top_account_info_place',
			cls: 'top_account_info_place',
			itemTpl: '<span class="{icon}" style="margin-right: 25px;"></span>{title}',
		    data: [
		    	{ title: 'Sell By Category', id: 'category_list', icon: 'icon-th-list-2' },
		        { title: 'My Account', id: 'account', icon: 'icon-lock-4' },
		        { title: 'How It Works', id: 'how', icon: 'icon-th-2' },
		        //{ title: 'Why Use Us', id: 'why' },
		        //{ title: 'About Us', id: 'about' },
		        { title: 'FAQs', id: 'faqs', icon: 'icon-question' },
		        { title: 'Sell In Bulk', id: 'sell_bulk', icon: 'icon-glyph-89' },
		        { title: 'Get A Custom Quote', id: 'custom_quote', icon: 'icon-glyph-46' },
		        { title: 'Buy From BuyBackWorld', id: 'buys', icon: 'glyphicon-globe' },
		        { title: 'Log Off', id: 'logoff_bottom', icon: 'glyphicon-share-alt' }
		    ]
    	}
		
});