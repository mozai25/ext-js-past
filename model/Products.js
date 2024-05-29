Ext.define('mob.model.Products', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
        'Id',
		'Categoryid',
		'Brand',
		'Name',
		'FullName',
		'Picture',
		'NewPrice',
		'ExcellentPrice',
		'AveragePrice',
		'PoorPrice',
		'DeadPrice',
		'Display',
		'LastUpdated',
		'ProductURL',
		'RawProductURL',
		'CustomFields',
		'CardBuyBack',
		'CardMaxValue',
		'CardMinValue',
		'GiftInitPrice',
		'GiftFinalPrice',
		'GiftFinalCount',
		'CardBalanceCheck',
		'CardBalanceLink',
		'CardBalanceLinkText',
		'DeadPriceEnabled',
		'QuestionModuleArray',
		'ConditionObject',
		
		'QuickPassFlag',
		'QuickPassChangeValue',
		'QuickPassChangedBy',
		'QuickPassLive',
		'QuickPassStatusNew',
		'QuickPassStatusExcellent',
		'QuickPassStatusAverage',
		'QuickPassStatusPoor',
		'QuickPassStatusDead',
		'QuickPassStatusDeadPrice',
		'QuickPassStatusPoorPrice',
		'QuickPassStatusAveragePrice',
		'QuickPassStatusExcellentPrice',
		'QuickPassStatusNewPrice'
		
		
    ]
}
});