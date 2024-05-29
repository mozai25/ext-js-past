Ext.define('mob.view.PoorPopUp', {
    extend: 'Ext.Sheet',
    xtype: 'poorpopup',
	
    config: {
        baseCls: 'product-view',
        centered: true,
        width: '95%',
        height: '60%',
        modal: true,
        hideOnMaskTap: true,

        layout: {
            type: 'hbox'
        },

        items: [
            {
                xtype: 'panel',
				cls: 'description',
            	itemId: 'poorId',
                scrollable: null,
                html: 'description of this option'
            }
        ],

        showAnimation: {
            type: 'fadeIn',
            duration: 250,
            easing: 'ease-out'
        },

        hideAnimation: {
            type: 'fadeOut',
            duration: 250,
            easing: 'ease-in'
        }
    }
});
