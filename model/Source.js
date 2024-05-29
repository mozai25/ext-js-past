Ext.define('mob.model.Source', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'id',
        'source'
    ]
}
});