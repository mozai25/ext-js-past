Ext.define('mob.view.tablet.AccountLinks', {
    extend: 'Ext.List',
    xtype: 'accountlinks',
	
    	config: {
        	scrollable: {
                scroller: {
                    disabled: true
                }
            },
            height: '327px',
			onItemDisclosure: true,
			itemId: 'account_info_place',
			cls: 'account_info_place',
			itemTpl: '{title}',
		    data: [
		        { title: 'My Account', id: 'account_bottom' },
		        { title: 'How It Works', id: 'how_bottom' },
		        { title: 'Why Use Us', id: 'why_bottom' },
		        { title: 'About Us', id: 'about_bottom' },
		        { title: 'FAQs', id: 'faqs_bottom' },
		        { title: 'Sell In Bulk', id: 'sell_bulk_bottom' },
		        { title: 'Get A Custom Quote', id: 'custom_quote_bottom' }
		        
		    ]
    	}
		
});