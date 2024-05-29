Ext.define('mob.model.Press', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'image',
        'link',
        'text',
        'date'
    ]
}
});