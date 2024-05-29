Ext.define('mob.view.tablet.ClientAccountPassword', {
    extend: 'Ext.form.Panel',
    xtype: 'clientaccountpassword',
	
	//
	
	requires: [
        'Ext.field.Password'
    ],
	scrollable: {
    	direction: 'vertical',
    	directionLock: true
    },
   	
    config: {
    	//title: 'Password',
        autoDestroy: false,
		fullscreen: true,
		baseCls: 'x-client-account-password',
		type: 'formpanel',
		title: 'Settings',
        items: [
        	{
        		xtype: 'label',
    			html: 'Change Your Email & Name',
    			style:{
				    'color': '#00D2CF',
				    'font-size': '20px',
				    'margin': '10px',
				    'text-align': 'center',
				    'width': '100%'
    			}
        	},
			{
				required: true,
				xtype: 'emailfield',
				//label: 'User email',
				name: 'user_email',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'User email'
				//labelWidth: '50%'
			},
			{
				required: true,
				xtype: 'textfield',
				//label: 'First Name',
				name: 'user_first',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'First Name'
				//labelWidth: '50%'
			},
			{
				required: true,
				xtype: 'textfield',
				//label: 'Last Name',
				name: 'user_second',
				style:{
					'margin':'5px 15px 5px 15px',
					'border':'1px solid #dddddd'
				},
				placeHolder: 'Last Name'
				//labelWidth: '50%'
			},	
			{
		      	
					xtype: "button",
					ui: "confirm",
					text: "Submit",
					margin: '15',
					padding: '10 10 10 10',
					itemId: 'submit_data'
					
		    	},{
					xtype: 'spacer',
					style:{
						'height':'50px'
					}
				},
				{
	        		xtype: 'label',
	    			html: 'Change Your Password',
	    			style:{
					    'color': '#00D2CF',
					    'font-size': '20px',
					    'margin': '10px',
					    'text-align': 'center',
					    'width': '100%'
	    			}
	        	},
				{
					xtype: 'textfield',
					//label: 'Old password',
					style:{
						'margin':'5px 15px 5px 15px',
						'border':'1px solid #dddddd'
					},
					placeHolder: 'Old password',
					name: 'old_password'
					//labelWidth: '50%'
				},
				{
					xtype: 'textfield',
					//label: 'New password',
					name: 'new_password',
					style:{
						'margin':'5px 15px 5px 15px',
						'border':'1px solid #dddddd'
					},
					placeHolder: 'New password'
					//labelWidth: '50%'
				},
				{
					xtype: 'textfield',
					//label: 'Confirm password',
					name: 'confirm_password',
					style:{
						'margin':'5px 15px 5px 15px',
						'border':'1px solid #dddddd'
					},
					placeHolder: 'Confirm password'
					//labelWidth: '50%'
				},{
			      
					xtype: "button",
					ui: "confirm",
					text: "Submit",
					margin: '15',
					padding: '10 10 10 10',
					itemId: 'submit_passwords'
			    },{
					xtype: 'accountlinks'
				},
				{
					xtype: 'bottomareaclients'
				}
        ]
    },
    updateData: function(newData) {
    	
    	//console.log(newData);
    	
        //var image = this.down('image');
        //image.element.dom.style.backgroundSize = "30%";
        //image.element.dom.style.backgroundImage = 'url(resources/images/loading.gif)';
        //image.setSrc('');//
        //image.setSrc('/thumb.php?file=product/' + newData.Picture);  //{Picture}&sizex=110&sizey=123
    	//Ext.getCmp('description').setData(newData);
    	//Ext.ComponentQuery.query('panel[itemId="description"]')[0].setData(newData);
    }

});
