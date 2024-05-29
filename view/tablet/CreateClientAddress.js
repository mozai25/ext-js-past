Ext.define('mob.view.tablet.CreateClientAddress', {
    extend: 'Ext.form.Panel',
    xtype: 'createclientaddress',
	
	requires: [
        //'Ext.field.Password'
    ],
	
    config: {
        autoDestroy: false,
		title: 'Create Address',
		modal: true,
		centered: true,
        width: '85%',
        height: '70%',
        id: 'create_address_id',
        hideOnMaskTap: true,
		baseCls: 'address-view',
		style: 'background-color:white',
        items: [
			{
				xtype: 'textfield',
				//label: 'Address Name',
				//labelWidth: '50%',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Address Name',
				required: true,
				name: 'address_name'
			},
			{
				xtype: 'textfield',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd',
					'display':'none'
				},
				placeHolder: 'First Name',
				required: false,
				name: 'first_name_address',
				itemId: 'first_name_address'
			},
			{
				xtype: 'textfield',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd',
					'display':'none'
				},
				placeHolder: 'Last Name',
				required: false,
				name: 'last_name_address',
				itemId: 'last_name_address'
			},
			{
				xtype: 'textfield',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Address Line 1',
				required: true,
				name: 'address1'
			},
			{
				xtype: 'textfield',
				//label: 'Address Line 2',
				//labelWidth: '50%',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Address Line 2',
				required: false,
				name: 'address2'
			},{
				xtype: 'textfield',
				//label: 'City',
				//labelWidth: '50%',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'City',
				required: true,
				name: 'city'
			},{ 
				itemId: 'selectstate',
				xtype: 'selectfield',
				placeHolder: 'Sorry, we could not get any value',
				valueField:'abbr',
				displayField:'state',
				label: 'State',
				labelWidth: '50%',
				store: 'StateStore',
				name: 'state'
			},
			{
				xtype: 'textfield',
				//label: 'Zip',
				//labelWidth: '50%',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Zip',
				required: true,
				name: 'zip'
			},
			{
				xtype: "button",
				ui: "confirm",
				text: "Create",
				margin: '15 0 0 0',
				padding: '0 10 0 10',
				itemId: 'create_address'
		    }		
        ]
    },
	
    initialize: function() {
	
    },
	
    updateData: function(newData) {
        if(newData.IsGuest == "1")
		{
			this.down("#first_name_address").show();
			this.down("#last_name_address").show();
		}else{
			this.down("#first_name_address").hide();
			this.down("#last_name_address").hide();
		}
    }
});
