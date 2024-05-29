Ext.define('mob.view.tablet.SubCategories', {
    extend: 'Ext.List',
    xtype: 'subcategories',
	
    	config: {
        	//title: 'Sub Categories',
        	baseCls: 'x-categories',
			loadingText: false,
        	store: 'CategoriesStore',
        	itemTpl: [
            	'<div class="headshot" style="background:url(/thumb.php?file=categoryimages/{CategoryImage}&sizex=212&sizey=127) 50% top no-repeat;"></div>',
            	'<div class="name">{Description}</div>'
        	].join('')
    		
    	
    	}
		
});