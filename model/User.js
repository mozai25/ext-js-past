Ext.define('mob.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'Id',
        	'FirstName',
        	'LastName',
        	'PaymentFirstname',
        	'PaymentLastname',
        	'ShippingpaymentFirstname',
        	'ShippingpaymentLastname',
        	'Email',
        	'UserPassword',
        	'RegdateTime',
        	'EmailNewsLetter',
        	'PaypalEmail',
        	'HeardSource',
        	'SendBox',
        	'AdminPaymentNotice',
        	'Addresses',
        	'ClientAddresses',
        	'Confirm',
        	'IsGuest',
        	'ViewAddressCheck'
        ]
        ,
    	proxy: {
            type: 'ajax',
            api: {
                create: 'json_adapter.php?action=user&method=create',
                read: 'json_adapter.php?action=user&method=read',
                update: 'json_adapter.php?action=user&method=update',
                destroy: 'json_adapter.php?action=user&method=destroy'
            }
        }
    },
	proxySuccess: function (record, operation) {
        switch (operation.getAction()) {
            case 'create':
                console.log('From the server: Created the ' + record.get('name') + ' hotel.');
                break;
            case 'read':
                console.log('From the server: Loaded the ' + record.get('name') + ' hotel.');
                break;
            case 'update':
                console.log('From the server: Updated the ' + record.get('name') + ' hotel.');
                break;
            case 'destroy':
                console.log('From the server: Erased the ' + record.get('name') + ' hotel.');
                break;
        }
    },
	proxyFailure: function (record, operation) {
        switch (operation.getAction()) {
            case 'create':
                console.log('From the server: Failed to create hotel.');
                break;
            case 'read':
                console.log('From the server: Failed to read hotel.');
                break;
            case 'update':
                console.log('From the server: Failed to update hotel.');
                break;
            case 'destroy':
                console.log('From the server: Failed to erase hotel.');
                break;
        }
    },

    proxyCallback: function (record, operation) {
        console.log('This function is always invoked, regardless of success or failure');
    }
});