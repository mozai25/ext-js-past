Ext.define('mob.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'tablet',
        namespace: 'tablet',
        controllers: [
				'Category'
			],
		stores: [
				//'mob.store.TopLinksStoreBrand',
				'mob.store.TopLinksStoreCategory',
				'mob.store.CategoriesStore',
				'mob.store.NotMainCategoriesStore',
				'mob.store.ProductStore',
				'mob.store.TradesStore',
				'mob.store.BrandsStore',
				'mob.store.PropertiesStore',
				'mob.store.PropertiesStoreDrop',
				'mob.store.UsersStore',
				'mob.store.SettingsStoreBBW',
				'mob.store.ClientAddressStore',
				'mob.store.ClientAddressStoreVerified',
				'mob.store.StateStore',
				'mob.store.SourceStore',
				'mob.store.ItemInBoxStore',
				'mob.store.TradeDetailStore',
				'mob.store.PressStore',
				'mob.store.CheckFreeKit'
				],
		views: [
				'mob.view.tablet.TopAccountLinksProperty',
				'mob.view.tablet.TopAccountLinksBrand',
				'mob.view.tablet.TopAccountLinksCategory',
				'mob.view.tablet.Main',
				'mob.view.tablet.WhatIsBBW',
				'mob.view.tablet.WhatSellBBW',
				'mob.view.tablet.WhySellBBW',
				'mob.view.tablet.UpdateConfirmPayment',
				'mob.view.tablet.UpdatePaymentProcessCheck',
				'mob.view.tablet.UpdatePaymentProcessPaypal',
				'mob.view.tablet.UpdateShippingInfo',
				'mob.view.tablet.GiftCards',
				'mob.view.tablet.GiftCard',
				'mob.view.tablet.GiftCardBalance',
				'mob.view.tablet.GiftCardBalancePage',
				'mob.view.tablet.UpdateGiftPrice',
				'mob.view.Categories',
				'mob.view.TermsServices',
				'mob.view.NotMainCategories',
				'mob.view.LoginRegister',
				'mob.view.PoorPopUp',
				'mob.view.Main',
				'mob.view.tablet.Guest',
				'Product',//
				'Products',//
				'SubCategories',//
				'Brands',//
				'Properties',//
				'PropertiesDropDown',//
				'ClientAccountTrades',//
				'ClientAccountPassword',//
				'ClientAccount',//
				'Login',//
				'Register',//
				'PaymentProcess',//
				'PaymentProcessAddress',//
				'PaymentProcessCheck',//
				'PaymentProcessCheckNotEqual',//
				'ShippingInfoAddressNotEqual',//
				'PaymentProcessCheckAddress',//
				'ShippingInfoAddress',//
				'CreateClientAddress',//
				'PaymentProcessPaypal',//
				'ShippingMethod',//
				'ShippingInfo',//
				'Confirm',//
				'ItemsInBox',//
				'ClientAccountTradeDetails',//
				'ClientAccountAddresses',//
				'ClientAddressEdit',//
				'ThankYou',
				'AccountLinks',
				'TopAccountLinks',
				'HowItWorks',
				'WhyUseUs',
				'AboutUs',
				'FAQs',
				'PressReleases',
				'BottomAreaClients',
				'AskWindow'
				],//
		models: [
				'mob.model.MenuItemCategory',
				'mob.model.Categories', 
				'mob.model.Products', 
				'mob.model.Trade',
				'mob.model.Property',
				'mob.model.Brands',
				'mob.model.User',
				'mob.model.SettingsBBW',
				'mob.model.ClientAddress',
				'mob.model.State',
				'mob.model.Source',
				'mob.model.ItemInBox',
				'mob.model.TradeDetails',
				'mob.model.Press',
				'mob.model.FreeKit',
				'mob.model.QuestionModule'
		]
    },

    isActive: function() {
        return true;//!Ext.os.is.Phone;
    },
	
    launch: function() {
		//console.log("profile launch app");
        Ext.create('mob.view.tablet.Main');
    }
});
