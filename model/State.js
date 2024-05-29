Ext.define('mob.model.State', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'abbr',
        'state'
    ]
}
});