Ext.define('mob.model.ItemInBox', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
        'ProductPrice', 
		'ProductObj',
		'ProductId',
		'Id',
		'Dated',
		'Condition'
    ]
}
});