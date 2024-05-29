Ext.define('mob.model.Trade', {
extend: 'Ext.data.Model',
config: {
    /*
     * Define the fields we get back from our ajax request
     */
    fields: [
        'sendBox',
		'heardAbout',
		'boxId',
		'userId',
		'boxPS',
		'boxSR',
		'dated',
		'last_updated',
		'last_item_updated',
		'batchId',
		'batchUpdated',
		'paymentType',
		'totalCount',
		'totalOrderPrice',
		'totalAdminOrderPrice',
		'correctedOrderPrice',
		'initTotalPrice',
		'boxObject',
		'userObject',
		'paypalObject',
		'WorkerObject',
		'OrderDetails'
    ]
}
});