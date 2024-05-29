Ext.define('mob.view.tablet.ClientAddressEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'editclientaddress',
	
	requires: [
        'Ext.field.Toggle',
       	'Ext.field.Hidden'
    ],
	
    config: {
    	autoDestroy: false,
		fullscreen: true,
		type: 'formpanel',
		title: 'Edit',
        layout: {
            type: 'vbox',
			align: 'stretch'
        },
    	
		//title: 'Edit Address',
        id: 'edit_address_id',
		baseCls: 'edit-address-view',
        items: [
        	{
        		xtype: 'hiddenfield',
        		name: 'address_id'
        	},
			{
				xtype: 'textfield',
				label: 'Address Name',
				labelWidth: '50%',
				required: true,
				name: 'edit_address_name'
			},
			{
				xtype: 'textfield',
				label: 'Address Line 1',
				labelWidth: '50%',
				required: true,
				name: 'edit_address1'
			},
			{
				xtype: 'textfield',
				label: 'Address Line 2',
				labelWidth: '50%',
				required: false,
				name: 'edit_address2'
			},{
				xtype: 'textfield',
				label: 'City',
				labelWidth: '50%',
				required: true,
				name: 'edit_city'
			},{ 
				itemId: 'selectstateedit',
				xtype: 'selectfield',
				placeHolder: 'Sorry, we could not get any value',
				valueField:'abbr',
				displayField:'state',
				label: 'State',
				labelWidth: '50%',
				store: 'StateStore',
				name: 'edit_state'
			},
			{
				xtype: 'textfield',
				label: 'Zip',
				labelWidth: '50%',
				required: true,
				name: 'edit_zip',
				maxLength: 5
			},
			{
				xtype: 'togglefield',
			    name: 'edit_primary',
			    labelWidth: '50%',
			    label: 'Primary?'
			    //labelWidth: '40%'
			},
			{
				xtype: "button",
				ui: "confirm",
				text: "Edit",
				margin: '15',
				padding: '10 15',
				itemId: 'edit_submit_address_button'
		    },{
				xtype: 'accountlinks',
				style: {
				    'height': '237px'
				}
			},
			{
				xtype: 'bottomareaclients'
			}		
        ]
    }
});
