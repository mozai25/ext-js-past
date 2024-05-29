Ext.define('mob.model.ClientAddress', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'ID',
        'Address1',
		'Address2',
		'City',
		'Country',
		'State',
		'Zipcode',
		'Zipcode4',
		'TimeAdded',
		'Name',
		'Primary',
		'UserID',
		'ShippingFlag',
		'PaymentFlag'
    ]
}
});