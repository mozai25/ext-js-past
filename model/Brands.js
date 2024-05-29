Ext.define('mob.model.Brands', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'BrandRawURL',
        'Picture', 
        'BrandURL', 
        'Description',
		'Id',
    	'Category'
    ]
}
});