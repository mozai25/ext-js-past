Ext.define('mob.model.RequiredMinimumResult', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'pass',
		'answer'
    ]
}
});