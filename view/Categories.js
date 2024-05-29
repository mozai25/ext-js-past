var s1 = null;
var s2 = null;

Ext.define('mob.view.Categories', {
    extend: 'Ext.Carousel',
    xtype: 'categoriespage',
	
	config: {
		
		cls: "x-categories-item-front",
		itemId: 'categories_page',
		id: 'categories_page',
		baseCls: 'x-categories',
		loadingText: false,
		indicator: false
		
	}
})