Ext.define('mob.view.tablet.PropertiesDropDown', {
    extend: 'Ext.form.FormPanel',
    xtype: 'propertiesdropdown',

    requires: [
			'Ext.Img', 
			'mob.view.LoginRegister',
    		'Ext.field.Select'
			],

    config: {
        autoDestroy: false,
		fullscreen: true,
		type: 'formpanel',
		//title: 'Product name',
		baseCls: 'x-dropdown-form',
		
        items: [
			{ 
				cls: 'x-dropdown-form-select',
				itemId: 'selectproperty',
				xtype: 'selectfield',
				placeHolder: 'Sorry, we could not get any value',
				valueField:'Id',
				displayField:'Value',
				flex:1,
				label: 'Select property',
				labelWidth: '50%',
				initdata: false,
				loadingText: false,
				style:{
					'height':'150px'
				},
				listeners: {
					
					//initialize: function (obj, eOpts) {
					//	obj.initdata = false;
					//}
					
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
