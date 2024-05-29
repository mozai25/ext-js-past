Ext.define('mob.view.DisplayField', {
	
	extend: 'Ext.field.Field',
    xtype: 'displayField',
    
    config: {
        displayText: null,
        component: {
            xtype: 'displayFieldComponent'
        }
    },
    
    initialize: function() {
        var me = this,
            comp = me.getComponent();
        me.callParent();
    },
    
    updateDisplayText: function(value) {
        var me = this,
            comp = me.getComponent();
        comp.displayElement.setHtml(value);
    }
	
});