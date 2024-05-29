Ext.define('mob.model.QuestionModule', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
		'QuestionId',
        'QuestionText', 
        'SubstrAmount', 
        'QuestionIsEnabled',
		'QuestionIsDeleted',
    	'CommonId',
    	'SetZero',
    	'LinkQuestion',
    	'ShowForDead',
    	'ShowForPoor',
    	'ShowForAverage',
    	'ShowForExcellent',
    	'ShowForNew'
    ]
}
});