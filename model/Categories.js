Ext.define('mob.model.Categories', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
    	'IsGiftCard',
		'RawCategoryURL',
        'CategoryImage', 
        'CategoryURL', 
        'Description',
		'Id'
    ]
}
});