Ext.define('mob.model.Property', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'Id',
        'Value', 
        'Picture', 
        'Order',
		'Url',
    	'PropertyId',
    	'Name'
    ]
}
});