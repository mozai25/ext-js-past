var array_view = [];

Ext.define('mob.controller.tablet.Category', {
    extend: 'Ext.app.Controller',
	
	requires: ['Ext.field.Radio', 'mob.view.PoorPopUp'],
	
	config: {
		
		//start of routes
		
		routes: {
			'product/:id': 'getProductLink',
			'product/:id/:price/:count': 'getProductLink',
			'category.php?.*': 'getCategoryLink',
			'cards.php?.*': 'getCategoryLink', //'getCardsLink',
			'iphone/': 'getIphoneLink',
			'blackberry/': 'getBlackberryLink',
			'samsung/': 'getSamsungLink',
			//'home/': 'getHomeLink',
			'login/': 'getLoginLink',
			'payment/': 'getPaymentLink',
			'trades/': 'getTradesLink',
			'shipping_method/': 'getShippingMethodLink',
			'shipping_info/': 'getShippingInfoLink',
			'thank-you/': 'onThankYouPage',
			'gift-card-balance-check/': 'onGiftCardBalanceCheck',
			'gift-card-balance-check/:id': 'onGiftCardBalanceCheck',
			'choice/': 'onShowAskWindow'
		},
		
		//end of routes
		
		refs:{ 
			main : 'main',
			giftcards: 'giftcards',
			giftcardbalance: 'giftcardbalance',
			giftcardbalancepage: 'giftcardbalancepage',
			update_gift_obj: 'update_gift_obj',
			pressreleases: 'pressreleases',
				
			topaccountlinks: 'topaccountlinks',
			topaccountlinkscategory: 'topaccountlinkscategory',
			topaccountlinksbrand: 'topaccountlinksbrand',
			topaccountlinksproperty: 'topaccountlinksproperty',
				
			top_account_category: '[itemId="top_account_category_place"]',
			top_account_brand: '[itemId="top_account_brand_place"]',
			top_account_property: '[itemId="top_account_property_place"]',
			message_ship_list_address_registered: '[itemId="message_ship_list_address_registered"]',
			message_for_list_registered_users: '[itemId="message_for_list_registered_users"]',
			message_for_list_registered_users_or: '[itemId="message_for_list_registered_users_or"]',
			
			askwindow: 'askwindow',
			categoriespage: 'categoriespage',
			main_panel_scroll_menu: '#main_panel_scroll_menu',
			bottom_info_panel: '#bottom_info_panel',
			accountlinks: 'accountlinks',
			bottomareaclients: 'bottomareaclients',
			howitworks: 'howitworks',
			whyuseus: 'whyuseus',
			aboutus: 'aboutus',
			faqs: 'faqs',
			thankyou: 'thankyou',
			notmaincategoriespage: 'notmaincategoriespage',
			notmain_categories_page: 'notmain_categories_page',
			brands: '[itemId="brands_list_items"]',//brands
			properties: '[itemId="property_list_items"]',
			new_pages: '[itemId="new_pages"]',
				
			carouselbtnrightfeedback: '[itemId="carousel-btn-right-feedback"]',
			carouselbtnleftfeedback: '[itemId="carousel-btn-left-feedback"]',
			carousellinksfeedback: '[itemId="carousel_links_feedback"]',
			
			subcategories: 'subcategories',
			products: 'products',
			productsSelectItem: '[itemId="products_list_items"]',
			product_obj: 'product_obj',
			gift_obj: 'gift_obj',
			descr_panel: 'panel[itemId="description"]',
			loginregister: 'loginregister',
			login: 'login',
			register: 'register',
			clientaccount: 'clientaccount',
			clientaccounttrades: 'clientaccounttrades',
			clientaccounttradesList: 'clientaccounttrades > #clientaccounttradesView',
			clientaccounttradedetails: 'clientaccounttradedetails',
			clientaccountpassword: 'clientaccountpassword',
			propertiesdropdown: 'propertiesdropdown',
			selectproperty: '[itemId="selectproperty"]',
			selectstate: '[itemId="selectstate"]',
			paymentprocess: 'paymentprocess',
			createclientaddress: 'createclientaddress',
			addressListID: '#addressListID',
			addressListIDRegistered: '#addressListIDRegistered',
			addressListVerifiedID: '#addressListVerifiedID',
			shippingNotequalListID: '#shippingNotequalListID',
			updateAddressListID: '[itemId="updateAddressListID"]',
			shippingListID: '[itemId="shippingListID"]',
			shippingListIDRegistered: '[itemId="shippingListIDRegistered"]',
			paymentprocesspaypal: 'paymentprocesspaypal',
			submit_paypal_email: '[itemId="submit_paypal_email"]',
			update_paypal_email: '[itemId="update_paypal_email"]',
			shippingmethod: 'shippingmethod',
			shipping_kit: 'button[itemId="request_free_kit"]',//'shippingmethod > #request_free_kit',
			own_shipping_kit: 'button[itemId="own_free_kit"]',//'shippingmethod > #own_free_kit',
			confirmmethod: 'confirmmethod',	
			termsservices: 'termsservices',
			itemsinbox: 'itemsinbox',
			boxItemsListID: '[itemId="boxItemsListID"]',
			tradeDetailsAccountId: '[itemId="tradeDetailsAccountId"]',
			ClientAddressListId: 'clientaccountaddresses > #ClientAddressListId',
			press_links: '[itemId="carousel_links"]',
			paymentprocesschecknotequal: 'paymentprocesschecknotequal',
			shippinginfoaddress: 'shippinginfoaddress',
			shippinginfoaddressnotequal: 'shippinginfoaddressnotequal',
			
			//scroll_btn_left: 'categoriespage > #btn-left',
			//scroll_btn_right: 'categoriespage > #btn-right',
			
			front_general_button: 'button[itemId="front_general_button"]',
			front_iphone_button: 'button[itemId="front_iphone_button"]',
			front_samsung_button: 'button[itemId="front_samsung_button"]',
			front_blackberry_button: 'button[itemId="front_blackberry_button"]',
			front_ipad_button: 'button[itemId="front_ipad_button"]',
			front_custom_quote_button: 'button[itemId="front_custom_quote_button"]',
			front_great_deal_button: 'button[itemId="front_great_deal_button"]',
			front_bulk_sell_button: 'button[itemId="front_bulk_sell_button"]',
			front_store_buy_button: 'button[itemId="front_store_buy_button"]',
			
			
			poor_id: 'button[itemId="poor_id"]',
			average_id: 'button[itemId="average_id"]',
			exc_id: 'button[itemId="exc_id"]',
			new_id: 'button[itemId="new_id"]',
			submit_order: 'button[itemId="submit_order"]',
			submit_gift: 'button[itemId="submit_gift"]',
			submit_login: 'button[itemId="submit_login"]',
			submit_guest: 'button[itemId="submit_guest"]',
			submit_register: 'button[itemId="submit_register"]',
			next_step: 'button[itemId="next_step"]',
			confirm_submit_order: 'button[itemId="confirm_submit_order"]',
			box_items: 'button[itemId="box_items"]',
			my_acccount: 'button[itemId="my_acccount"]',
			my_logo_icon: 'button[itemId="my_logo_icon"]',
			editclientaddress: 'editclientaddress',	
			edit_address_button: 'button[itemId="edit_submit_address_button"]',
			
			showButton: 'button[itemId="completed"]',
			pendingButton: 'button[itemId="pending"]',
			newAddressButton: 'button[itemId="new_address"]',
			
			message_empty_for_list: '[itemId="message_empty_for_list"]',
			message_empty_ship_list: '[itemId="message_empty_ship_list"]',
			
			create_address: 'button[itemId="create_address"]',
			terms_condition: 'button[itemId="terms_condition"]',
			resend_kit: 'button[itemId="resend_kit"]',
			submit_passwords: 'button[itemId="submit_passwords"]',
			submit_data: 'button[itemId="submit_data"]',
			update_gift: 'button[itemId="update_gift"]',
			submit_gifts: 'button[itemId="sell_gifts_button"]',
			submit_balance: 'button[itemId="sell_gift_balance_button"]',
			sell_now_balance: 'button[itemId="sell_now_balance_button"]',
			update_page_gift: 'button[itemId="update_page_gift"]',
			
			dead_popup_yes: '[itemId="dead_popup_yes"]',
			dead_popup: '[itemId="dead_popup_no"]',
			poor_popup: '[itemId="poor_popup"]',
			average_popup: '[itemId="average_popup"]',
			excellent_popup: '[itemId="excellent_popup"]',
			new_popup: '[itemId="new_popup"]',
			userObject: null,
			confirm_email: '[itemId="confirm_email"]',
			payment_info: '[itemId="payment_info"]',
			shipping_address: '[itemId="shipping_address"]',
			updateshippinginfo: 'updateshippinginfo',
			updateShippingListID: '[itemId="updateShippingListID"]',
			updateconfirmpayment: 'updateconfirmpayment',
			updatepaymentprocesspaypal: 'updatepaymentprocesspaypal',
			updatepaymentprocesscheck: 'updatepaymentprocesscheck',
			paymentprocesscheckaddress: 'paymentprocesscheckaddress',
			termscheckbox: '[itemId="terms"]',
			promo_code: '[itemId="fieldset_promo_code"]',
			redirect_to_store: '[itemId="buy_more_items"]',
			redirect_to_bulk: '[itemId="sell_bulk_items"]',
			submit_instant_btn: '[itemId="submit_instant_btn"]',
			submit_quick_pass_btn: '[itemId="submit_quick_pass_btn"]',
			quick_pass_outer: '[itemId="quick_pass_outer"]',
			quick_pass_text: '[itemId="quick_pass_text"]',
			verify_address: '[itemId="verify_address"]',
			verify_ship_address: '[itemId="verify_ship_address"]',
			no_before_continue: '[itemId="no_before_continue"]',
			ask_before_continue: '[itemId="ask_before_continue"]'
		}
	},
	
    init: function() {
        
        //var bbwStore = Ext.getStore('SettingsStoreBBW');
    	//bbwStore.setCookie("user", null);
        
        Ext.override(Ext.util.SizeMonitor, {
		    constructor: function(config) {
		        var namespace = Ext.util.sizemonitor;

		        if (Ext.browser.is.Firefox) {
		            return new namespace.OverflowChange(config);
		        } else if (Ext.browser.is.WebKit) {
		            if (!Ext.browser.is.Silk && Ext.browser.engineVersion.gtEq('535') && 
		            	!Ext.browser.engineVersion.ltEq('537.36')) {
		                return new namespace.OverflowChange(config);
		            } else {
		                return new namespace.Scroll(config);
		            }
		        } else if (Ext.browser.is.IE11) {
		           return new namespace.Scroll(config);
		        } else {
		           return new namespace.Scroll(config);
		        }
		    }
		});

		Ext.override(Ext.util.PaintMonitor, {
		   constructor: function(config) {
		       if (Ext.browser.is.Firefox || (Ext.browser.is.WebKit && Ext.browser.engineVersion.gtEq('536') && 
		       	 	!Ext.browser.engineVersion.ltEq('537.36') && !Ext.os.is.Blackberry)) {
		           return new Ext.util.paintmonitor.OverflowChange(config);
		       }
		       else {
		           return new Ext.util.paintmonitor.CssAnimation(config);
		       }
		   }
		});
        
		this.control({
			
			main: {
                beforepop: 'onMainBeforePop',
				beforepush: 'onBeforePushMain',
				back:'onBackButtonTap',
				initialize: 'onInitializeBannerPage'
            },
            addressListID: {
            	itemtap: 'onAddressTap'
            },
            addressListIDRegistered: {
            	itemtap: 'onAddressTap'
            },
            addressListVerifiedID: {
            	itemtap: 'onAddressVerifiedTap'
            },
            updateShippingListID: {
            	itemtap: 'onTapUpdateShippingAddress'
            },
            updateAddressListID: {
            	itemtap: 'updateAddressTap'
            },
            shippingListID: {
            	itemtap: 'onShippingTap'
            },
            shippingListIDRegistered: {
            	itemtap: 'onShippingTap'
            },
            shippingNotequalListID: {
            	itemtap: 'onShippingNotEqualTap'
            },
			topaccountlinks: {
				itemtap: 'onAccountLinksTap',
				disclose: 'onAccountLinksDiscloseTap'
			},
			topaccountlinkscategory: {
				select: 'onAccountLinksCategoryTap',
				disclose: 'onAccountLinksCategoryDisclose'
			},
			topaccountlinksbrand: {
				select: 'onAccountLinksBrandTap',
				disclose: 'onAccountLinksBrandDisclose'
			},
			topaccountlinksproperty: {
				select: 'onAccountLinksPropertyTap',
				disclose: 'onAccountLinksPropertyDisclose'
			},
			accountlinks: {
				itemtap: 'onBottomAccountLinksTap'
			},
			clientaccounttradesList: {
				itemtap: 'onOrdersTap'
			},
			main_panel_scroll_menu:{
				show: 'onMainPanelScrollMenu',
				hide: 'onMainPanelScrollMenuHide',
				activate: 'MainPanelPainted',
				deactivate: 'MainPanelScrollMove'
			},
			bottom_info_panel:{
				show: 'onBottomInfoPanel'
			},
			categoriespage: {
				itemtap: 'onCategoryTap',
				show: 'onCategoryPageShow',
				hide: 'onCategoryPageHide',
				initialize: 'onInitializeCategoriesPage'
			},
			press_links:{
				initialize: 'onInitializePressLinks'
			},
			notmaincategoriespage: {
				itemtap: 'onCategoryTap',
				show: 'onNotMainCategoryShow'
			},
			notmain_categories_page:{
				show: 'onNotMainCategoriesPageShow'
			},
			brands: {
				itemtap: 'onBrandTap'
			},
			properties: {
				itemtap: 'onPropertyTap'	
			},
			subcategories: {
				itemtap: 'onSubCategoryTap'
			},
			productsSelectItem: {
				itemtap: 'onProductsTap'
			},
			selectproperty: {
				change: 'onChangeProperty'	
			},
			product_obj: {
				itemtap: 'onProductTap',
				hide: 'onHideProduct',
				show: 'onShowProduct'
			},
			gift_obj: {
				itemtap: 'onGiftTap',
				hide: 'onHideGift',
				show: 'onShowGift'
			},
			shipping_kit: {
				tap: 'onRequestShippingKit'	
			},
			own_shipping_kit:{
				tap: 'onOwnShippingKit'	
			},
			submit_paypal_email: {
				tap: 'onSubmitPaypalEmails'
			},
			update_paypal_email:{
				tap: 'onUpdatePaypalEmails'
			},
			poor_id: {
				tap: 'onPoorPopUpTap'
			},
			average_id: {
				tap: 'onAvetagePopUpTap'
			},
			exc_id: {
				tap: 'onExcellentPopUpTop'
			},
			new_id: {
				tap: 'onNewPopUpTop'
			},
			submit_order: {
				tap: 'onOrderSubmit'
			},
			submit_gift: {
				tap: 'onGiftSubmit'
			},
			submit_login: {
				tap: 'onLoginSubmit'
			},
			submit_guest: {
				tap: 'onGuestLoginSubmit'
			},
			submit_register: {
				tap: 'onRegisterSubmit'
			},
			clientaccount: {
				activeitemchange: 'onActiveItemChange'
			},
			aboutus: {
				activeitemchange: 'onAboutUsChange',
				initialize: 'onAboutUsInit'
			},
			paymentprocess: {
				activeitemchange: 'onChangePaymentProcess',
				show: 'onPaymentProcessShow'
			},
			showButton: {
				tap: 'onCompletedButton'
			},
			newAddressButton: {
				tap: 'onNewAddressButton'
			},
			
			message_empty_for_list: {
				initialize: 'initNewButtonWindow'
			},
			message_empty_ship_list: {
				initialize: 'initNewButtonWindow'
			},
			
			box_items:{
				tap: 'onBoxItemsButton'
			},
			terms_condition: {
				tap: 'onTermCondition'
			},
			create_address: {
				tap: 'onCreateAddressButton'	
			},
			pendingButton: {
				tap: 'onCompletedButton'
			},
			dead_popup: {
				check: 'onDeadPopup'
			},
			dead_popup_yes: {
				check: 'onPoorPopup'
			},
			poor_popup: {
				check: 'onPoorPopup'
			},
			average_popup: {
				check: 'onAveragePopup'
			},
			excellent_popup: {
				check: 'onExcellentPopup'
			},
			new_popup: {
				check: 'onNewPopup'
			},
			next_step: {
				tap: 'onNextButtonClick'
			},
			confirm_submit_order: {
				tap: 'onConfirmSubmitOrder'
			},
			boxItemsListID: {
				itemtap: 'onBoxItemListID'
			},
			tradeDetailsAccountId: {
				itemtap: 'onTradeDetailsAccountID'
			},
			my_acccount:{
				tap: 'onMyAccountTap'
			},
			my_logo_icon:{
				tap: 'onMyLogoIcon'
			},
			resend_kit: {
				tap: 'onResendShippingKit'
			},
			submit_passwords:{
				tap: 'onChangePassword'	
			},
			submit_data:{
				tap: 'onChangeUserDetails'
			},
			ClientAddressListId: {
				itemtap: 'onEditClientAddressTap'	
			},
			edit_address_button:{
				tap: 'onEditSubmitAddress'
			},
			front_iphone_button:{
				tap: 'onFrontIphoneButton'
			},
			front_general_button:{
				tap: 'onFrontGeneralButton'
			},
			front_samsung_button:{
				tap: 'onFrontSamsungButton'
			},
			front_blackberry_button:{
				tap: 'onFrontBlackberryButton'
			},
			front_ipad_button: {
				tap: 'onFrontIPadButton'
			},
			front_custom_quote_button: {
				tap: 'onFrontCustomButton'
			},
			front_great_deal_button: {
				tap: 'onFrontGreatDealButton'
			},
			front_bulk_sell_button: {
				tap: 'onFrontBulkSellButton'
			},
			confirmmethod:{
				hide: 'onConfirmHide'
			},
			press_links:{
				tap: 'onPressTap'
			},
			confirm_email: {
				initialize: 'onConfirmWindowInitialize'
			},
			payment_info: {
				initialize: 'onConfirmPaymentWindowInitialize'
			},
			shipping_address: {
				initialize: 'onConfirmShippingInitialize'
			},
			new_pages: {
				initialize: 'onAdditionalPagesInit'
			},
			promo_code: {
				tap: 'onPromoCodeTap'
			},
			front_store_buy_button: {
				tap: 'RedirectToStore'
			},
			redirect_to_store: {
				tap: 'RedirectToStore'
			},
			redirect_to_bulk: {
				tap: 'RedirectToBulk'
			},
			submit_gifts: {
				tap: 'SubmitGiftOrder'
			},
			update_gift: {
				tap: 'UpdateGiftOrder'
			},
			update_page_gift: {
				tap: 'UpdatePriceGiftOrder'
			},
			submit_balance: {
				tap: 'SubmitBalanceGiftOrder'
			},
			sell_now_balance: {
				tap: 'RedirectToSellGiftOrder'
			},
			submit_quick_pass_btn: {
				tap: 'QuickPassOption'
			},
			submit_instant_btn: {
				tap: 'InstantPassOption'
			},
			quick_pass_text: {
				tap: "TapQuickPassText"
			},
			carouselbtnrightfeedback: {
				tap: "CarouselRightFeedback"
			},
			carouselbtnleftfeedback: {
				tap: "CarouselLeftFeedback"
			},
			verify_address: {
				tap: "VerifyUserAddress"
			},
			verify_ship_address: {
				tap: "VerifyUserShipAddress"
			},
			ask_before_continue: {
				tap: "YesContinueWindow"
			},
			no_before_continue: {
				tap: "NoContinueWindow"
			}
			
		});
		
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
		Ext.scroll.Scroller.addConfig({'directionLock': true}, true);
		
	},	
	
	initNewButtonWindow: function(el, opts){
	
		el.element.on({
	        tap: function () {
	        	mob.app.getController('mob.controller.tablet.Category','mob.profile.Tablet').onNewAddressButton();
	        }
	    });
	
	},
	
	onInitializeBannerPage: function(){
	
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'POST',
			disableCaching: true,
			params: {
				action: 'banner_check'
			},	
			success: function(response) {
				answer_banner = JSON.parse(response.responseText);
				
				if(parseInt(answer_banner.MobileEnabled)) {
					
					Ext.getCmp("banner_front").setHidden(false);
					Ext.getCmp("banner_front").setHtml("<a href='"+answer_banner.MobileBannerLink+"'><img src='/product/"+answer_banner.MobileBanner+"' /></a>");
					
				}else{
					Ext.getCmp("banner_front").setHidden(true);
				}
			},
			failure: function(response) {
				
			},
			callback: function(response) {
				
			}
		});
	
	},
	
	UpdatePriceGiftOrder: function() {
		
		var main_view = this.getMain();
		cardBrand = this.update_gift_obj.down("#gift_brand_id").getValue();
		cardPrice = this.update_gift_obj.down("#new_gift_value").getValue();
		cardCount = this.update_gift_obj.down("#gift_count_id").getValue();
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'POST',
			disableCaching: true,
			params: {
				action: 'gift_check',
				cardBrand: cardBrand,
				cardPrice: cardPrice,
				cardCount: cardCount
			},	
			success: function(response) {
				answer = JSON.parse(response.responseText);
				if(answer["error"] != undefined)
				{
					Ext.Msg.alert('Alert', answer["error"], Ext.emptyFn);
				}else{
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					window.location.hash='product/'+answer["product_id"]+'/'+answer["price"]+'/'+answer["count"];
				}
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
			callback: function(response) {
				main_view.getLayout().setAnimation(true);
			}
		});
	},
	
	UpdateGiftOrder: function() {
		
		var main_view = this.getMain();
		
		giftData = this.gift_obj.getData();
		
		if(this.update_gift_obj != undefined) 
		{
			this.update_gift_obj.destroy();
		}
		this.update_gift_obj = Ext.create('mob.view.tablet.UpdateGiftPrice');
		main_view.push(this.update_gift_obj);
		this.update_gift_obj.down("#gift_product_id").setValue(giftData.Id);
		this.update_gift_obj.down("#gift_brand_id").setValue(giftData.Brand.Id);
		this.update_gift_obj.down("#gift_count_id").setValue(giftData.GiftFinalCount);
		this.update_gift_obj.down("#new_gift_value").setValue(giftData.GiftInitPrice);
		window.location.hash = '#';
	},
	
	SubmitGiftOrder: function() {
		
		var main_view = this.getMain();
		cardBrand = Ext.getCmp("brandCardItems").getValue();
		cardPrice = Ext.getCmp("valueCardPrice").getValue();
		cardCount = Ext.getCmp("brandCardCount").getValue();
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,
			params: {
				action: 'gift_check',
				cardBrand: cardBrand,
				cardPrice: cardPrice,
				cardCount: cardCount
			},	
			success: function(response) {
				answer = JSON.parse(response.responseText);
				//console.log(answer["error"]);
				if(answer["error"] != undefined)
				{
					Ext.Msg.alert('Alert', answer["error"], Ext.emptyFn);
				}else{
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					window.location.hash = 'product/'+answer["product_id"]+'/'+answer["price"]+'/'+answer["count"];
				}
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
			callback: function(response) {
				main_view.getLayout().setAnimation(true);
			}
		});
	},
	
	RedirectToSellGiftOrder: function(){
		
		var balance_product_id = this.giftcardbalancepage.down('#balance_product_id').getValue();
		var balance_category_id = this.giftcardbalancepage.down('#balance_category_id').getValue();
		var balance_brand_id = this.giftcardbalancepage.down('#balance_brand_id').getValue();
		//#category.php?id=66&brand=1
		window.location.hash = 'category.php?id='+balance_category_id+'&brand='+balance_brand_id;
	},	
	
	SubmitBalanceGiftOrder: function(){
		
		var main_view = this.getMain();
		cardBrand = Ext.getCmp("giftCardItems").getValue();
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,
			params: {
				action: 'gift_check_balance',
				cardBrand: cardBrand
			},	
			success: function(response) {
				answer = JSON.parse(response.responseText);
				if(answer["error"] != undefined)
				{
					Ext.Msg.alert('Alert', answer["error"], Ext.emptyFn);
				}else{
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					window.location.hash = 'gift-card-balance-check/'+answer.Product.Id;
				}	
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
			callback: function(response) {
				main_view.getLayout().setAnimation(true);
			}
		});
	},
	
	RedirectToStore : function(){
		window.location = 'https://store.buybackworld.com/';
	},
	
	RedirectToBulk : function() {
		window.location = 'http://www.buybackworld.com/bulkbuyback';
	},
	
	//show url links
	
	addQuestionRadioButtons: function(questions, prodObj) {
		
		var main_view = this.getMain();
		main_panel = Ext.getCmp("question_panel_area");
		
		Ext.Array.forEach(questions, function(question, index, questionSelf) {
			
			var questions_panel = new Ext.Panel({
			
				scrollable: null,
				style:{
					'padding': '0px',
					'margin': '5px 0px 0px 0px',
					'border-left': '#ffffff 1px solid',
				    'border-right': '#ffffff 1px solid',
				    'border-top': '#ffffff 1px solid'
				},
				items:[
				
					{
					    xtype: 'label',
					    html: question.QuestionText,
					    style:{
					    	    'line-height': '40px',
							    'font-weight': 'bold',
							    'font-size': '16px',
							    'text-align': 'center'
					    	}
					},
					{
						xtype: 'radiofield',
						labelWidth: '85%',
						labelWrap: true,
						labelAlign: 'right',
						cls: 'question_option_class custom_option_radio',
						name: 'question_option_'+question.QuestionId,
						id: 'question_option_0_'+question.QuestionId,
						itemId: 'question_option_0_'+question.QuestionId,
						value: -1,
						label: '<span style="color: #01d2cf; font-size: 90%; font-weight: bold; line-height: 30px;">YES</span>',
						
						listeners:{
							initialize: function(obj, eOpts){
								obj.label.parent().setStyle({"border":"1px solid transparent"});
							},
							check: function(obj, e, eOpts ){
								
								//Ext.getCmp('submit_order_btn').setDisabled(false);
								question_panel = Ext.getCmp("question_panel_area");
								//console.log(question_panel);
								var selected_values = [];
								Ext.Array.forEach(questions, function(q, index, qSelf) {
									
									var checkedValue1 = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0].getGroupValue();
									selected_values.push(checkedValue1);
									
								});
								
								//check 
										
								var checkedValue = prodObj.query('radiofield[name=question_option]')[0].getGroupValue();
								var checkedDeadValue = prodObj.query('radiofield[name=question_option_dead]')[0].getGroupValue();
								
								
								Ext.Ajax.request({
									url: '/app/json_adapter.php',
									method: 'POST',
									disableCaching: true,

									params: {
										action: "check_price",
										questions: selected_values.join(),
										product_id: prodObj.getData().Id,
										condition: checkedValue
									},

									success: function(response) {
										
										//selected condition
										answer = JSON.parse(response.responseText);
										prodObj.setData(answer);
										
										if(checkedValue == 1) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().NewPrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="newName"]')[0].innerHTML;
										}else if(checkedValue == 2) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().ExcellentPrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="excellentName"]')[0].innerHTML;
										}else if(checkedValue == 3) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().AveragePrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="averageName"]')[0].innerHTML;
										}else if(checkedValue == 4) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().PoorPrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="poorName"]')[0].innerHTML;
											
											if(checkedDeadValue == 5) {
												Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().DeadPrice;
											}
											if(checkedDeadValue == 4) {
												Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().PoorPrice;
											}
										}
										
									},
									
									failure: function(response) {
										Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
									},
										
									callback: function(response) {
										
									}
								});
								
								
							}	
						}
					},
					{	
						xtype: 'radiofield',
						labelWidth: '85%',
						labelWrap: true,
						labelAlign: 'right',
						cls: 'question_option_class custom_option_radio',
						name: 'question_option_'+question.QuestionId,
						id: 'question_option_1_'+question.QuestionId,
						itemId: 'question_option_1_'+question.QuestionId,
						value: question.QuestionId,
						label: '<span style="color: #01d2cf; font-size: 90%; font-weight: bold; line-height: 30px;">NO</span>',
						
						listeners:{
							initialize: function(obj, eOpts){
								obj.label.parent().setStyle({"border":"1px solid transparent"});
							},
							check: function(obj, e, eOpts ){
								
								//Ext.getCmp('submit_order_btn').setDisabled(false);
								question_panel = Ext.getCmp("question_panel_area");
								//console.log(question_panel);
								
								//console.log(question_panel.select("div.x-field-radio").elements);
								var selected_values = [];
								Ext.Array.forEach(questions, function(q, index, qSelf) {
									
									var checkedValue1 = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0].getGroupValue();
									selected_values.push(checkedValue1);
									
								});
								
								//
								
								//check 
								
								var checkedValue = prodObj.query('radiofield[name=question_option]')[0].getGroupValue();
								var checkedDeadValue = prodObj.query('radiofield[name=question_option_dead]')[0].getGroupValue();
								
								//
								
								Ext.Ajax.request({
									url: '/app/json_adapter.php',
									method: 'POST',
									disableCaching: true,

									params: {
										action: "check_price",
										questions: selected_values.join(),
										product_id: prodObj.getData().Id,
										condition: checkedValue
									},

									success: function(response) {
										
										//selected condition
										answer = JSON.parse(response.responseText);
										prodObj.setData(answer);
										
										if(checkedValue == 1) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().NewPrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="newName"]')[0].innerHTML;
										}else if(checkedValue == 2) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().ExcellentPrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="excellentName"]')[0].innerHTML;
										}else if(checkedValue == 3) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().AveragePrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="averageName"]')[0].innerHTML;
										}else if(checkedValue == 4) {
											Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().PoorPrice;
											Ext.DomQuery.select('div[id="price_condition"]')[0].innerHTML = Ext.DomQuery.select('span[id="poorName"]')[0].innerHTML;
											
											if(checkedDeadValue == 5) {
												Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().DeadPrice;
											}
											if(checkedDeadValue == 4) {
												Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+prodObj.getData().PoorPrice;
											}
										}
										
									},
									
									failure: function(response) {
										Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
									},
										
									callback: function(response) {
										
									}
								});
								
								
								
								
							}	
						}
					}
				]
			});
			
			main_panel.add(questions_panel);
		    
		});
		
	},
	
	getProductLink: function(id, price, count){
		
		Ext.Viewport.setMasked(false);
		
		id_el = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id_el).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		
		/*
		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
		if(buttons.length > 0)
		{
			key = buttons[(buttons.length-1)];
			Ext.removeNode(key);
		}
		*/
		
		var main_view = this.getMain();
		
		main_view.getLayout().setAnimation(false);
		
		var store = Ext.getStore('ProductStore');
		store.getProxy().setExtraParams(
		{ 
			//get values from phonegap
			category_id : 0,
			product_id: id,
			price: price,
			count: count
		});
		store.load({
			callback: function(record, operation, success) {
				
				if(success){
					
					ga('send', 'pageview', {
											  page: '/app/#product/'+id,
											  title: record[0].data.Name
											});
					
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					
					//console.log(record);
					
					if(parseInt(record[0].data.Categoryid.IsGiftCard))
					{
						//price, count
						//console.log(price);
						//console.log(count);
						
						//record[0].data.GiftCount = count;//GiftFinalCount
						//record[0].data.GiftPrice = price;//GiftFinalPrice
						
						//Name
						Ext.getCmp("breadcrambs").setHtml(record[0].data.Name);
						
						if(this.gift_obj != undefined) {
							this.gift_obj.destroy();
						}
						this.gift_obj = Ext.create('mob.view.tablet.GiftCard');
						this.gift_obj.element.query('.full_site_link')[0].href = record[0].raw.fullSiteLink;
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
				            value: record[0].data.Name
						});
						this.gift_obj.add(hfield);
						this.gift_obj.setData(record[0].data);
						//this.gift_obj.query('[itemId="excellent_popup"]')[0].check();
						
						main_view.push(this.gift_obj);
						
					}else{
						
						//Name
						Ext.getCmp("breadcrambs").setHtml(record[0].data.Name);
						
						if(this.product_obj != undefined) {
							this.product_obj.destroy();
						}
						this.product_obj = Ext.create('mob.view.tablet.Product');
						this.product_obj.element.query('.full_site_link')[0].href = record[0].raw.fullSiteLink;
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
				            value: record[0].data.Name
						});
						this.product_obj.add(hfield);
						this.product_obj.setData(record[0].data);
						this.product_obj.query('[itemId="excellent_popup"]')[0].check();
						
						if((record[0].data.QuestionModuleArray).length > 0) {
							if(record[0].data.QuestionModuleArray[0].ShowForExcellent == "1") {
								Ext.getCmp("question_panel_area").show();
							}else{
								Ext.getCmp("question_panel_area").hide();
							}
						}
						
						//question_panel_area
						this.addQuestionRadioButtons(record[0].data.QuestionModuleArray, this.product_obj);
						
						main_view.push(this.product_obj);
						
					}
					
					Ext.Viewport.setMasked(false);
					//main_view.getLayout().setAnimation(true);
				}
			},
			scope: this
		});
	},
	
	onShowAskWindow: function(){
	
		main_view = this.getMain();
		
		if(this.askwindow != undefined) {
			this.askwindow.destroy();
		}
		
		var hfield = Ext.create('Ext.field.Hidden', {
			itemId: 'breadcramb_field',
            value: 'Smart Selling!'
		});
		
		Ext.getCmp("breadcrambs").setHtml("Smart Selling!");
		
		this.askwindow = Ext.create('mob.view.tablet.AskWindow');
		main_view.push(this.askwindow);
	},
	
	onGiftCardBalanceCheck: function(balance_id){
		
		//console.log(balance_id);
		
		main_view = this.getMain();
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		
		if(balance_id == undefined)
		{
			//console.log("gift card balance");
			
			store = Ext.getStore('BrandsStore');
			store.getProxy().setExtraParams(
			{ 
				category_id : "id=-1",
				gift: 'show'
			});
			store.load({
				callback: function(records, operation, success) {
						
					if(success){
						
						Ext.getCmp("breadcrambs").setHtml('Gift Card Balance Check');
						
						if(this.giftcardbalance != undefined) {
							this.giftcardbalance.destroy();
						}
						this.giftcardbalance = Ext.create('mob.view.tablet.GiftCardBalance');
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
							value: 'Gift Card Balance'
						});
						this.giftcardbalance.add(hfield);
						main_view.push(this.giftcardbalance);
						
						//
						flag = false;
						flag_index = 0;
						btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
						Ext.Array.each(btn_exists, function(btn, index, items) {
							
							if('Gift Card Balance' == decodeURIComponent(btn.innerHTML)){
								flag = true;
							}
						});
						
						///
						btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
						last_btn = btn_exists[btn_exists.length-1];
						last_btn_obj = btns_itself[btns_itself.length-1];
						if(last_btn != undefined && 'Gift Card Balance' != decodeURIComponent(last_btn.innerHTML) && flag){
							Ext.removeNode(last_btn_obj);
						}
						//
						if(!flag)
						{
							localStorage.setItem('Gift Card Balance', "id=-1");
							
							var btn = new Ext.Button({
					            cls: 'x-buttons-breadcrumbs',
					            iconCls: 'icon-cross',
					            text: 'Gift Card Balance',
					            style:{
					            	"margin":"2px 1px 0px 1px",
					            	"font-size":"12px",
									"color":"#FFFFFF",
					            	"background-color":"#14A9EA",
									"background-image":"none"
					            },
					            handler:function(obj){
					            	
					            	last_index = 0;
					            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
									Ext.Array.each(btn_all, function(btn_el, index, items) {
										if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
											last_index = index;
										}
									});
									btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									Ext.Array.each(btns_exists, function(btn_el, index, items) {
										if(index > last_index){
											Ext.removeNode(btn_el);
										}
									});
									
					            	window.location.hash = 'gift-card-balance-check';
					            	
					            }
						    });
							Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
						}
						
					}
				},
				scope: this
			});
			
		}else{
			
			var store = Ext.getStore('ProductStore');
			store.getProxy().setExtraParams(
			{ 
				//get values from phonegap
				category_id : 0,
				product_id: balance_id
			});
			store.load({
				callback: function(record, operation, success) {
					
					if(success){
						
						ga('send', 'pageview', {
												  page: '/app/#product/'+balance_id,
												  title: record[0].data.Name
												});
						
						Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
						
						//Name
						Ext.getCmp("breadcrambs").setHtml(record[0].data.Brand.Description);
						
						if(this.giftcardbalancepage != undefined) {
							this.giftcardbalancepage.destroy();
						}
						this.giftcardbalancepage = Ext.create('mob.view.tablet.GiftCardBalancePage');
						this.giftcardbalancepage.element.query('.full_site_link')[0].href = record[0].raw.fullSiteLink;
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
							value: record[0].data.Name
						});
						
						this.giftcardbalancepage.add(hfield);
						
						//add brand/product/category/
						this.giftcardbalancepage.down("#balance_product_id").setValue(record[0].data.Id);
						this.giftcardbalancepage.down("#balance_category_id").setValue(record[0].data.Categoryid.Id);
						this.giftcardbalancepage.down("#balance_brand_id").setValue(record[0].data.Brand.Id);
						
						this.giftcardbalancepage.setData(record[0].data);
						
						main_view.push(this.giftcardbalancepage);
						
						Ext.Viewport.setMasked(false);
					}
				},
				scope: this
			});
		}	
		
		//wnd animation
		main_view.getLayout().setAnimation(false);
		Ext.Viewport.setMasked(false);
	},
		
	getCardsLink: function(){
	
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		
		var main_view = this.getMain();
		if(this.giftcards != undefined) 
		{
			this.giftcards.destroy();
		}
		this.giftcards = Ext.create('mob.view.tablet.GiftCards');
		
		var hfield = Ext.create('Ext.field.Hidden', {
			itemId: 'breadcramb_field',
			value: 'Gift Cards'
		});
		this.giftcards.add(hfield);
		
		main_view.push(this.giftcards);
		
		//wnd animation
		main_view.getLayout().setAnimation(false);
		Ext.Viewport.setMasked(false);
	
	},
	
	getCategoryLink: function(){
		
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		var category_id = location.hash.substring(14);
		if(category_id == "id=48&brand=1")
		{
			window.location.hash = "category.php?id=50&brand=1";
			category_id = "id=50&brand=1";
		}
		if(category_id == "id=56&brand=1") {
			window.location.hash = "category.php?id=49&brand=1";
			category_id = "id=49&brand=1";
		}
		if(category_id == "id=67&brand=1") {
			window.location.hash = "category.php?id=79&brand=1";
			category_id = "id=79&brand=1";
		}
		if(category_id == "id=66&brand=1") {
			window.location.hash = "category.php?id=52&brand=1";
			category_id = "id=52&brand=1";
		}
		if(category_id == "id=71&brand=1") {
			window.location.hash = "category.php?id=53&brand=1";
			category_id = "id=53&brand=1";
		}
		if(category_id == "id=74&brand=1") {
			window.location.hash = "category.php?id=55&brand=1&property[25]=123";
			category_id = "id=55&brand=1&property[25]=123";
		}
		
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		//
		var main_view = this.getMain();
		
		main_view.getLayout().setAnimation(false);
		
		//ask server where to go
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				check: 'root',
				category: category_id
			},
			
			success: function(response) {

				if(response.responseText == "property1") {

					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
									
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextHeader);
									
									if(this.properties != undefined) {
										this.properties.destroy();
									}
									this.properties = Ext.create('mob.view.tablet.Properties');
									this.properties.element.query('.full_site_link')[0].href = records[0].raw.fullSiteLink;
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									properties.add(hfield);
									properties.down('#property_list_items').refresh();
									
									///
									
									flag = false;
									flag_index = 0;
									btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
									Ext.Array.each(btn_exists, function(btn, index, items) {
										
										if(records[0].raw.topTextString == decodeURIComponent(btn.innerHTML)){
											flag = true;
										}
									});
									
									///
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									last_btn = btn_exists[btn_exists.length-1];
									last_btn_obj = btns_itself[btns_itself.length-1];
									if(last_btn != undefined && records[0].raw.topTextString != decodeURIComponent(last_btn.innerHTML) && flag){
										Ext.removeNode(last_btn_obj);
									}
									///
									
									/*
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									Ext.Array.each(btns_itself, function(btn, index, items) {
										if(flag_index == index){
											key = btns_itself[index];
											Ext.removeNode(key);
										}
									});
									*/
									
									if(!flag)
									{
										localStorage.setItem(records[0].raw.topTextString, category_id);
										
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: records[0].raw.topTextString,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	
								            	last_index = 0;
								            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
												Ext.Array.each(btn_all, function(btn_el, index, items) {
													if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
														last_index = index;
													}
												});
												btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
												Ext.Array.each(btns_exists, function(btn_el, index, items) {
													if(index > last_index){
														Ext.removeNode(btn_el);
													}
												});
												
								            	window.location.hash='category.php?'+localStorage.getItem(btn.getText());
								            	
								            }
									    });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									}
									
									///
									
									Ext.Viewport.setMasked(false);
									main_view.push(properties);
									//main_view.getLayout().setAnimation(true);
								}else {
									Ext.Viewport.setMasked(false);
									Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
									//main_view.getLayout().setAnimation(true);
									
								}
							},
							scope: this
						});
					
				}else if(response.responseText == "products"){
					
					var store = Ext.getStore('ProductStore');
					store.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							
							if(success){
								
								Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextHeader);
							
								if(this.products != undefined) {
									this.products.destroy();
								}
								this.products = Ext.create('mob.view.tablet.Products');
								this.products.element.query('.full_site_link')[0].href = records[0].raw.fullSiteLink;
								
								var hfield = Ext.create('Ext.field.Hidden', {
									itemId: 'breadcramb_field',
				                    value: records[0].raw.topTextString
								});
								
								this.products.add(hfield);
								this.products.down('#products_list_items').refresh();
								
								flag = false;
								flag_index = 0;
								btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
								Ext.Array.each(btn_exists, function(btn, index, items) {
									
									if(records[0].raw.topTextString == decodeURIComponent(btn.innerHTML)){
										flag = true;
									}
								});
								
								///
								btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
								last_btn = btn_exists[btn_exists.length-1];
								last_btn_obj = btns_itself[btns_itself.length-1];
								if(last_btn != undefined && records[0].raw.topTextString != decodeURIComponent(last_btn.innerHTML) && flag){
									Ext.removeNode(last_btn_obj);
								}
								///
								
								/*
								btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
								Ext.Array.each(btns_itself, function(btn, index, items) {
									if(flag_index == index){
										key = btns_itself[index];
										Ext.removeNode(key);
									}
								});
								*/
								
								if(!flag)
								{
									localStorage.setItem(records[0].raw.topTextString, category_id);
									
									var btn = new Ext.Button({
							            cls: 'x-buttons-breadcrumbs',
							            iconCls: 'icon-cross',
							            text: records[0].raw.topTextString,
							            style:{
							            	"margin":"2px 1px 0px 1px",
							            	"font-size":"12px",
											"color":"#FFFFFF",
							            	"background-color":"#14A9EA",
											"background-image":"none"
							            },
							            handler:function(obj){
							            	
							            	last_index = 0;
							            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
											Ext.Array.each(btn_all, function(btn_el, index, items) {
												if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
													last_index = index;
												}
											});
											btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
											Ext.Array.each(btns_exists, function(btn_el, index, items) {
												if(index > last_index){
													Ext.removeNode(btn_el);
												}
											});
							            	
							            	window.location.hash='category.php?'+localStorage.getItem(btn.getText());
							            }
								    });
									Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
								}
								
								buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
								
								Ext.Viewport.setMasked(false);
								main_view.push(this.products);
								//main_view.getLayout().setAnimation(true);
							}
						},
						scope: this
					});
					
				}else if(response.responseText == "property_drop") {

					if(this.selectproperty != undefined)
					{
						this.selectproperty.reset();
					}

					//propertiesdropdown
					store = Ext.getStore('PropertiesStoreDrop');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
					store.load({
							callback: function(records, operation, success) {
								
								if(success){
									
									Ext.getCmp("breadcrambs").setHtml(records[1].raw.topTextHeader);
									
									if(this.propertiesdropdown == undefined) {
										this.propertiesdropdown = Ext.create('mob.view.tablet.PropertiesDropDown');
									}
									
									this.propertiesdropdown.element.query('.full_site_link')[0].href = records[1].raw.fullSiteLink;
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[1].raw.topTextString
									});
									this.propertiesdropdown.add(hfield);
									this.selectproperty = Ext.ComponentQuery.query('#selectproperty')[0];
									
									this.selectproperty.setStore(store);
									
									if(store.data.all.length > 1)
									{
										this.selectproperty.setLabel(store.data.all[1].data.Name);
									}
									
									flag = false;
									flag_index = 0;
									btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
									Ext.Array.each(btn_exists, function(btn, index, items) {
										if(records[1].raw.topTextString == decodeURIComponent(btn.innerHTML)){
											flag = true;
										}
									});
									
									///
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									last_btn = btn_exists[btn_exists.length-1];
									last_btn_obj = btns_itself[btns_itself.length-1];
									if(last_btn != undefined && records[1].raw.topTextString != decodeURIComponent(last_btn.innerHTML) && flag){
										Ext.removeNode(last_btn_obj);
									}
									///
									
									if(!flag)
									{
										localStorage.setItem(records[1].raw.topTextString, category_id);
										
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: records[1].raw.topTextString,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	
								            	last_index = 0;
								            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
												Ext.Array.each(btn_all, function(btn_el, index, items) {
													if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
														last_index = index;
													}
												});
												btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
												Ext.Array.each(btns_exists, function(btn_el, index, items) {
													if(index > last_index){
														Ext.removeNode(btn_el);
													}
												});
								            	
								            	window.location.hash='category.php?'+localStorage.getItem(btn.getText());
								            }
									    });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									}
									
									///
									
									Ext.Viewport.setMasked(false);
									main_view.push(this.propertiesdropdown);
									main_view.getLayout().setAnimation(true);
									
								}else {
									Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
									Ext.Viewport.setMasked(false);
									//main_view.getLayout().setAnimation(true);
								}
							},
							scope: this
						});
						
				}if(response.responseText == "property0"){
																		
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
									
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextHeader);
									
									if(this.properties != undefined) {
										this.properties.destroy();
									}
									this.properties = Ext.create('mob.view.tablet.Properties');
									this.properties.element.query('.full_site_link')[0].href = records[0].raw.fullSiteLink;
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									this.properties.add(hfield);
									this.properties.down('#property_list_items').setData(records);
									this.properties.down('#property_list_items').refresh();
									
									flag = false;
									flag_index = 0;
									btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
									Ext.Array.each(btn_exists, function(btn, index, items) {
										
										if(records[0].raw.topTextString == decodeURIComponent(btn.innerHTML)){
											flag = true;
										}
									});
									
									///
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									last_btn = btn_exists[btn_exists.length-1];
									last_btn_obj = btns_itself[btns_itself.length-1];
									if(last_btn != undefined && records[0].raw.topTextString != decodeURIComponent(last_btn.innerHTML) && flag){
										Ext.removeNode(last_btn_obj);
									}
									///
									
									/*
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									Ext.Array.each(btns_itself, function(btn, index, items) {
										if(flag_index == index){
											key = btns_itself[index];
											Ext.removeNode(key);
										}
									});
									*/
									
									if(!flag)
									{
										localStorage.setItem(records[0].raw.topTextString, category_id);
										
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: records[0].raw.topTextString,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	
								            	last_index = 0;
								            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
												Ext.Array.each(btn_all, function(btn_el, index, items) {
													if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
														last_index = index;
													}
												});
												btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
												Ext.Array.each(btns_exists, function(btn_el, index, items) {
													if(index > last_index){
														Ext.removeNode(btn_el);
													}
												});
								            	
								            	window.location.hash='category.php?'+localStorage.getItem(btn.getText());
								            }
									    });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									}
									
									///
									Ext.Viewport.setMasked(false);
									main_view.push(this.properties);
									//main_view.getLayout().setAnimation(true);
									
								}else {
									Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
									Ext.Viewport.setMasked(false);
									//main_view.getLayout().setAnimation(true);
								}
							},
							scope: this
						});
							
				}else if(response.responseText == "brand") {
																	
					store = Ext.getStore('BrandsStore');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
									
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextHeader);
									
									if(this.brands != undefined) {
										this.brands.destroy();
									}
									this.brands = Ext.create('mob.view.tablet.Brands');
									this.brands.element.query('.full_site_link')[0].href = records[0].raw.fullSiteLink;
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									this.brands.add(hfield);
									
									this.brands.down('#brands_list_items').setData(records);
									this.brands.down('#brands_list_items').refresh();
									
									flag = false;
									flag_index = 0;
									btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
									Ext.Array.each(btn_exists, function(btn, index, items) {
										
										if(records[0].raw.topTextString == decodeURIComponent(btn.innerHTML)){
											flag = true;
										}
									});
									///
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									last_btn = btn_exists[btn_exists.length-1];
									last_btn_obj = btns_itself[btns_itself.length-1];
									if(last_btn != undefined && records[0].raw.topTextString != decodeURIComponent(last_btn.innerHTML) && flag){
										Ext.removeNode(last_btn_obj);
									}
									///
									
									/*
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									Ext.Array.each(btns_itself, function(btn, index, items) {
										if(flag_index == index){
											key = btns_itself[index];
											Ext.removeNode(key);
											
										}
									});
									*/
									
									if(!flag)
									{
										localStorage.setItem(records[0].raw.topTextString, category_id);
										
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: records[0].raw.topTextString,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	
								            	last_index = 0;
								            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
												Ext.Array.each(btn_all, function(btn_el, index, items) {
													if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
														last_index = index;
													}
												});
												btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
												Ext.Array.each(btns_exists, function(btn_el, index, items) {
													if(index > last_index){
														Ext.removeNode(btn_el);
													}
												});
												
								            	window.location.hash='category.php?'+localStorage.getItem(btn.getText());
								            }
									    });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									}
									
									///
									
									Ext.Viewport.setMasked(false);
									main_view.push(this.brands);
									//main_view.getLayout().setAnimation(true);
									
								}else {
									
									Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
									Ext.Viewport.setMasked(false);
									//main_view.getLayout().setAnimation(true);
								}
							},
							scope: this
						});
					
						Ext.Viewport.setMasked(false);
					
				}else if(response.responseText == "gifts") {
					
					store = Ext.getStore('BrandsStore');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id,
							gift: 'show'
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
									
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextHeader);
									
									if(this.giftcards != undefined) 
									{
										this.giftcards.destroy();
									}
									this.giftcards = Ext.create('mob.view.tablet.GiftCards');
									
									this.giftcards.element.query('.full_site_link')[0].href = records[0].raw.fullSiteLink;
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									this.giftcards.add(hfield);
									
									brand_id = category_id.split("=").pop();
									Ext.getCmp("brandCardItems").setValue(brand_id);
									
									//
									//this.giftcards.down('#brandCardItems').setData(records);
									//this.giftcards.down('#brandCardItems').refresh();
									
									flag = false;
									flag_index = 0;
									btn_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
									Ext.Array.each(btn_exists, function(btn, index, items) {
										
										if(records[0].raw.topTextString == decodeURIComponent(btn.innerHTML)){
											flag = true;
										}
									});
									///
									btns_itself = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
									last_btn = btn_exists[btn_exists.length-1];
									last_btn_obj = btns_itself[btns_itself.length-1];
									if(last_btn != undefined && records[0].raw.topTextString != decodeURIComponent(last_btn.innerHTML) && flag){
										Ext.removeNode(last_btn_obj);
									}
									///
									
									if(!flag)
									{
										localStorage.setItem(records[0].raw.topTextString, category_id);
										
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: records[0].raw.topTextString,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	
								            	last_index = 0;
								            	btn_all = Ext.getCmp('breadcrambs_buttons').element.query(".x-button-label");
												Ext.Array.each(btn_all, function(btn_el, index, items) {
													if(btn.getText() == decodeURIComponent(btn_el.innerHTML)){
														last_index = index;
													}
												});
												btns_exists = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
												Ext.Array.each(btns_exists, function(btn_el, index, items) {
													if(index > last_index){
														Ext.removeNode(btn_el);
													}
												});
												
								            	window.location.hash='category.php?'+localStorage.getItem(btn.getText());
								            }
									    });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									}
									
									///
									
									Ext.Viewport.setMasked(false);
									main_view.push(this.giftcards);
									
								}else {
									
									Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
									Ext.Viewport.setMasked(false);
								}
							},
							scope: this
						});
					
						Ext.Viewport.setMasked(false);
					
				}

			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
				
			callback: function(response) {
				
				main_view.getLayout().setAnimation(true);
				
			}
		});
		
	},
	
	getIphoneLink: function()
	{
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		
		window.location.hash='category.php?id=50&brand=1';
		
		//ga('set', 'page', window.location.hash);
		ga('send', 'pageview', {
								  page: '/app/#'+window.location.hash,
								  title: 'iPhone'
								});
		
		//show iphone page
		/*
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		store = Ext.getStore('PropertiesStore');
		store.getProxy().setExtraParams(
			{ 
				category_id : 'id=50&brand=1'
			});
			store.load({
				callback: function(records, operation, success) {
					
					if(success){
						
						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
						
						//if(this.properties == undefined) {
							this.properties = Ext.create('mob.view.tablet.Properties');
						//}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: records[0].raw.topTextString
						});
						
						this.properties.add(hfield);
						
						this.properties.down('#property_list_items').setData(records);
						this.properties.down('#property_list_items').refresh();
						
						array_view['iPhone'] = [];
						array_view['iPhone'][0] = this.properties.down('#property_list_items');
						array_view['iPhone'][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
						
						Ext.getCmp("breadcrambs").setHtml('');
						///
						
						///
						Ext.Viewport.setMasked(false);
						main_view.push(this.properties);
						
					}else {
						Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
						Ext.Viewport.setMasked(false);
					}
				},
				scope: this
			});
			
		
		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
		if(buttons.length > 0)
		{
			key = buttons[(buttons.length-1)];
			Ext.removeNode(key);
		}
		
		*/
	
	},
	
	getBlackberryLink: function(){
	
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		
		window.location.hash='category.php?id=48';
		
		//ga('set', 'page', window.location.hash);
		ga('send', 'pageview', {
								  page: '/app/#'+window.location.hash,
								  title: 'Cell Phone'
								});
	
		/* action	category
		category_id	id=48&brand=2 */
		/*
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		store = Ext.getStore('PropertiesStore');
		store.getProxy().setExtraParams(
			{ 
				category_id : 'id=48&brand=2'
			});
			store.load({
				callback: function(records, operation, success) {
					
					if(success){
						
						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
						
						//if(this.properties == undefined) {
							this.properties = Ext.create('mob.view.tablet.Properties');
						//}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: records[0].raw.topTextString
						});
						
						this.properties.add(hfield);
						
						this.properties.down('#property_list_items').setData(records);
						this.properties.down('#property_list_items').refresh();
						
						array_view['Blackberry'] = [];
						array_view['Blackberry'][0] = this.properties.down('#property_list_items');
						array_view['Blackberry'][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
						
						var btn = new Ext.Button({
				            cls: 'x-buttons-breadcrumbs',
				            iconCls: 'icon-cross',
				            text: 'Blackberry',
				            style:{
				            	"margin":"2px 1px 0px 1px",
				            	"font-size":"12px",
								"color":"#FFFFFF",
				            	"background-color":"#14A9EA",
								"background-image":"none"
				            },
				            handler:function(obj){
				            	
				            	text = obj.getText();
				            	
				            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
				            	(array_view[text][0]).getStore().load({
				            		callback: function(records, operation, success) {
										if(success)
										{
											//if(this.properties_top_properties == undefined)
											//{
												properties_top_properties = Ext.create('mob.view.tablet.Properties');
											//}
											var hfield = Ext.create('Ext.field.Hidden', {
												itemId: 'breadcramb_field',
							                    value: records[0].raw.topTextString
											});
											properties_top_properties.add(hfield);
											
											properties_top_properties.down('#property_list_items').setData(records);
											Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
											
										}
				            		}
				            	});
				            }
				        });
						Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
						///
						
						///
						Ext.Viewport.setMasked(false);
						main_view.push(this.properties);
						
					}else {
						Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
						Ext.Viewport.setMasked(false);
					}
				},
				scope: this
			});
			
		*/
	},
	
	getSamsungLink: function(){
	
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//
		
		window.location.hash='category.php?id=48&brand=18';
		
		//ga('set', 'page', window.location.hash);
		ga('send', 'pageview', {
								  page: '/app/#'+window.location.hash,
								  title: 'Samsung'
								});
		
		/*
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		store = Ext.getStore('PropertiesStore');
		store.getProxy().setExtraParams(
			{ 
				category_id : 'id=48&brand=18'
			});
		store.load({
			callback: function(records, operation, success) {
				
				if(success){
					
					Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
					
					//if(this.properties == undefined) {
						this.properties = Ext.create('mob.view.tablet.Properties');
					//}
					
					var hfield = Ext.create('Ext.field.Hidden', {
						itemId: 'breadcramb_field',
	                    value: records[0].raw.topTextString
					});
					
					this.properties.add(hfield);
					
					this.properties.down('#property_list_items').setData(records);
					this.properties.down('#property_list_items').refresh();
					
					///
					
					///
					Ext.Viewport.setMasked(false);
					main_view.push(this.properties);
					
				}else {
					Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
					Ext.Viewport.setMasked(false);
				}
			},
			scope: this
		});
			
		*/
		
	},
	
	getHomeLink: function(){
		
		obj = Ext.getCmp("main_panel_scroll_menu");
		
		var main_view = this.getMain();
		
		obj.down("#carousel_links").element.on('tap', function(e, el){
			
			if (e.target.className && e.target.className.indexOf('more_links_tocheck') > -1) {
				
				if(this.pressreleases == undefined)
				{
					this.pressreleases = Ext.create('mob.view.tablet.PressReleases');;
				}
				Ext.getCmp("breadcrambs").setHtml('Recent Press & Media Coverage');
				main_view.push(this.pressreleases);
			}
		})
		
		//Ext.Viewport.setActiveItem(this.getMain_panel_scroll_menu());
			
		Ext.Array.each(this.getMain().innerItems, function(name, index, items) {
			if(index <= 2 && name != undefined)
			{
				name.show();
			}else{
				name.hide();
			}
		});	
			
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).addCls('hide_back_button');
		//Ext.getCmp("breadcrambs").setHtml('Home');
		
		Ext.getCmp("breadcrambs").addCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").addCls("hide_top_bar");
		
		Ext.getCmp("breadcrambs").show();
		Ext.getCmp("main_panel_scroll_menu").show();
		Ext.getCmp("breadcrambs_buttons").hide();
		
		//ga('set', 'page', "/index");
		ga('send', 'pageview', {
								  page: '/app/index.php',
								  title: 'Home page'
								});
	},
	
	getLoginLink: function(){
		
		var main_view = this.getMain();
		
		if(this.loginregister == undefined)
		{
			this.loginregister = Ext.create('mob.view.LoginRegister');
		}
		
		Ext.Viewport.setMasked(false);
		main_view.push(this.loginregister);
		
		//
		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
		Ext.Array.each(buttons, function(name, index, countriesItSelf) {
			Ext.removeNode(name);
		});
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		
		//ga('set', 'page', "/login");
		ga('send', 'pageview', {
								  page: '/app/#login',
								  title: 'Login/Register/Checkout as Guest'
								});
	},
	
	getPaymentLink: function() {
		
		newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
		if(user == undefined)
		{
			if(this.loginregister != undefined)
			{
				this.loginregister.destroy();
			}
			this.loginregister = Ext.create('mob.view.LoginRegister');
			
			Ext.Viewport.setMasked(false);
			main_view.push(this.loginregister);
			
			//
			buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
			Ext.Array.each(buttons, function(name, index, countriesItSelf) {
				Ext.removeNode(name);
			});
			Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
			//
			
		}else if(user.ViewAddressCheck == "0" || user.ViewAddressCheck == null) {
			
			var store = Ext.getStore('ClientAddressStore');
			store.getProxy().setExtraParams(
			{ 
				user_id : user.Id, //25//user.Id
				is_guest: user.IsGuest
			});
			store.load({
				callback: function(records, operation, success) {
					
					
					
					Ext.getCmp("breadcrambs").setHtml('Payment Preference');
					if(this.paymentprocess == undefined)
					{
						//this.paymentprocess.destroy();
						this.paymentprocess = Ext.create('mob.view.tablet.PaymentProcess');
					}
					
					/*if(!records.length)
					{
						this.paymentprocess.getActiveItem().updateData(records.length);
					}*/
					
					newButton.show();
					
					var hfield = Ext.create('Ext.field.Hidden',{ 
						config:{
							itemId: 'breadcramb_field',
		                    value: "Payment Preference"
						}
					});
					//this.paymentprocess.add(hfield);
					
					Ext.Viewport.setMasked(false);
					main_view.push(this.paymentprocess);
					
				},
				scope: this
			});
			
		}else{
			
			var store = Ext.getStore('ClientAddressStore');
			store.getProxy().setExtraParams(
			{ 
				user_id : user.Id, //25//user.Id
				is_guest: user.IsGuest
			});
			store.load({
				callback: function(records, operation, success) {
					
					Ext.getCmp("breadcrambs").setHtml('Payment Preference');
					if(this.paymentprocessaddress == undefined)
					{
						//this.paymentprocess.destroy();
						this.paymentprocessaddress = Ext.create('mob.view.tablet.PaymentProcessAddress');
					}
					
					if(user.IsGuest == "0") {			
						var first_name_box = this.getPaymentprocesscheckaddress().query('textfield[name="first_name_guest"]')[0];
						first_name_box.hide();
						var last_name_box = this.getPaymentprocesscheckaddress().query('textfield[name="last_name_guest"]')[0];
						last_name_box.hide();
						
						Ext.getCmp('message_for_list_registered').show();
						Ext.getCmp('addressListIDRegistered').show();
						
					}else{
						
						Ext.getCmp('message_for_list_registered').hide();
						Ext.getCmp('addressListIDRegistered').hide();
					}
					
					newButton.show();
					
					if(!records.length)
					{
						Ext.getCmp("message_for_list").hide();
						Ext.getCmp("message_for_list_not_or").show();
					}else{
						Ext.getCmp("message_for_list").show();
						Ext.getCmp("message_for_list_not_or").hide();
					}
					
					var hfield = Ext.create('Ext.field.Hidden',{ 
						config:{
							itemId: 'breadcramb_field',
		                    value: "Payment Preference"
						}
					});
					//this.paymentprocess.add(hfield);
					
					Ext.Viewport.setMasked(false);
					main_view.push(this.paymentprocessaddress);
					
				},
				scope: this
			});
			
		}
		
		//ga('set', 'page', "/payment_process");
		ga('send', 'pageview', {
								  page: '/app/#payment',
								  title: 'Payment Process'
								});
	},
	
	getTradesLink: function(){
		
		newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		var store = Ext.getStore('TradesStore');
		store.getProxy().setExtraParams(
		{
			//get values from phonegap
			user_id : user.Id,
			orders: 'not_completed',
			is_guest: user.IsGuest
			
		});
		store.load({
		    callback: function(records, operation, success) {
				//if(success){
					this.clientaccount = Ext.create('mob.view.tablet.ClientAccount');
					main_view.push(this.clientaccount);
					Ext.Viewport.setMasked(false);
				//}
				
				//ga('set', 'page', '/trades');
				ga('send', 'pageview', {
								  page: '/app/#trades',
								  title: 'Submitted Items'
								});
		    },
		    scope: this
		});
	
	},
	
	getShippingMethodLink: function(){
	
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		if(user == undefined)
		{
			window.location.hash='login/';
			return;
		}
		
		var store = Ext.getStore('CheckFreeKit');
		store.getProxy().setExtraParams(
		{ 
			user_id : user.Id, //25//user.Id
			is_guest: user.IsGuest
		});
		store.load({
			callback: function(records, operation, success) {
				
				Ext.getCmp("breadcrambs").setHtml("Shipping Info");
				if(this.shippingmethod != undefined)
				{
					this.shippingmethod.destroy();
				}
				this.shippingmethod = Ext.create('mob.view.tablet.ShippingMethod');
				var hfield = Ext.create('Ext.field.Hidden', {
					itemId: 'breadcramb_field',
                    value: "Shipping Info"
				});
				this.shippingmethod.add(hfield);
				this.shippingmethod.setData(records[0].data);
				main_view.push(this.shippingmethod);
				Ext.Viewport.setMasked(false);
				
				ga('send', 'pageview', {
								  page: '/app/#shipping_method',
								  title: 'Shipping Method'
								});
			},
			scope: this
		});
		
		/*
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'POST',
			disableCaching: true,

			params: {
				action: "add_check",
				user_id: user.Id,
				address_id: id
			},

			success: function(response) {
				
				Ext.getCmp("breadcrambs").setHtml("Shipping Info");
				
				if(this.shippingmethod != undefined)
				{
					this.shippingmethod.destroy();
				}
				this.shippingmethod = Ext.create('mob.view.tablet.ShippingMethod');
				
				var hfield = Ext.create('Ext.field.Hidden', {
					itemId: 'breadcramb_field',
                    value: "Shipping Info"
				});
				
				this.shippingmethod.add(hfield);
				main_view.push(this.shippingmethod);
				Ext.Viewport.setMasked(false);
			},
			
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				Ext.Viewport.setMasked(false);
			},
				
			callback: function(response) {
				
			}
		});
		*/
		
	},
	
	getShippingInfoLink: function() {
		
		var newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
        var store = Ext.getStore('ClientAddressStore');
		store.getProxy().setExtraParams(
		{ 
			user_id : user.Id, //25//user.Id
			is_guest: user.IsGuest
		});
		store.load({
			callback: function(records, operation, success) {
				
				if(user.ViewAddressCheck == "1"){ 
					
					if(this.shippinginfoaddress != undefined)
					{
						this.shippinginfoaddress.destroy();
					}
					this.shippinginfoaddress = Ext.create('mob.view.tablet.ShippingInfoAddress');
					
					if(this.getPaymentprocesscheckaddress() != undefined && user.IsGuest == "1") {
        				
    					verAddress = Ext.getCmp("addressListVerifiedID")._store.data.items[0].data;
    					
			        	var verify_fist_name = this.getPaymentprocesscheckaddress().query('textfield[name="first_name_guest"]')[0].getValue();
						var verify_last_name = this.getPaymentprocesscheckaddress().query('textfield[name="last_name_guest"]')[0].getValue();
						var verify_address1 =  verAddress.Address1;   //this.getPaymentprocesscheckaddress().query('textfield[name="verify_address1"]')[0].getValue();
						var verify_address2 =  '';    //this.getPaymentprocesscheckaddress().query('textfield[name="verify_address2"]')[0].getValue();
						var verify_city = verAddress.City;   //this.getPaymentprocesscheckaddress().query('textfield[name="verify_city"]')[0].getValue();
						var verify_state = verAddress.State;   //this.getPaymentprocesscheckaddress().query('textfield[name="verify_state"]')[0].getValue();
						var verify_zip = verAddress.Zipcode;   //this.getPaymentprocesscheckaddress().query('textfield[name="verify_zip"]')[0].getValue();
						
						main_view.push(this.shippinginfoaddress);
						
						this.getShippinginfoaddress().query('textfield[name="first_name_ship_guest"]')[0].setValue(verify_fist_name);
						this.getShippinginfoaddress().query('textfield[name="last_name_ship_guest"]')[0].setValue(verify_last_name);
						this.getShippinginfoaddress().query('textfield[name="verify_ship_address1"]')[0].setValue(verify_address1);
						this.getShippinginfoaddress().query('textfield[name="verify_ship_address2"]')[0].setValue(verify_address2);
						this.getShippinginfoaddress().query('textfield[name="verify_ship_city"]')[0].setValue(verify_city);
						this.getShippinginfoaddress().query('textfield[name="verify_ship_state"]')[0].setValue(verify_state);
						this.getShippinginfoaddress().query('textfield[name="verify_ship_zip"]')[0].setValue(verify_zip);
						
						this.getMessage_ship_list_address_registered().hide();
						this.getMessage_for_list_registered_users().hide();
						this.getMessage_for_list_registered_users_or().show();
						this.getShippingListIDRegistered().hide();
        				
			        }else{
			        	
			        	this.getShippinginfoaddress().query('textfield[name="first_name_ship_guest"]')[0].hide();
						this.getShippinginfoaddress().query('textfield[name="last_name_ship_guest"]')[0].hide();
			        	
			        	main_view.push(this.shippinginfoaddress);
			        }	
					
					newButton.show();
					
					/*if(!records.length)
					{
						Ext.getCmp("message_for_list_registered_users").hide();
						Ext.getCmp("message_for_list_registered_users_not_or").show();
					}else{
						Ext.getCmp("message_for_list_registered_users").show();
						Ext.getCmp("message_for_list_registered_users_not_or").hide();
					}*/
					
				}else if(user.ViewAddressCheck == "0" || user.ViewAddressCheck == null) {
					
					if(this.shippinginfo != undefined)
					{
						this.shippinginfo.destroy();
					}
					this.shippinginfo = Ext.create('mob.view.tablet.ShippingInfo');
					
					main_view.push(this.shippinginfo);
					newButton.show();
					
				}else{
					
					if(this.shippinginfo != undefined)
					{
						this.shippinginfo.destroy();
					}
					this.shippinginfo = Ext.create('mob.view.tablet.ShippingInfo');
					
					main_view.push(this.shippinginfo);
					newButton.show();
				}
				
				//shipping_info
				
				//ga('set', 'page', '/shipping_info');
				ga('send', 'pageview', {
								  page: '/app/#shipping_info',
								  title: 'Shipping Info'
								});
			},
			scope: this
		});
	},
	
	//
	
	onAdditionalPagesInit: function(obj, e){
		
		var main_view = this.getMain();
		obj.element.on({
	    	tap: function(object, event) {
	    		
				if (Ext.fly(event).dom.className == 'what_bbw' || Ext.fly(event).dom.className == 'what_bbw_inner') {
					whatisbbw = Ext.create('mob.view.tablet.WhatIsBBW');
					main_view.push(whatisbbw);
					Ext.getCmp("breadcrambs").setHtml("What is BuyBackWorld?");
				}else if (Ext.fly(event).dom.className == 'sell_to_bbw' || Ext.fly(event).dom.className == 'sell_to_bbw_inner') {
					whatsellbbw = Ext.create('mob.view.tablet.WhatSellBBW');
					main_view.push(whatsellbbw);
					Ext.getCmp("breadcrambs").setHtml("What Can I Sell to BuyBackWorld?");
				}else if (Ext.fly(event).dom.className == 'why_to_bbw' || Ext.fly(event).dom.className == 'why_to_bbw_inner') {
					whysellbbw = Ext.create('mob.view.tablet.WhySellBBW');
					main_view.push(whysellbbw);
					Ext.getCmp("breadcrambs").setHtml("Why Should I Sell to BuyBackWorld?");
				}
	    	}
	    });
		
	},
	
	onConfirmShippingInitialize: function(obj, e){
		
		var newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		obj.element.on({
	    	tap: function() {
			
				Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			
				Ext.Ajax.request({
					url: '/app/json_adapter.php',
					method: 'POST',
					disableCaching: true,
					params: {
						action: 'shipping-method',
						free_label: 1,
						user_id: user.Id
					},
					success: function(response) {
						
						var store = Ext.getStore('ClientAddressStore');
						store.getProxy().setExtraParams(
						{ 
							user_id : user.Id,
							is_guest: user.IsGuest
						});
						store.load({
							callback: function(records, operation, success) {
								
								updateshippinginfo = Ext.create('mob.view.tablet.UpdateShippingInfo');
								main_view.push(updateshippinginfo);
								newButton.show();
								
							},
							scope: this
						});
						
					},
					failure: function(response) {
						Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					},	
					callback: function(response) {
						Ext.Viewport.setMasked(false);
					}
				});
			}
		});
		
	},
	
	onConfirmPaymentWindowInitialize: function(obj, e){
		
		main_view = this.getMain();
		confirmmethod = this.getConfirmmethod();
		newButton = this.getNewAddressButton();
		
		obj.element.on({
	    	tap: function() {
	    		
		   		if(this.updateconfirmpayment == undefined)
				{
					this.updateconfirmpayment = Ext.create('mob.view.tablet.UpdateConfirmPayment');
				}
				
				newButton.show();
				main_view.push(this.updateconfirmpayment);
	   		}
	    });
		
	},
	
	onConfirmWindowInitialize: function(obj, e){
		
		main_panel = this.getMain();
		confirmmethod = this.getConfirmmethod();
		
		obj.element.on({
	    	tap: function() {
	    		
	    		user_obj = obj.getData();
	    		
	    		confirm_email_window = Ext.create('Ext.Panel', {
					
						modal: true,
						centered: true,
				        width: '85%',
				        height: '120px',
				    	autoDestroy: false,
						fullscreen: true,
						title: 'Edit Email',
						hideOnMaskTap: true,
						style: 'background-color:white',
				        layout: {
				            type: 'vbox',
							align: 'stretch'
				        },
				    	items:[
				    		{
								xtype: 'textfield',
								name: 'edit_email_confirm',
								itemId: 'edit_email_confirm',
								placeHolder: 'Email address',
								value: user_obj.Email,
								style:{
									'margin':'5px 15px 5px 15px',
									'border':'1px solid #dddddd'
								}
				    		},
				    		{
								xtype: "button",
								ui: "confirm",
								text: "Submit",
								margin: '15 0 0 0',
								padding: '10 10',
								itemId: 'confirm_email_address',
								handler: function(){
									
									Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
									updated_email = confirm_email_window.down("#edit_email_confirm").getValue();
									
									Ext.Ajax.request({
										url: '/app/json_adapter.php',
										method: 'GET',
										disableCaching: true,
										
										params: {
											action: "update_confirm_email",
											updated_email: updated_email,
											user_id: user_obj.Id
										},	

										success: function(response) {
											if(response.responseText == 'OK')
											{
												var bbwStore = Ext.getStore('SettingsStoreBBW');
        										user = bbwStore.getCookie("user");
												
												u = mob.model.User;
												u.getProxy().setExtraParams(
												{ 
													//get values from phonegap
													get: 'user',
													user_id: user.Id
												});
												u.load(0, {
										            scope: this,
										            success: function (record, operation) {
										            	var bbwStore = Ext.getStore('SettingsStoreBBW');
										            	bbwStore.setCookie("user", record.data);
										            	
														confirmmethod.setData(record.data);
														
										            }
										        });
												
												
											}
										},

										failure: function(response) {
											Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
										},
											
										callback: function(response) {
											confirm_email_window.hide();
											Ext.Viewport.setMasked(false);
										}
									});
									
									
								
								}
						    }
				    		
				    	]
				    
				});
	    		
		       	main_panel.add(confirm_email_window);
		        confirm_email_window.show();
		   		
	   		}
	    });
		
	},
	
	onShowProduct: function(){
		
	},
	
	onShowGift: function()
	{
	
	},
	
	onHideProduct: function(obj, e){
		
	},
	
	onHideGift: function()
	{
	
	},
	
	onInitializePressLinks: function(obj){
		
	},
	
	onConfirmHide: function(){//better method for showing buttons
		terms_condition = this.getTerms_condition();
		terms_condition.hide();
	},
	
	onBottomAccountLinksTap: function(view, index, target, record, e)
	{
		id_el = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id_el).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		
		//Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		
		//removing buttons
		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
		Ext.Array.each(buttons, function(name, index, countriesItSelf) {
			Ext.removeNode(name);
		});
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		//end of removing buttons
		
		switch(record.data.id)
		{
			case 'account_bottom': 
			{	
				var bbwStore = Ext.getStore('SettingsStoreBBW');
		        user = bbwStore.getCookie("user");
				terms_condition = this.getTerms_condition();
				box_items = this.getBox_items();
				//showButton = this.getShowButton();
				
				var main_view = this.getMain();
				clientaccount = this.getClientaccount();
				
				if(user != undefined)
				{
					if(user.IsGuest == "1")
					{
						Ext.Msg.alert('Alert', 'Please activate your account!', Ext.emptyFn);
						return;
					}
					
					var store = Ext.getStore('TradesStore');
					store.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						user_id : user.Id,
						orders: 'not_completed',
						is_guest: user.IsGuest
						
					});
					store.load({
					    callback: function(records, operation, success) {
					    	if(success){
					    	
					    		Ext.getCmp("breadcrambs").setHtml("Account");
					    		
								if(clientaccount == undefined)
								{
									clientaccount = Ext.create('mob.view.tablet.ClientAccount');
								}
								
								//clientaccount.down("#accountTradesWindow").setData(records);
								//showButton.show();
								
								main_view.push(clientaccount);
								clientaccount.query('[name="user_email"]')[0].setValue(user.Email);
								clientaccount.query('[name="user_first"]')[0].setValue(user.FirstName);
								clientaccount.query('[name="user_second"]')[0].setValue(user.LastName);
							
							}else{
							
								if(clientaccount == undefined)
								{
									clientaccount = Ext.create('mob.view.tablet.ClientAccount');
								}
								
								main_view.push(clientaccount);
								clientaccount.query('[name="user_email"]')[0].setValue(user.Email);
								clientaccount.query('[name="user_first"]')[0].setValue(user.FirstName);
								clientaccount.query('[name="user_second"]')[0].setValue(user.LastName);
						
							}
							
					    },
					    scope: this
					});
					
				}else{
					
					Ext.getCmp("breadcrambs").setHtml("Login/Register/Checkout as Guest");
					
					if(this.loginregister == undefined)
					{
						this.loginregister = Ext.create('mob.view.LoginRegister');
					}
					main_view.push(this.loginregister);
					Ext.Viewport.setMasked(false);
					//this.getShowButton().hide();
					
				}
			}
			
				Ext.Viewport.setMasked(false);
			break;
			
			case 'how_bottom':
				 
				howitworks = Ext.create('mob.view.tablet.HowItWorks');
				
				Ext.getCmp("breadcrambs").setHtml('How It Works');
				var hfield = Ext.create('Ext.field.Hidden', {
					itemId: 'breadcramb_field',
	                value: 'How It Works'
				});
				howitworks.add(hfield);
				
				main_view.push(howitworks);
				Ext.Viewport.setMasked(false);
			break;
				
			case 'why_bottom': 
				
				whyuseus = Ext.create('mob.view.tablet.WhyUseUs');
				
				Ext.getCmp("breadcrambs").setHtml('Why Use Us');
				var hfield = Ext.create('Ext.field.Hidden', {
					itemId: 'breadcramb_field',
	                value: 'Why Use Us'
				});
				whyuseus.add(hfield);
				
				main_view.push(whyuseus);
				Ext.Viewport.setMasked(false);
			break;
			
			case 'about_bottom':
				
				aboutus = Ext.create('mob.view.tablet.AboutUs');
				
				Ext.getCmp("breadcrambs").setHtml('About Us');
				
				main_view.push(aboutus); 
				Ext.Viewport.setMasked(false);
				
			break;
			
			case 'faqs_bottom': 
				
				//faqs = Ext.create('mob.view.tablet.FAQs');
				//main_view.push(faqs); 
				
				window.location = 'https://buybackworld1.zendesk.com/hc/en-us';
				return;
				
			break;
			
			case 'sell_bulk_bottom': 
			
				window.location = 'http://www.buybackworld.com/bulkbuyback';
				return;
				
			break;
			
			case 'custom_quote_bottom': 
			
				window.location = 'http://www.buybackworld.com/custom-quote?desktop';
				return;
				
			break;
		}
		
		if(this.getTopaccountlinks() != undefined)
		{
			this.getTopaccountlinks().hide();
		}
		
		this.getMy_acccount().setIconCls("icon-list");
	},
	
	onAccountLinksPropertyTap: function(view, index, target, record, e) {
	
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.Url.indexOf("?") > 0)
		{
			category_id = record.data.Url.split("?")[1];	
		}else {
			category_id = record.data.Url;
		}
		
		window.location.hash='category.php?'+category_id;
		
		var account_btn = Ext.ComponentQuery.query('[itemId="my_acccount"]')[0];
		account_btn.fireEvent('tap', account_btn);
	},
	
	onAccountLinksPropertyDisclose: function(menuItem, record, target, index, e, eOpts) {
		
		//console.log("test prioperty 555");
		//console.log(record);
		
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.Url.indexOf("?") > 0)
		{
			category_id = record.data.Url.split("?")[1];	
		}else {
			category_id = record.data.Url;
		}
		
		//console.log(category_id);
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				check: 'root',
				category: category_id
			},

			success: function(response) {
				
				//console.log(" property text 1 "+ response.responseText);
				
				if(response.responseText == "products") {
					
					window.location.hash='category.php?'+category_id;
					
					var account_btn = Ext.ComponentQuery.query('[itemId="my_acccount"]')[0];
					account_btn.fireEvent('tap', account_btn);
					
				}else if(response.responseText == "property1") { 
					
					//console.log(" brand text property "+ response.responseText);
					
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								///console.log("property text 555");
								
								if(this.topaccountlinksproperty == undefined)
								{
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}else{
									main_view.remove(this.topaccountlinksproperty, true);
									this.topaccountlinksproperty = undefined;
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}
								
								this.topaccountlinksproperty.setData(records);
								this.topaccountlinksproperty.refresh();
								main_view.add(this.topaccountlinksproperty);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
						
				}else if(response.responseText == "property_drop") {
					
					//console.log("property_drop - select");
					
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								if(records.length > 0) {
									Ext.Array.remove(records, records[0]);
								}
								
								//console.log("property text 555");
								
								if(this.topaccountlinksproperty == undefined)
								{
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}else{
									main_view.remove(this.topaccountlinksproperty, true);
									this.topaccountlinksproperty = undefined;
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}
								
								this.topaccountlinksproperty.setData(records);
								this.topaccountlinksproperty.refresh();
								main_view.add(this.topaccountlinksproperty);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
					
				} 
			}
		});
	},
	
	onAccountLinksBrandTap: function(view, index, target, record, e) {
		
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.BrandRawURL.indexOf("?") > 0)
		{
			category_id = record.data.BrandRawURL.split("?")[1];	
		}else {
			category_id = record.data.BrandRawURL;
		}
		
		window.location.hash='category.php?'+category_id;
		
		var account_btn = Ext.ComponentQuery.query('[itemId="my_acccount"]')[0];
		account_btn.fireEvent('tap', account_btn);
	},	
	
	onAccountLinksBrandDisclose: function(menuItem, record, target, index, e, eOpts) {
		
		//console.log("test brand 555");
		//console.log(record);
		
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.BrandRawURL.indexOf("?") > 0)
		{
			category_id = record.data.BrandRawURL.split("?")[1];	
		}else {
			category_id = record.data.BrandRawURL;
		}
		
		//console.log(category_id);
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				check: 'root',
				category: category_id
			},

			success: function(response) {
					
					//console.log(" brand text 1 "+ response.responseText);
					
				if(response.responseText == "products") {
					
					window.location.hash='category.php?'+category_id;
					
					var account_btn = Ext.ComponentQuery.query('[itemId="my_acccount"]')[0];
					account_btn.fireEvent('tap', account_btn);
					
				}else if(response.responseText == "brand") {
					
					//console.log(" brand text 2 "+ response.responseText);
					
				}else if(response.responseText == "property0") { 
					
					//console.log(" brand text property "+ response.responseText);
					
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								//console.log("property text 555");
								
								if(this.topaccountlinksproperty == undefined)
								{
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}else{
									main_view.remove(this.topaccountlinksproperty, true);
									this.topaccountlinksproperty = undefined;
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}
								
								this.topaccountlinksproperty.setData(records);
								this.topaccountlinksproperty.refresh();
								main_view.add(this.topaccountlinksproperty);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
					
				}else if(response.responseText == "property1") { 
					
					//console.log(" brand text property "+ response.responseText);
					
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								//console.log("property text 555");
								
								if(this.topaccountlinksproperty == undefined)
								{
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}else{
									this.topaccountlinksproperty = undefined;
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}
								
								this.topaccountlinksproperty.setData(records);
								this.topaccountlinksproperty.refresh();
								main_view.add(this.topaccountlinksproperty);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
				}
			}	
		});
	},	
	
	onAccountLinksCategoryTap: function( item, record, eOpts ) {
		
		category_id = "";
		if(record.data.RawCategoryURL.indexOf("?") > 0)
		{
			category_id = record.data.RawCategoryURL.split("?")[1];	
		}else {
			category_id = record.data.RawCategoryURL;
		}
		
		//console.log(category_id);
		//console.log(record);
		
		if(record.data.Id == "60") {
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		Ext.getCmp("breadcrambs").setHtml("Everything Else");
		
		store = Ext.getStore('NotMainCategoriesStore');
		store.getProxy().setExtraParams(
			{ 
				sub_action : 'not_main'
			});
			store.load({
					callback: function(records, operation, success) {
						
						if(success){
						
							if(not_main_view == undefined) {
								not_main_view = Ext.create('mob.view.NotMainCategories');
							}
							
							obj_not_main = Ext.getCmp('notmain_categories_page');
							var all_items_not_main = [];
							var items_not_main = [];
					    	var innerItems_not_main = [];
							var panel = null;
							
				    		Ext.each(records, function(c, i) {
				    			
				    			all_items_not_main.push(c.data);
				    			
				    		 	items_not_main.push(c.data);
				    		 	if(i%2)
				    		 	{	
				    		 		innerItems_not_main.push(items_not_main);
									html = '';
									class_item = '';
									for(var j=0; j < items_not_main.length; j++)
									{
										if(j == 1)
										{
											class_item = 'right_item';
										}
										html += '<div style="width: 50%; margin-top: 30px; text-align: center; float: left;" class="product_carousel_item '+class_item+'"><div style="position: relative; width: 118px; height: 145px; margin: 0 auto; background-color: white; -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);"><input type="hidden" name="category_id_carousel" value="'+items_not_main[j].Id+'" class="category_id_carousel" />'+
									    	'<div class="headshot" style="background:url(\'/thumb.php?file=categoryimages/'+items_not_main[j].CategoryImage+'&sizex=182&sizey=97\') 50% top no-repeat;"></div>'+
									    	'<div class="name">'+items_not_main[j].Description+'</div></div></div>';
									}
									
									panel = Ext.create('Ext.Panel', {
								    	fullscreen: true,
							    		html: html
									});
									
							    	obj_not_main.add(panel);
				    		 		items_not_main = [];
				    		 	}
				    		 	
				    		 });
							
							////////not main categories
							
							obj_not_main.element.on('tap', function(e, el){
			    		 	
			    		 	category_id = e.target.parentElement.firstChild.value;
			    		 	if(category_id != undefined)
			    		 	{
			    		 	 	record = null;
			    		 	 	for(var k=0; k<all_items_not_main.length; k++)
			    		 	 	{
			    		 	 		if(all_items_not_main[k].Id == category_id)
			    		 	 		{
			    		 	 			record = all_items_not_main[k];
			    		 	 		}
			    		 	 	}
			    		 	 	
			    		 	 	if(record != null)
			    		 	 	{
			    		 	 		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
									
									//check if not main page
									
									//end of check if not main page
										
										category_id = "";
										if(record.RawCategoryURL.indexOf("?") > 0)
										{
											category_id = record.RawCategoryURL.split("?")[1];	
										}else {
											category_id = record.RawCategoryURL;
										}		
										
										//ask server where to go
										
										Ext.Ajax.request({
											url: '/app/json_adapter.php',
											method: 'GET',
											disableCaching: true,

											params: {
												check: 'root',
												category: category_id
											},

											success: function(response) {
												
												//action here
												
												if(response.responseText == "brand") {
													
													store = Ext.getStore('BrandsStore');
													store.getProxy().setExtraParams(
														{ 
															category_id : category_id
														});
														store.load({
															callback: function(records, operation, success) {
																
																if(success){
																	
																	Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
																	
																	if(this.brands == undefined) {
																		this.brands = Ext.create('mob.view.tablet.Brands');
																	}
																	
																	var hfield = Ext.create('Ext.field.Hidden', {
																		itemId: 'breadcramb_field',
													                    value: records[0].raw.topTextString
																	});
																	
																	this.brands.add(hfield);
																	
																	this.brands.down('#brands_list_items').setData(records);
																	this.brands.down('#brands_list_items').refresh();
																	
																	array_view[record.Description] = [];
																	array_view[record.Description][0] = this.brands.down('#brands_list_items');
																	array_view[record.Description][1] = this.brands.down('#brands_list_items').getStore().getProxy().getExtraParams();
																	///
																	var btn = new Ext.Button({
															            cls: 'x-buttons-breadcrumbs',
															            iconCls: 'icon-cross',
															            text: record.Description,
															            style:{
															            	"margin":"2px 1px 0px 1px",
															            	"font-size":"12px",
															            	"color":"#FFFFFF",
															            	"background-color":"#14A9EA",
																			"background-image":"none"
															            },
															            handler:function(obj){
															            	text = obj.getText();
														            		(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
															        		(array_view[text][0]).getStore().load({
															            		callback: function(records, operation, success) {
																					if(success)
																					{
																						//if(this.brands_top == undefined)
																						//{
																							this.brands_top = Ext.create('mob.view.tablet.Brands');
																						//}
																						var hfield = Ext.create('Ext.field.Hidden', {
																							itemId: 'breadcramb_field',
																		                    value: records[0].raw.topTextString
																						});
																						this.brands_top.add(hfield);
																						
																						this.brands_top.down('#brands_list_items').setData(records);
																						Ext.getCmp('main_view_nav').push(this.brands_top); //main_view
																						
																						///
																						var flag = false;
																						buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																						Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																						    if(btn.id == name.id)flag = true;
																						    if(flag)Ext.removeNode(name);
																						});
																						///
																						
																						savedResult =  this.brands_top.query('hiddenfield')[0]
																						if(savedResult != undefined)
																						{
																							Ext.getCmp("breadcrambs").setHtml(this.brands_top.query('hiddenfield')[0].getValue());
																						}
																						
																					}
															            		}
															            	});
															            }
															        });
																	Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
																	///
																	
																	Ext.Viewport.setMasked(false);
																	main_view.push(this.brands);
																}else {
																	
																	Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
																	Ext.Viewport.setMasked(false);
																}
															},
															scope: this
														});
													
														Ext.Viewport.setMasked(false);
													
												}else if(response.responseText == "property0") {
													
													store = Ext.getStore('PropertiesStore');
													store.getProxy().setExtraParams(
														{ 
															category_id : category_id
														});
														store.load({
															callback: function(records, operation, success) {
																
																if(success){
																	
																	Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
																	
																	//if(this.properties == undefined) {
																		this.properties = Ext.create('mob.view.tablet.Properties');
																	//}
																	
																	var hfield = Ext.create('Ext.field.Hidden', {
																		itemId: 'breadcramb_field',
													                    value: records[0].raw.topTextString
																	});
																	
																	this.properties.add(hfield);
																	this.properties.down('#property_list_items').setData(records);
																	this.properties.down('#property_list_items').refresh();
																	
																	array_view[record.Description] = [];
																	array_view[record.Description][0] = this.properties.down('#property_list_items');
																	array_view[record.Description][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
																	
																	var btn = new Ext.Button({
															            cls: 'x-buttons-breadcrumbs',
															            iconCls: 'icon-cross',
															            text: record.Description,
															            style:{
															            	"margin":"2px 1px 0px 1px",
															            	"font-size":"12px",
															            	"color":"#FFFFFF",
															            	"background-color":"#14A9EA",
																			"background-image":"none"
															            },
															            handler:function(obj){
															            	
															            	text = obj.getText();
															            	
															            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
															            	(array_view[text][0]).getStore().load({
															            		callback: function(records, operation, success) {
																					if(success)
																					{
																						//if(this.properties_top_properties == undefined)
																						//{
																							properties_top_properties = Ext.create('mob.view.tablet.Properties');
																						//}
																						
																						properties_top_properties.down('#property_list_items').setData(records);
																						var hfield = Ext.create('Ext.field.Hidden', {
																							itemId: 'breadcramb_field',
																		                    value: records[0].raw.topTextString
																						});
																						properties_top_properties.add(hfield);
																						Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
																						
																						///
																						var flag = false;
																						buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																						Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																						    if(btn.id == name.id)flag = true;
																						    if(flag)Ext.removeNode(name);
																						});
																						///
																						
																						savedResult =  properties_top_properties.query('hiddenfield')[0]
																						if(savedResult != undefined)
																						{
																							Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
																						}
																						
																					}
															            		}
															            	});
															            }
															        });
																	Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
																	///
																	
																	///
																	Ext.Viewport.setMasked(false);
																	main_view.push(this.properties);
																	
																}else {
																	Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
																	Ext.Viewport.setMasked(false);
																}
															},
															scope: this
														});
														
												}else if(response.responseText == "products"){

													var store = Ext.getStore('ProductStore');
													store.getProxy().setExtraParams(
													{ 
														//get values from phonegap
														category_id : category_id
													});
													store.load({
														callback: function(records, operation, success) {
															
															if(success){
															
																Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
																
																if(this.products == undefined) {
																	this.products = Ext.create('mob.view.tablet.Products');
																}
																
																var hfield = Ext.create('Ext.field.Hidden', {
																	itemId: 'breadcramb_field',
												                    value: records[0].raw.topTextString
																});
																
																this.products.add(hfield);
																this.products.down('#products_list_items').setData(records);
																this.products.down('#products_list_items').refresh();
																
																
																array_view[record.Description] = [];
																array_view[record.Description][0] = this.products.down('#products_list_items');
																array_view[record.Description][1] = this.products.down('#products_list_items').getStore().getProxy().getExtraParams();
																///
																var btn = new Ext.Button({
														            cls: 'x-buttons-breadcrumbs',
														            iconCls: 'icon-cross',
														            text: record.data.Description,
														            style:{
														            	"margin":"2px 1px 0px 1px",
														            	"font-size":"12px",
															            "color":"#FFFFFF",
														            	"background-color":"#14A9EA",
																		"background-image":"none"
														            },
														            handler:function(obj){
														            	text = obj.getText();
														            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
															            (array_view[text][0]).getStore().load({
														            		callback: function(records, operation, success) {
																				if(success)
																				{
																					//if(this.products_top_products == undefined)
																					//{
																						this.products_top_products = Ext.create('mob.view.tablet.Products');
																					//}
																					var hfield = Ext.create('Ext.field.Hidden', {
																						itemId: 'breadcramb_field',
																	                    value: records[0].raw.topTextString
																					});
																					
																					
																					this.products_top_products.down('#products_list_items').setData(records);
																					
																					this.products_top_products.add(hfield);
																					Ext.getCmp('main_view_nav').push(this.products_top_products); //main_view
																					
																					///
																					var flag = false;
																					buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																					Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																					    if(btn.id == name.id)flag = true;
																					    if(flag)Ext.removeNode(name);
																					});
																					///
																					
																					savedResult =  this.products_top_products.query('hiddenfield')[0]
																					if(savedResult != undefined)
																					{
																						Ext.getCmp("breadcrambs").setHtml(this.products_top_products.query('hiddenfield')[0].getValue());
																					}
																				}
														            		}
														            	});
														            }
														        });
																Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
																///
																
																
																
																main_view.push(this.products);
																Ext.Viewport.setMasked(false);
															}
														},
														scope: this
													});
													
												}

											},

											failure: function(response) {
												Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
											},
												
											callback: function(response) {
												
											}
										});
									
			    		 	 		
			    		 	 		
			    		 	 		
			    		 	 	}
			    		 	 	
			    		 	 }
			    		 	 
			             }, this);
			    		 	
			    			
						
						
						////////end not main categories
						
						ss1 = new Ext.Button({
							cls: 'btn_left_class',
				            width: '20px',
				            height: '50px',
				            text: '',
				            style: {
							    'margin-top': '-140px',
							    'float': 'left',
							    'position': 'absolute',
							    'left': '0px',
							    'right': 'auto',
							    'z-index':'100'
							},
							align: 'left',
							
							listeners: {
							    tap: function (list, index, item, record) {
							        
							        obj_not_main.previous();
							        
							    }
							}
							
				        });
				    	Ext.getCmp("carousel_not_main_container").add(ss1);
				    	
				    	ss2 = new Ext.Button({
				    		cls: 'btn_right_class',
				            width: '20px',
				            height: '50px',
				            text: '',
				            style: {
							    'margin-top': '-140px',
							    'float': 'right',
							    'position': 'absolute',
							    'right': '0px',
							    'left': 'auto',
							    'z-index':'100'
							},
							align: 'right',
							
							listeners: {
							    tap: function (list, index, item, record) {
							    	
							    	obj_not_main.next();
									
							    }	
							}
							
				        });
				    	Ext.getCmp("carousel_not_main_container").add(ss2);
						
						Ext.Viewport.setMasked(false);
						main_view.push(not_main_view);
					}else {
						Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
						Ext.Viewport.setMasked(false);
					}
					
				},
				scope: this
			});
			
		}else{
			window.location.hash='category.php?'+category_id;
		}
		
		var account_btn = Ext.ComponentQuery.query('[itemId="my_acccount"]')[0];
		account_btn.fireEvent('tap', account_btn);
	},	
		
	onAccountLinksCategoryDisclose: function(menuItem, record, target, index, e, eOpts) {
		
		//console.log("test category 555");
		
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.RawCategoryURL.indexOf("?") > 0)
		{
			category_id = record.data.RawCategoryURL.split("?")[1];	
		}else {
			category_id = record.data.RawCategoryURL;
		}
		
		//console.log(category_id);
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				check: 'root',
				category: category_id
			},

			success: function(response) {
				
				//console.log(" top text "+ response.responseText);
				
				if(response.responseText == "products") {
					
					window.location.hash='category.php?'+category_id;
					
					var account_btn = Ext.ComponentQuery.query('[itemId="my_acccount"]')[0];
					account_btn.fireEvent('tap', account_btn);
					
				}else if(response.responseText == "brand") {
					
					store = Ext.getStore('BrandsStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								if(this.topaccountlinksbrand == undefined)
								{
									this.topaccountlinksbrand = Ext.create('mob.view.tablet.TopAccountLinksBrand');
								}else{
									this.topaccountlinksbrand = undefined;
									this.topaccountlinksbrand = Ext.create('mob.view.tablet.TopAccountLinksBrand');
								}
								
								this.topaccountlinksbrand.setData(records);
								this.topaccountlinksbrand.refresh();
								main_view.add(this.topaccountlinksbrand);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
					
				}else if(response.responseText == "property0") { 
					
					//console.log(" brand text property "+ response.responseText);
					
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								//console.log("property text 555");
								
								if(this.topaccountlinksproperty == undefined)
								{
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}else{
									this.topaccountlinksproperty = undefined;
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}
								
								this.topaccountlinksproperty.setData(records);
								this.topaccountlinksproperty.refresh();
								main_view.add(this.topaccountlinksproperty);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
					
				}else if(response.responseText == "property1") { 
					
					//console.log(" brand text property "+ response.responseText);
					
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
					{ 
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							if(success) {
								
								//console.log("property text 555");
								
								if(this.topaccountlinksproperty == undefined)
								{
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}else{
									this.topaccountlinksproperty = undefined;
									this.topaccountlinksproperty = Ext.create('mob.view.tablet.TopAccountLinksProperty');
								}
								
								this.topaccountlinksproperty.setData(records);
								this.topaccountlinksproperty.refresh();
								main_view.add(this.topaccountlinksproperty);
								
							} else {
								
								Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
					
				}
				
			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
				
			callback: function(response) {
				
			}
		});
		
	},
	
	onAccountLinksDiscloseTap: function(menuItem, record, target, index, e, eOpts) {
		
		id_el = this.getMain().getNavigationBar().getBackButton().getId();
		var main_view = this.getMain();
		
		id_el = this.getMain().getNavigationBar().getBackButton().getId();
		var main_view = this.getMain();
		
		//end of removing buttons
		
		flag_category = false;
		
		switch(record.data.id)
		{
			case 'category_list': {
				
				Ext.Viewport.setMasked(false);
				flag_category = true;
				
				store = Ext.getStore('TopLinksStoreCategory');
				store.load({
					callback: function(records, operation, success) {
						
						if(success){
							
							//console.log("topaccountlinkscategory - before");
							
							if(this.topaccountlinkscategory == undefined)
							{
								this.topaccountlinkscategory = Ext.create('mob.view.tablet.TopAccountLinksCategory');
								//console.log("topaccountlinkscategory - inner");
							
							}else{
								this.topaccountlinkscategory = undefined;
								this.topaccountlinkscategory = Ext.create('mob.view.tablet.TopAccountLinksCategory');
							}
							
							this.topaccountlinkscategory.setData(records);
							this.topaccountlinkscategory.refresh();
							
							this.getMain().add(this.topaccountlinkscategory);//icon-cross//icon-list
							
						}else {
							
							Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
							Ext.Viewport.setMasked(false);
						}
					},
					scope: this
				});
				
				///////
				
				break;
			}
		}
	},
	
	onAccountLinksTap: function(view, index, target, record, e){
		
		id_el = this.getMain().getNavigationBar().getBackButton().getId();
		var main_view = this.getMain();
		
		//end of removing buttons
		
		flag_category = false;
		
		switch(record.data.id)
		{
			case 'category_list': {
				
				Ext.Viewport.setMasked(false);
				flag_category = true;
				
				store = Ext.getStore('TopLinksStoreCategory');
				store.load({
					callback: function(records, operation, success) {
						
						if(success){
							
							//console.log("topaccountlinkscategory - before");
							
							if(this.topaccountlinkscategory == undefined)
							{
								this.topaccountlinkscategory = Ext.create('mob.view.tablet.TopAccountLinksCategory');
								//console.log("topaccountlinkscategory - inner");
							
							}else{
								this.topaccountlinkscategory = undefined;
								this.topaccountlinkscategory = Ext.create('mob.view.tablet.TopAccountLinksCategory');
							}
							
							this.topaccountlinkscategory.setData(records);
							this.topaccountlinkscategory.refresh();
							
							this.getMain().add(this.topaccountlinkscategory);//icon-cross//icon-list
							
						}else {
							
							Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
							Ext.Viewport.setMasked(false);
						}
					},
					scope: this
				});
				
				///////
				
				break;
			}
			case 'sell_bulk': {
			
				window.location = 'http://www.buybackworld.com/bulkbuyback';
			
				break;
			}
			case 'custom_quote': {
			
				window.location = 'http://www.buybackworld.com/custom-quote?desktop';
			
				break;
			}
			case 'account': 
			{	
				terms_condition = this.getTerms_condition();
				box_items = this.getBox_items();
				//showButton = this.getShowButton();
				
				var main_view = this.getMain();
				var bbwStore = Ext.getStore('SettingsStoreBBW');
		        user = bbwStore.getCookie("user");
				
				clientaccount = this.getClientaccount();
				
				if(user != undefined)
				{
					if(user.IsGuest == "1")
					{
						Ext.Viewport.setMasked(false);
						Ext.Msg.alert('Alert', 'Please activate your account!', Ext.emptyFn);
						return;
					}
					
					var store = Ext.getStore('TradesStore');
					store.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						user_id : user.Id,
						orders: 'not_completed',
						is_guest: user.IsGuest
						
					});
					store.load({
					    callback: function(records, operation, success) {
					    	if(success){
					    	
					    		Ext.getCmp("breadcrambs").setHtml("Account");
					    		
								if(clientaccount == undefined)
								{
									clientaccount = Ext.create('mob.view.tablet.ClientAccount');
								}
								
								//clientaccount.down("#accountTradesWindow").setData(records);
								//showButton.show();
								
								main_view.push(clientaccount);
								clientaccount.query('[name="user_email"]')[0].setValue(user.Email);
								clientaccount.query('[name="user_first"]')[0].setValue(user.FirstName);
								clientaccount.query('[name="user_second"]')[0].setValue(user.LastName);
							
							}else{
							
								if(clientaccount == undefined)
								{
									clientaccount = Ext.create('mob.view.tablet.ClientAccount');
								}
								
								main_view.push(clientaccount);
								clientaccount.query('[name="user_email"]')[0].setValue(user.Email);
								clientaccount.query('[name="user_first"]')[0].setValue(user.FirstName);
								clientaccount.query('[name="user_second"]')[0].setValue(user.LastName);
						
							}
							
					    },
					    scope: this
					});
					
				}else{
					
					Ext.getCmp("breadcrambs").setHtml("Login/Register/Checkout as Guest");
					
					if(this.loginregister == undefined)
					{
						this.loginregister = Ext.create('mob.view.LoginRegister');
					}
					main_view.push(this.loginregister);
					Ext.Viewport.setMasked(false);
					//this.getShowButton().hide();
					
				}
			}
			
				Ext.Viewport.setMasked(false);
			
			break;
			
			case 'how':
				
				flag_category = true;
				
				howitworks = Ext.create('mob.view.tablet.HowItWorks');
				
				Ext.getCmp("breadcrambs").setHtml('How It Works');
				var hfield = Ext.create('Ext.field.Hidden', {
					itemId: 'breadcramb_field',
	                value: 'How It Works'
				});
				howitworks.add(hfield);
				
				main_view.push(howitworks);
				Ext.Viewport.setMasked(false);
			break;
				
			case 'why': 
				
				flag_category = true;
				
				whyuseus = Ext.create('mob.view.tablet.WhyUseUs');
				
				Ext.getCmp("breadcrambs").setHtml('Why Use Us');
				var hfield = Ext.create('Ext.field.Hidden', {
					itemId: 'breadcramb_field',
	                value: 'Why Use Us'
				});
				whyuseus.add(hfield);
				
				main_view.push(whyuseus);
				Ext.Viewport.setMasked(false);
			break;
			
			case 'about':
				
				flag_category = true;
				
				aboutus = Ext.create('mob.view.tablet.AboutUs');
				
				Ext.getCmp("breadcrambs").setHtml('About Us');
				
				main_view.push(aboutus); 
				Ext.Viewport.setMasked(false);
				
			break;
			
			case 'faqs': 
				
				//faqs = Ext.create('mob.view.tablet.FAQs');
				//main_view.push(faqs); 
				
				window.location = 'https://buybackworld1.zendesk.com/hc/en-us';
				
			break;
			
			case 'buys': 
				
				window.location = 'https://store.buybackworld.com/';
				
			break;
			
			case 'logoff_bottom': 
				
				var bbwStore = Ext.getStore('SettingsStoreBBW');
				bbwStore.setCookie("user", null);
				Ext.Viewport.setMasked(false);
				window.location.href = '/app';
				return;
				
			break;
		}
		
		switch(record.data.id)
		{
			case 'account': 
			case 'how':
			case 'why':
			case 'about':
			case 'faqs':
			case 'buys': 
			case 'logoff_bottom': 
								
				Ext.getCmp(id_el).removeCls('hide_back_button');
				Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
				Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
				Ext.getCmp("breadcrambs_buttons").show();

				//Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
				
				//removing buttons
				buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
				Ext.Array.each(buttons, function(name, index, countriesItSelf) {
					Ext.removeNode(name);
				});
				Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
				Ext.getCmp("breadcrambs_buttons").show();
				
			break;
		}
		
		if(this.getTopaccountlinks() != undefined && !flag_category)
		{
			this.getTopaccountlinks().hide();
		}
		
		if(!flag_category)
		{
			this.getMy_acccount().setIconCls("icon-list");
		}
	},
	
	onPaymentProcessShow:function(obj){
		
		//removing buttons
		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
		Ext.Array.each(buttons, function(name, index, countriesItSelf) {
			Ext.removeNode(name);
		});
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		//end of removing buttons
		
		
	},
	
	onNotMainCategoryShow: function(){
	
		id = this.getMain().getNavigationBar().getBackButton().getId();
		//Ext.getCmp(id).addCls('hide_back_button');
		Ext.getCmp("breadcrambs").setHtml('Everything Else');
		//Ext.getCmp("breadcrambs").addCls("hide_top_brebcrambs");
		//Ext.getCmp("main_panel_scroll_menu").addCls("hide_top_bar");
		
		//Ext.getCmp("breadcrambs").show();
		Ext.getCmp("main_panel_scroll_menu").show();
		//Ext.getCmp("breadcrambs_buttons").show();
		
	},	
	
	onNotMainCategoriesPageShow: function(obj, e){
		
	},
	
	onInitializeCategoriesPage: function(obj, e){
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		var all_items = [];
		var items = [];
    	var innerItems = [];
    	var store = Ext.getStore('CategoriesStore');
    	store.load(function(categories, operation) {
    		
    		var panel = null;
    		Ext.each(categories, function(c, i) {
    			
    			all_items.push(c.data);
    			items.push(c.data);
    		 	
    		 	if(i%2)
    		 	{	
    		 		innerItems.push(items);
					html = '';
					class_item = '';
					for(var j=0; j < items.length; j++)
					{
						if(j == 1)
						{
							class_item = 'right_item';
						}
						html += '<div style="width: 50%; text-align: center; float: left;" class="product_carousel_item '+class_item+'"><div style="position: relative; width: 118px; height: 145px; margin: 0 auto; background-color: white; -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);"><input type="hidden" name="category_id_carousel" value="'+items[j].Id+'" class="category_id_carousel" />'+
					    	'<div class="headshot" style="background:url(\'/thumb.php?file=categoryimages/'+items[j].CategoryImage+'&sizex=182&sizey=87\') 50% top no-repeat;"></div>'+
					    	'<div class="name">Sell '+items[j].Description+'</div></div></div>';
					}
					
					panel = Ext.create('Ext.Panel', {
				    	fullscreen: true,
			    		html: html
					});
					
			    	obj.add(panel);
    		 		items = [];
    		 	
    		 	}else{
    		 		
    		 		if(i == categories.length - 1) 
    		 		{
    		 			innerItems.push(items);
						html = '';
						class_item = '';
						for(var j=0; j < items.length; j++)
						{
							if(j == 1)
							{
								class_item = 'right_item';
							}
							html += '<div style="width: 50%; text-align: center; float: left;" class="product_carousel_item '+class_item+'"><div style="position: relative; width: 118px; height: 145px; margin: 0 auto; background-color: white; -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);"><input type="hidden" name="category_id_carousel" value="'+items[j].Id+'" class="category_id_carousel" />'+
						    	'<div class="headshot" style="background:url(\'/thumb.php?file=categoryimages/'+items[j].CategoryImage+'&sizex=182&sizey=87\') 50% top no-repeat;"></div>'+
						    	'<div class="name">Sell '+items[j].Description+'</div></div></div>';
						}
						
						panel = Ext.create('Ext.Panel', {
					    	fullscreen: true,
				    		html: html
						});
						
				    	obj.add(panel);
	    		 		items = [];
    		 		}
    		 	}
    		 });
    		 
    		obj.element.on('tap', function(e, el){
    		 	 category_id = e.target.parentElement.firstChild.value;
    		 	 if(category_id != undefined)
    		 	 {
    		 	 	record = null;
    		 	 	for(var k=0; k<all_items.length; k++)
    		 	 	{
    		 	 		if(all_items[k].Id == category_id)
    		 	 		{
    		 	 			record = all_items[k];
    		 	 		}
    		 	 	}
    		 	 	
    		 	 	if(record != null)
    		 	 	{
    		 	 		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
						
						//check if not main page
						if(record.Id == 60)
						{
							Ext.getCmp("breadcrambs").setHtml("Everything Else");
							
							store = Ext.getStore('NotMainCategoriesStore');
							store.getProxy().setExtraParams(
								{ 
									sub_action : 'not_main'
								});
								store.load({
										callback: function(records, operation, success) {
											
											if(success){
											
												if(not_main_view == undefined) {
													not_main_view = Ext.create('mob.view.NotMainCategories');
												}
												
												obj_not_main = Ext.getCmp('notmain_categories_page');
												var all_items_not_main = [];
												var items_not_main = [];
										    	var innerItems_not_main = [];
												var panel = null;
												
									    		Ext.each(records, function(c, i) {
									    			
									    			all_items_not_main.push(c.data);
									    			
									    		 	items_not_main.push(c.data);
									    		 	if(i%2)
									    		 	{	
									    		 		innerItems_not_main.push(items_not_main);
														html = '';
														class_item = '';
														for(var j=0; j < items_not_main.length; j++)
														{
															if(j == 1)
															{
																class_item = 'right_item';
															}
															html += '<div style="width: 50%; margin-top: 30px; text-align: center; float: left;" class="product_carousel_item '+class_item+'"><div style="position: relative; width: 118px; height: 145px; margin: 0 auto; background-color: white; -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);"><input type="hidden" name="category_id_carousel" value="'+items_not_main[j].Id+'" class="category_id_carousel" />'+
														    	'<div class="headshot" style="background:url(\'/thumb.php?file=categoryimages/'+items_not_main[j].CategoryImage+'&sizex=182&sizey=97\') 50% top no-repeat;"></div>'+
														    	'<div class="name">'+items_not_main[j].Description+'</div></div></div>';
														}
														
														panel = Ext.create('Ext.Panel', {
													    	fullscreen: true,
												    		html: html
														});
														
												    	obj_not_main.add(panel);
									    		 		items_not_main = [];
									    		 	}
									    		 	
									    		 });
												
												////////not main categories
												
												obj_not_main.element.on('tap', function(e, el){
								    		 	
								    		 	category_id = e.target.parentElement.firstChild.value;
								    		 	if(category_id != undefined)
								    		 	{
								    		 	 	record = null;
								    		 	 	for(var k=0; k<all_items_not_main.length; k++)
								    		 	 	{
								    		 	 		if(all_items_not_main[k].Id == category_id)
								    		 	 		{
								    		 	 			record = all_items_not_main[k];
								    		 	 		}
								    		 	 	}
								    		 	 	
								    		 	 	if(record != null)
								    		 	 	{
								    		 	 		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
														
														//check if not main page
														
														//end of check if not main page
															
															category_id = "";
															if(record.RawCategoryURL.indexOf("?") > 0)
															{
																category_id = record.RawCategoryURL.split("?")[1];	
															}else {
																category_id = record.RawCategoryURL;
															}		
															
															//ask server where to go
															
															Ext.Ajax.request({
																url: '/app/json_adapter.php',
																method: 'GET',
																disableCaching: true,

																params: {
																	check: 'root',
																	category: category_id
																},

																success: function(response) {
																	
																	//action here
																	
																	if(response.responseText == "brand") {
																		
																		store = Ext.getStore('BrandsStore');
																		store.getProxy().setExtraParams(
																			{ 
																				category_id : category_id
																			});
																			store.load({
																				callback: function(records, operation, success) {
																					
																					if(success){
																						
																						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
																						
																						if(this.brands == undefined) {
																							this.brands = Ext.create('mob.view.tablet.Brands');
																						}
																						
																						var hfield = Ext.create('Ext.field.Hidden', {
																							itemId: 'breadcramb_field',
																		                    value: records[0].raw.topTextString
																						});
																						
																						this.brands.add(hfield);
																						
																						this.brands.down('#brands_list_items').setData(records);
																						this.brands.down('#brands_list_items').refresh();
																						
																						array_view[record.Description] = [];
																						array_view[record.Description][0] = this.brands.down('#brands_list_items');
																						array_view[record.Description][1] = this.brands.down('#brands_list_items').getStore().getProxy().getExtraParams();
																						///
																						var btn = new Ext.Button({
																				            cls: 'x-buttons-breadcrumbs',
																				            iconCls: 'icon-cross',
																				            text: record.Description,
																				            style:{
																				            	"margin":"2px 1px 0px 1px",
																				            	"font-size":"12px",
																				            	"color":"#FFFFFF",
																				            	"background-color":"#14A9EA",
    																							"background-image":"none"
																				            },
																				            handler:function(obj){
																				            	text = obj.getText();
																			            		(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
																				        		(array_view[text][0]).getStore().load({
																				            		callback: function(records, operation, success) {
																										if(success)
																										{
																											//if(this.brands_top == undefined)
																											//{
																												this.brands_top = Ext.create('mob.view.tablet.Brands');
																											//}
																											var hfield = Ext.create('Ext.field.Hidden', {
																												itemId: 'breadcramb_field',
																							                    value: records[0].raw.topTextString
																											});
																											this.brands_top.add(hfield);
																											
																											this.brands_top.down('#brands_list_items').setData(records);
																											Ext.getCmp('main_view_nav').push(this.brands_top); //main_view
																											
																											///
																											var flag = false;
																											buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																											Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																											    if(btn.id == name.id)flag = true;
																											    if(flag)Ext.removeNode(name);
																											});
																											///
																											
																											savedResult =  this.brands_top.query('hiddenfield')[0]
																											if(savedResult != undefined)
																											{
																												Ext.getCmp("breadcrambs").setHtml(this.brands_top.query('hiddenfield')[0].getValue());
																											}
																											
																										}
																				            		}
																				            	});
																				            }
																				        });
																						Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
																						///
																						
																						Ext.Viewport.setMasked(false);
																						main_view.push(this.brands);
																					}else {
																						
																						Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
																						Ext.Viewport.setMasked(false);
																					}
																				},
																				scope: this
																			});
																		
																			Ext.Viewport.setMasked(false);
																		
																	}else if(response.responseText == "property0") {
																		
																		store = Ext.getStore('PropertiesStore');
																		store.getProxy().setExtraParams(
																			{ 
																				category_id : category_id
																			});
																			store.load({
																				callback: function(records, operation, success) {
																					
																					if(success){
																						
																						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
																						
																						//if(this.properties == undefined) {
																							this.properties = Ext.create('mob.view.tablet.Properties');
																						//}
																						
																						var hfield = Ext.create('Ext.field.Hidden', {
																							itemId: 'breadcramb_field',
																		                    value: records[0].raw.topTextString
																						});
																						
																						this.properties.add(hfield);
																						this.properties.down('#property_list_items').setData(records);
																						this.properties.down('#property_list_items').refresh();
																						
																						array_view[record.Description] = [];
																						array_view[record.Description][0] = this.properties.down('#property_list_items');
																						array_view[record.Description][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
																						
																						var btn = new Ext.Button({
																				            cls: 'x-buttons-breadcrumbs',
																				            iconCls: 'icon-cross',
																				            text: record.Description,
																				            style:{
																				            	"margin":"2px 1px 0px 1px",
																				            	"font-size":"12px",
																				            	"color":"#FFFFFF",
																				            	"background-color":"#14A9EA",
    																							"background-image":"none"
																				            },
																				            handler:function(obj){
																				            	
																				            	text = obj.getText();
																				            	
																				            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
																				            	(array_view[text][0]).getStore().load({
																				            		callback: function(records, operation, success) {
																										if(success)
																										{
																											//if(this.properties_top_properties == undefined)
																											//{
																												properties_top_properties = Ext.create('mob.view.tablet.Properties');
																											//}
																											
																											properties_top_properties.down('#property_list_items').setData(records);
																											var hfield = Ext.create('Ext.field.Hidden', {
																												itemId: 'breadcramb_field',
																							                    value: records[0].raw.topTextString
																											});
																											properties_top_properties.add(hfield);
																											Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
																											
																											///
																											var flag = false;
																											buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																											Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																											    if(btn.id == name.id)flag = true;
																											    if(flag)Ext.removeNode(name);
																											});
																											///
																											
																											savedResult =  properties_top_properties.query('hiddenfield')[0]
																											if(savedResult != undefined)
																											{
																												Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
																											}
																											
																										}
																				            		}
																				            	});
																				            }
																				        });
																						Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
																						///
																						
																						///
																						Ext.Viewport.setMasked(false);
																						main_view.push(this.properties);
																						
																					}else {
																						Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
																						Ext.Viewport.setMasked(false);
																					}
																				},
																				scope: this
																			});
																			
																	}else if(response.responseText == "products"){

																		var store = Ext.getStore('ProductStore');
																		store.getProxy().setExtraParams(
																		{ 
																			//get values from phonegap
																			category_id : category_id
																		});
																		store.load({
																			callback: function(records, operation, success) {
																				
																				if(success){
																				
																					Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
																					
																					if(this.products == undefined) {
																						this.products = Ext.create('mob.view.tablet.Products');
																					}
																					
																					var hfield = Ext.create('Ext.field.Hidden', {
																						itemId: 'breadcramb_field',
																	                    value: records[0].raw.topTextString
																					});
																					
																					this.products.add(hfield);
																					this.products.down('#products_list_items').setData(records);
																					this.products.down('#products_list_items').refresh();
																					
																					
																					array_view[record.Description] = [];
																					array_view[record.Description][0] = this.products.down('#products_list_items');
																					array_view[record.Description][1] = this.products.down('#products_list_items').getStore().getProxy().getExtraParams();
																					///
																					var btn = new Ext.Button({
																			            cls: 'x-buttons-breadcrumbs',
																			            iconCls: 'icon-cross',
																			            text: record.data.Description,
																			            style:{
																			            	"margin":"2px 1px 0px 1px",
																			            	"font-size":"12px",
																				            "color":"#FFFFFF",
																			            	"background-color":"#14A9EA",
																							"background-image":"none"
																			            },
																			            handler:function(obj){
																			            	text = obj.getText();
																			            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
																				            (array_view[text][0]).getStore().load({
																			            		callback: function(records, operation, success) {
																									if(success)
																									{
																										//if(this.products_top_products == undefined)
																										//{
																											this.products_top_products = Ext.create('mob.view.tablet.Products');
																										//}
																										var hfield = Ext.create('Ext.field.Hidden', {
																											itemId: 'breadcramb_field',
																						                    value: records[0].raw.topTextString
																										});
																										
																										
																										this.products_top_products.down('#products_list_items').setData(records);
																										
																										this.products_top_products.add(hfield);
																										Ext.getCmp('main_view_nav').push(this.products_top_products); //main_view
																										
																										///
																										var flag = false;
																										buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																										Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																										    if(btn.id == name.id)flag = true;
																										    if(flag)Ext.removeNode(name);
																										});
																										///
																										
																										savedResult =  this.products_top_products.query('hiddenfield')[0]
																										if(savedResult != undefined)
																										{
																											Ext.getCmp("breadcrambs").setHtml(this.products_top_products.query('hiddenfield')[0].getValue());
																										}
																									}
																			            		}
																			            	});
																			            }
																			        });
																					Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
																					///
																					
																					
																					
																					main_view.push(this.products);
																					Ext.Viewport.setMasked(false);
																				}
																			},
																			scope: this
																		});
																		
																	}

																},

																failure: function(response) {
																	Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
																},
																	
																callback: function(response) {
																	
																}
															});
														
								    		 	 		
								    		 	 		
								    		 	 		
								    		 	 	}
								    		 	 	
								    		 	 }
								    		 	 
								             }, this);
								    		 	
								    			
											
											
											////////end not main categories
											
											ss1 = new Ext.Button({
												cls: 'btn_left_class',
									            width: '20px',
									            height: '50px',
									            text: '',
									            style: {
												    'margin-top': '-140px',
												    'float': 'left',
												    'position': 'absolute',
												    'left': '0px',
												    'right': 'auto',
												    'z-index':'100'
												},
												align: 'left',
												
												listeners: {
												    tap: function (list, index, item, record) {
												        
												        obj_not_main.previous();
												        
												    }
												}
												
									        });
									    	Ext.getCmp("carousel_not_main_container").add(ss1);
									    	
									    	ss2 = new Ext.Button({
									    		cls: 'btn_right_class',
									            width: '20px',
									            height: '50px',
									            text: '',
									            style: {
												    'margin-top': '-140px',
												    'float': 'right',
												    'position': 'absolute',
												    'right': '0px',
												    'left': 'auto',
												    'z-index':'100'
												},
												align: 'right',
												
												listeners: {
												    tap: function (list, index, item, record) {
												    	
												    	obj_not_main.next();
														
												    }	
												}
												
									        });
									    	Ext.getCmp("carousel_not_main_container").add(ss2);
											
											Ext.Viewport.setMasked(false);
											main_view.push(not_main_view);
										}else {
											Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
											Ext.Viewport.setMasked(false);
										}
										
									},
									scope: this
								});
							
						}else{
						
							//end of check if not main page
							category_id = "";
								
							if(record.RawCategoryURL.indexOf("?") > 0)
							{
								category_id = record.RawCategoryURL.split("?")[1];	
							}else {
								category_id = record.RawCategoryURL;
							}
							
							if(record.IsGiftCard != "1")
							{
								window.location.hash='category.php?'+category_id;
							}else{
								window.location.hash='category.php?'+category_id;
							}
							
							//ask server where to go
							/*
							Ext.Ajax.request({
								url: '/app/json_adapter.php',
								method: 'GET',
								disableCaching: true,

								params: {
									check: 'root',
									category: category_id
								},

								success: function(response) {
									
									//action here
									
									if(response.responseText == "brand") {
										
										store = Ext.getStore('BrandsStore');
										store.getProxy().setExtraParams(
											{ 
												category_id : category_id
											});
											store.load({
												callback: function(records, operation, success) {
													
													if(success){
														
														Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
														
														if(this.brands == undefined) {
															this.brands = Ext.create('mob.view.tablet.Brands');
														}
														
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[0].raw.topTextString
														});
														
														this.brands.add(hfield);
														this.brands.down('#brands_list_items').setData(records);
														this.brands.down('#brands_list_items').refresh();
														
														array_view[record.Description] = [];
														array_view[record.Description][0] = this.brands.down('#brands_list_items');
														array_view[record.Description][1] = this.brands.down('#brands_list_items').getStore().getProxy().getExtraParams();
														///
														var btn = new Ext.Button({
												            cls: 'x-buttons-breadcrumbs',
												            iconCls: 'icon-cross',
												            text: record.Description,
												            style:{
												            	"margin":"2px 1px 0px 1px",
												            	"font-size":"12px",
																"color":"#FFFFFF",
												            	"background-color":"#14A9EA",
																"background-image":"none"
												            },
												            handler:function(obj){
												            	text = obj.getText();
											            		(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
												        		(array_view[text][0]).getStore().load({
												            		callback: function(records, operation, success) {
																		if(success)
																		{
																			//if(this.brands_top == undefined)
																			//{
																				this.brands_top = Ext.create('mob.view.tablet.Brands');
																			//}
																			var hfield = Ext.create('Ext.field.Hidden', {
																				itemId: 'breadcramb_field',
															                    value: records[0].raw.topTextString
																			});
																			this.brands_top.add(hfield);
																			
																			this.brands_top.down('#brands_list_items').setData(records);
																			Ext.getCmp('main_view_nav').push(this.brands_top); //main_view
																			
																			///
																			var flag = false;
																			buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																			Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																			    if(btn.id == name.id)flag = true;
																			    if(flag)Ext.removeNode(name);
																			});
																			///
																			
																			savedResult =  this.brands_top.query('hiddenfield')[0]
																			if(savedResult != undefined)
																			{
																				Ext.getCmp("breadcrambs").setHtml(this.brands_top.query('hiddenfield')[0].getValue());
																			}
																			
																		}
												            		}
												            	});
												            }
												        });
														Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
														///
														
														
														
														Ext.Viewport.setMasked(false);
														main_view.push(this.brands);
													}else {
														
														Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
														Ext.Viewport.setMasked(false);
													}
												},
												scope: this
											});
										
											Ext.Viewport.setMasked(false);
										
									}else if(response.responseText == "property0") {
										
										store = Ext.getStore('PropertiesStore');
										store.getProxy().setExtraParams(
											{ 
												category_id : category_id
											});
											store.load({
												callback: function(records, operation, success) {
													
													if(success){
														
														Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
														
														//if(this.properties == undefined) {
															this.properties = Ext.create('mob.view.tablet.Properties');
														//}
														
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[0].raw.topTextString
														});
														
														this.properties.down('#property_list_items').setData(records);
														
														this.properties.add(hfield);//this.properties.add(hfield);
														this.properties.down('#property_list_items').refresh();//this.properties.refresh();
														
														
														array_view[record.Description] = [];
														array_view[record.Description][0] = this.properties.down('#property_list_items'); //this.properties;
														array_view[record.Description][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();//this.properties.getStore().getProxy().getExtraParams();
														
														var btn = new Ext.Button({
												            cls: 'x-buttons-breadcrumbs',
												            iconCls: 'icon-cross',
												            text: record.Description,
												            style:{
												            	"margin":"2px 1px 0px 1px",
												            	"font-size":"12px",
																"color":"#FFFFFF",
												            	"background-color":"#14A9EA",
																"background-image":"none"
												            },
												            handler:function(obj){
												            	
												            	text = obj.getText();
												            	
												            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
												            	(array_view[text][0]).getStore().load({
												            		callback: function(records, operation, success) {
																		if(success)
																		{
																			//if(this.properties_top_properties == undefined)
																			//{
																				properties_top_properties = Ext.create('mob.view.tablet.Properties');
																			//}
																			var hfield = Ext.create('Ext.field.Hidden', {
																				itemId: 'breadcramb_field',
															                    value: records[0].raw.topTextString
																			});
																			properties_top_properties.add(hfield);
																			
																			properties_top_properties.down('#property_list_items').setData(records);
																			Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
																			
																			///
																			var flag = false;
																			buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																			Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																			    if(btn.id == name.id)flag = true;
																			    if(flag)Ext.removeNode(name);
																			});
																			///
																			
																			savedResult =  properties_top_properties.query('hiddenfield')[0]
																			if(savedResult != undefined)
																			{
																				Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
																			}
																			
																		}
												            		}
												            	});
												            }
												        });
														Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
														///
														
														///
														Ext.Viewport.setMasked(false);
														main_view.push(this.properties);
														
													}else {
														Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
														Ext.Viewport.setMasked(false);
													}
												},
												scope: this
											});
											
									}else if(response.responseText == "products"){
										
										var store = Ext.getStore('ProductStore');
										store.getProxy().setExtraParams(
										{ 
											//get values from phonegap
											category_id : category_id
										});
										store.load({
											callback: function(records, operation, success) {
												
												if(success){
												
													Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
													
													if(this.products == undefined) {
														this.products = Ext.create('mob.view.tablet.Products');
													}
													
													var hfield = Ext.create('Ext.field.Hidden', {
														itemId: 'breadcramb_field',
									                    value: records[0].raw.topTextString
													});
													
													this.products.down('#products_list_items').setData(records)
													this.products.add(hfield);
													this.products.down('#products_list_items').refresh();
													
													
													array_view[record.Description] = [];
													array_view[record.Description][0] = this.products.down('#products_list_items');
													array_view[record.Description][1] = this.products.down('#products_list_items').getStore().getProxy().getExtraParams();
													///
													var btn = new Ext.Button({
											            cls: 'x-buttons-breadcrumbs',
											            iconCls: 'icon-cross',
											            text: record.data.Description,
											            style:{
											            	"margin":"2px 1px 0px 1px",
											            	"font-size":"12px",
															"color":"#FFFFFF",
											            	"background-color":"#14A9EA",
															"background-image":"none"
											            },
											            handler:function(obj){
											            	text = obj.getText();
											            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
												            (array_view[text][0]).getStore().load({
											            		callback: function(records, operation, success) {
																	if(success)
																	{
																		//if(this.products_top_products == undefined)
																		//{
																			this.products_top_products = Ext.create('mob.view.tablet.Products');
																		//}
																		var hfield = Ext.create('Ext.field.Hidden', {
																			itemId: 'breadcramb_field',
														                    value: records[0].raw.topTextString
																		});
																			
																		this.products_top_products.down('#products_list_items').setData(records);
																		this.products_top_products.add(hfield);
																		Ext.getCmp('main_view_nav').push(this.products_top_products); //main_view
																		
																		///
																		var flag = false;
																		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
																		Ext.Array.each(buttons, function(name, index, countriesItSelf) {
																		    if(btn.id == name.id)flag = true;
																		    if(flag)Ext.removeNode(name);
																		});
																		///
																		
																		savedResult =  this.products_top_products.query('hiddenfield')[0]
																		if(savedResult != undefined)
																		{
																			Ext.getCmp("breadcrambs").setHtml(this.products_top_products.query('hiddenfield')[0].getValue());
																		}
																	}
											            		}
											            	});
											            }
											        });
													Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
													///
													
													
													
													main_view.push(this.products);
													Ext.Viewport.setMasked(false);
												}
											},
											scope: this
										});
										
									}

								},

								failure: function(response) {
									Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
								},
									
								callback: function(response) {
									
								}
							});
							*/
						}
    		 	 		
    		 	 	}
    		 	 	
    		 	 }
    		 	 
             }, this);
    	});
    	
		s1 = new Ext.Button({
			cls: 'btn_left_class',
            id: 'btn-left',
            width: '20px',
            height: '50px',
            text: '',
            style: {
			    'margin-top': '70px',
			    'float': 'left',
			    'position': 'absolute',
			    'left': '0px',
			    'right': 'auto'
			},
			align: 'left',
			
			listeners: {
			    tap: function (list, index, item, record) {
			        
			        obj.previous();
			        
			    }
			}
			
        });
    	Ext.getCmp("carousel_main_container").add(s1);
    	
    	s2 = new Ext.Button({
    		cls: 'btn_right_class',
            id: 'btn-right',
            width: '20px',
            height: '50px',
            text: '',
            style: {
			    'margin-top': '70px',
			    'float': 'right',
			    'position': 'absolute',
			    'right': '0px',
			    'left': 'auto'
			},
			align: 'right',
			
			listeners: {
			    tap: function (list, index, item, record) {
			    	
			    	if(obj.getActiveIndex() == obj.getItems().length-1) {
						obj.setActiveItem(0);
					}else{
						obj.next();
					}
			    }	
			}
			
        });
    	Ext.getCmp("carousel_main_container").add(s2);
	
	},
	
	onFrontIPadButton: function(){
		
		window.location.hash = 'category.php?id=49&brand=1';
		
	},
	
	onFrontCustomButton: function(){
	
		window.location = 'http://www.buybackworld.com/custom-quote?desktop';
		
	},
	
	onFrontGreatDealButton: function(){
	
		window.location = 'https://store.buybackworld.com/';
	
	},
		
	onFrontBulkSellButton: function(){
	
		window.location = 'http://www.buybackworld.com/bulkbuyback';
	
	},
	
	onFrontBlackberryButton: function(){
		
		/* action	category
		category_id	id=48&brand=2 */
		
		window.location.hash='blackberry/';
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		store = Ext.getStore('PropertiesStore');
		store.getProxy().setExtraParams(
			{ 
				category_id : 'id=48'//&brand=2
			});
			store.load({
				callback: function(records, operation, success) {
					
					if(success){
						
						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
						
						//if(this.properties == undefined) {
							this.properties = Ext.create('mob.view.tablet.Properties');
						//}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: records[0].raw.topTextString
						});
						
						this.properties.add(hfield);
						
						this.properties.down('#property_list_items').setData(records);
						this.properties.down('#property_list_items').refresh();
						
						array_view['Blackberry'] = [];
						array_view['Blackberry'][0] = this.properties.down('#property_list_items');
						array_view['Blackberry'][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
						
						var btn = new Ext.Button({
				            cls: 'x-buttons-breadcrumbs',
				            iconCls: 'icon-cross',
				            text: 'Cell Phone',
				            style:{
				            	"margin":"2px 1px 0px 1px",
				            	"font-size":"12px",
								"color":"#FFFFFF",
				            	"background-color":"#14A9EA",
								"background-image":"none"
				            },
				            handler:function(obj){
				            	
				            	text = obj.getText();
				            	
				            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
				            	(array_view[text][0]).getStore().load({
				            		callback: function(records, operation, success) {
										if(success)
										{
											//if(this.properties_top_properties == undefined)
											//{
												properties_top_properties = Ext.create('mob.view.tablet.Properties');
											//}
											var hfield = Ext.create('Ext.field.Hidden', {
												itemId: 'breadcramb_field',
							                    value: records[0].raw.topTextString
											});
											properties_top_properties.add(hfield);
											
											properties_top_properties.down('#property_list_items').setData(records);
											Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
											
											///
											var flag = false;
											buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
											Ext.Array.each(buttons, function(name, index, countriesItSelf) {
											    if(btn.id == name.id)flag = true;
											    if(flag)Ext.removeNode(name);
											});
											///
											
											savedResult =  properties_top_properties.query('hiddenfield')[0]
											if(savedResult != undefined)
											{
												Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
											}
											
										}
				            		}
				            	});
				            }
				        });
						Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
						///
						
						///
						Ext.Viewport.setMasked(false);
						main_view.push(this.properties);
						
					}else {
						Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
						Ext.Viewport.setMasked(false);
					}
				},
				scope: this
			});
			
	},
	
	onFrontGeneralButton: function(){
		
		var main_view = this.getMain();
		
		//console.log();//getScroller
		
		fromTop = Ext.ComponentQuery.query('[itemId="line_main_container"]')[0].element.dom.offsetTop;
		
		scroller = main_view.getActiveItem().getScrollable().getScroller();
		scroller.scrollTo(0, fromTop, true);
		
	
	},
	
	onFrontIphoneButton: function(){
		
		//show iphone page
		window.location.hash='iphone/';
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		store = Ext.getStore('PropertiesStore');
		store.getProxy().setExtraParams(
			{ 
				category_id : 'id=50&brand=1'
			});
			store.load({
				callback: function(records, operation, success) {
					
					if(success){
						
						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
						
						//if(this.properties == undefined) {
							this.properties = Ext.create('mob.view.tablet.Properties');
						//}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: records[0].raw.topTextString
						});
						
						this.properties.add(hfield);
						
						this.properties.down('#property_list_items').setData(records);
						this.properties.down('#property_list_items').refresh();
						
						array_view['iPhone'] = [];
						array_view['iPhone'][0] = this.properties.down('#property_list_items');
						array_view['iPhone'][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
						
						var btn = new Ext.Button({
				            cls: 'x-buttons-breadcrumbs',
				            iconCls: 'icon-cross',
				            text: 'iPhone',
				            style:{
				            	"margin":"2px 1px 0px 1px",
				            	"font-size":"12px",
								"color":"#FFFFFF",
				            	"background-color":"#14A9EA",
								"background-image":"none"
				            },
				            handler:function(obj){
				            	
				            	text = obj.getText();
				            	
				            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
				            	(array_view[text][0]).getStore().load({
				            		callback: function(records, operation, success) {
										if(success)
										{
											//if(this.properties_top_properties == undefined)
											//{
												properties_top_properties = Ext.create('mob.view.tablet.Properties');
											//}
											var hfield = Ext.create('Ext.field.Hidden', {
												itemId: 'breadcramb_field',
							                    value: records[0].raw.topTextString
											});
											properties_top_properties.add(hfield);
											
											properties_top_properties.down('#property_list_items').setData(records);
											Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
											
											///
											var flag = false;
											buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
											Ext.Array.each(buttons, function(name, index, countriesItSelf) {
											    if(btn.id == name.id)flag = true;
											    if(flag)Ext.removeNode(name);
											});
											///
											
											savedResult =  properties_top_properties.query('hiddenfield')[0]
											if(savedResult != undefined)
											{
												Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
											}
											
										}
				            		}
				            	});
				            }
				        });
						Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
						///
						
						///
						Ext.Viewport.setMasked(false);
						main_view.push(this.properties);
						
					}else {
						Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
						Ext.Viewport.setMasked(false);
					}
				},
				scope: this
			});
			
	},
	
	onFrontSamsungButton: function(){
	
		window.location.hash='samsung/';
	
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		/*
		action	category
		category_id	id=48&brand=18
		*/
		
		store = Ext.getStore('PropertiesStore');
		store.getProxy().setExtraParams(
			{ 
				category_id : 'id=48&brand=18'
			});
		store.load({
				callback: function(records, operation, success) {
					
					if(success){
						
						Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
						
						//if(this.properties == undefined) {
							this.properties = Ext.create('mob.view.tablet.Properties');
						//}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: records[0].raw.topTextString
						});
						
						this.properties.add(hfield);
						
						this.properties.down('#property_list_items').setData(records);
						this.properties.down('#property_list_items').refresh();
						
						array_view['Samsung'] = [];
						array_view['Samsung'][0] = this.properties.down('#property_list_items');
						array_view['Samsung'][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
						
						var btn = new Ext.Button({
				            cls: 'x-buttons-breadcrumbs',
				            iconCls: 'icon-cross',
				            text: 'Samsung',
				            style:{
				            	"margin":"2px 1px 0px 1px",
				            	"font-size":"12px",
								"color":"#FFFFFF",
				            	"background-color":"#14A9EA",
								"background-image":"none"
				            },
				            handler:function(obj){
				            	
				            	text = obj.getText();
				            	
				            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
				            	(array_view[text][0]).getStore().load({
				            		callback: function(records, operation, success) {
										if(success)
										{
											//if(this.properties_top_properties == undefined)
											//{
												properties_top_properties = Ext.create('mob.view.tablet.Properties');
											//}
											var hfield = Ext.create('Ext.field.Hidden', {
												itemId: 'breadcramb_field',
							                    value: records[0].raw.topTextString
											});
											properties_top_properties.add(hfield);
											
											properties_top_properties.down('#property_list_items').setData(records);
											Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
											
											///
											var flag = false;
											buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
											Ext.Array.each(buttons, function(name, index, countriesItSelf) {
											    if(btn.id == name.id)flag = true;
											    if(flag)Ext.removeNode(name);
											});
											///
											
											savedResult =  properties_top_properties.query('hiddenfield')[0]
											if(savedResult != undefined)
											{
												Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
											}
											
										}
				            		}
				            	});
				            }
				        });
						Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
						///
						
						///
						Ext.Viewport.setMasked(false);
						main_view.push(this.properties);
						
					}else {
						Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
						Ext.Viewport.setMasked(false);
					}
				},
				scope: this
			});
		
	},
	
	onMyLogoIcon: function(){
		window.location = "/app/";
	},
	
	onFrontScrollTapRight: function(obj, opts){
		
		Ext.getCmp('categories_page').setActiveItem(10);
		
	
	},
	
	MainPanelScrollMove: function(){
		
	},
	
	onMainPanelScrollMenuHide: function(){
		
		//window.location.hash='home/';
		
		id = this.getMain().getNavigationBar().getBackButton().getId();
		
		Ext.getCmp(id).removeCls('hide_back_button');
		Ext.getCmp("breadcrambs").removeCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
		Ext.getCmp("breadcrambs_buttons").show();
		
	},
	
	onMainPanelScrollMenu: function(obj){
		
		id = this.getMain().getNavigationBar().getBackButton().getId();
		Ext.getCmp(id).addCls('hide_back_button');
		//Ext.getCmp("breadcrambs").setHtml('Home');
		
		Ext.getCmp("breadcrambs").addCls("hide_top_brebcrambs");
		Ext.getCmp("main_panel_scroll_menu").addCls("hide_top_bar");
		
		Ext.getCmp("breadcrambs").show();
		Ext.getCmp("main_panel_scroll_menu").show();
		Ext.getCmp("breadcrambs_buttons").hide();
		
		var main_view = this.getMain();
		
		obj.down("#carousel_links").element.on('tap', function(e, el){
			
			if (e.target.className && e.target.className.indexOf('more_links_tocheck') > -1) {
				
				if(this.pressreleases == undefined)
				{
					this.pressreleases = Ext.create('mob.view.tablet.PressReleases');;
				}
				Ext.getCmp("breadcrambs").setHtml('Recent Press & Media Coverage');
				main_view.push(this.pressreleases);
			
			}
			
		})
		
		
		//window.location.hash='home/';
	},
	
	MainPanelPainted: function(){
		
	},
	
	onCategoryPageShow: function(obj, opts){
		
		id = this.getMain().getNavigationBar().getBackButton().getId();
		//Ext.getCmp(id).addCls('hide_back_button');
		//Ext.getCmp("breadcrambs").setHtml('Home');
		
		Ext.getCmp("breadcrambs").show();
		Ext.getCmp("main_panel_scroll_menu").show();
		//Ext.getCmp("breadcrambs_buttons").show();
		
		//this.getMain().getNavigationBar().getBackButton().hide();
		//this.getMain().getNavigationBar().getBackButton().setHidden(true);
		//this.getMain().getNavigationBar().getBackButton().setStyle('display:none!important');
	
	},
	
	onCategoryPageHide: function(){
		
		id = this.getMain().getNavigationBar().getBackButton().getId();
		//Ext.getCmp(id).removeCls('hide_back_button');
	
	},
	
	onRequestShippingKit: function()
	{
		var newButton = this.getNewAddressButton();
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'POST',
				disableCaching: true,
				params: {
					action: 'shipping-method',
					free_label: 1,
					user_id: user.Id
				},
				success: function(response) {
					
					window.location.hash='shipping_info/';
					
					/*
					var store = Ext.getStore('ClientAddressStore');
					store.getProxy().setExtraParams(
					{ 
						user_id : user.Id//25//user.Id
					});
					store.load({
						callback: function(records, operation, success) {
							
							if(this.shippinginfo == undefined)
							{
								this.shippinginfo = Ext.create('mob.view.tablet.ShippingInfo');;
							}
							main_view.push(this.shippinginfo);
							newButton.show();
						},
						scope: this
					});
					*/
					
				},
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},	
				callback: function(response) {
					Ext.Viewport.setMasked(false);
				}
			});
		
		
	},
		
	onOwnShippingKit: function()
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'POST',
				disableCaching: true,
				params: {
					action: 'shipping-method',
					own_label: 1,
					user_id: user.Id
				},
				success: function(response) {
					
					window.location.hash='shipping_info/';
					
					/*
					var store = Ext.getStore('ClientAddressStore');
					store.getProxy().setExtraParams(
					{ 
						user_id : user.Id//25//user.Id
					});
					store.load({
						callback: function(records, operation, success) {
							
							if(this.shippinginfo == undefined)
							{
								this.shippinginfo = Ext.create('mob.view.tablet.ShippingInfo');;
							}
							main_view.push(this.shippinginfo);
							newButton.show();
						},
						scope: this
					});
					*/
					
				},
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},	
				callback: function(response) {
					Ext.Viewport.setMasked(false);
				}
		});
	},
	
	onUpdatePaypalEmails: function(){
	
		this.getNewAddressButton().hide();
		var main_view = this.getMain();
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		form = this.getUpdatepaymentprocesspaypal().getValues();
		
		if(form.email_address != "" && 
			form.confirm_address != "" && 
			form.email_address == form.confirm_address)
		{
			this.getUpdatepaymentprocesspaypal().submit({
			    url: '/app/json_adapter.php?action=add_paypal&user_id='+user.Id,
			    method: 'POST',
			    success: function() {
			        
					u = mob.model.User;
					u.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						get: 'user',
						user_id: user.Id
					});
					u.load(0, {
			            scope: this,
			            success: function (record, operation) {
			            	
			            	var bbwStore = Ext.getStore('SettingsStoreBBW');
			            	bbwStore.setCookie("user", record.data);
			            	
			            	confirmmethod = Ext.create('mob.view.tablet.Confirm');
							confirmmethod.setData(record.data);
							
							main_view.push(confirmmethod);
							
							terms_condition.show();
			            }
			        });
			    }
			});
			
		}else{
			Ext.Msg.alert('ALERT', 'Please check your emails!', Ext.emptyFn);
		}
	
	},
	
	onSubmitPaypalEmails: function()
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		this.getNewAddressButton().hide();
		var main_view = this.getMain();
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		form = this.getPaymentprocesspaypal().getValues();
		
		if(form.email_address != "" && 
			form.confirm_address != "" && 
			form.email_address == form.confirm_address)
		{
			this.getPaymentprocesspaypal().submit({
			    url: '/app/json_adapter.php?action=add_paypal&user_id='+user.Id,
			    method: 'POST',
			    success: function() {
			        
			        /*
			        if(this.shippingmethod == undefined)
					{
						this.shippingmethod = Ext.create('mob.view.tablet.ShippingMethod');;
					}
					main_view.push(this.shippingmethod);
					*/
					
					window.location.hash='shipping_method/';
					
					Ext.Viewport.setMasked(false);
			    }
			});
			
		}else{
			Ext.Msg.alert('ALERT', 'Please check your emails!', Ext.emptyFn);
			Ext.Viewport.setMasked(false);
		}
	},
	
	updateAddressTap: function(obj, index, target, record, e, eOpts){
		
		this.getNewAddressButton().hide();
		terms_condition = this.getTerms_condition();
		confirmmethod = this.getConfirmmethod();
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'POST',
			disableCaching: true,

			params: {
				action: "add_check",
				user_id: user.Id,
				address_id: record.data.ID
			},

			success: function(response) {
				
				var bbwStore = Ext.getStore('SettingsStoreBBW');
				user = bbwStore.getCookie("user");
				
				u = mob.model.User;
				u.getProxy().setExtraParams(
				{ 
					//get values from phonegap
					get: 'user',
					user_id: user.Id
				});
				u.load(0, {
		            scope: this,
		            success: function (record, operation) {
		            	var bbwStore = Ext.getStore('SettingsStoreBBW');
		            	bbwStore.setCookie("user", record.data);
		            	
		            	confirmmethod.setData(record.data);
						main_view.push(confirmmethod);
		            }
		        });
		        
				terms_condition.show();
				Ext.Viewport.setMasked(false);
			},
			
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				Ext.Viewport.setMasked(false);
			},
				
			callback: function(response) {
				//Ext.Viewport.setMasked(false);
			}
		});
		
		
		
	},
	
	
	onAddressVerifiedTap: function(obj, index, target, record, e, eOpts){
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
        //console.log(record);
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'POST',
			disableCaching: true,

			params: {
				action: "add_check_verify",
				user_id: user.Id,
				address_id: record.data.ID
			},

			success: function(response) {
				
				Ext.getCmp("breadcrambs").setHtml("Shipping Info");
				window.location.hash='shipping_method/';
				
			},	
			
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				Ext.Viewport.setMasked(false);
			},
				
			callback: function(response) {
				Ext.Viewport.setMasked(false);
			}
		});
		
		
		
	},
	
	onAddressTap: function(obj, index, target, record, e, eOpts)
	{
		this.getNewAddressButton().hide();
		
		//shipping_method/
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'POST',
				disableCaching: true,

				params: {
					action: "add_check",
					user_id: user.Id,
					address_id: record.data.ID
				},

				success: function(response) {
					
					Ext.getCmp("breadcrambs").setHtml("Shipping Info");
					
					/*
					if(this.shippingmethod == undefined)
					{
						this.shippingmethod = Ext.create('mob.view.tablet.ShippingMethod');;
					}
					*/
					
					window.location.hash='shipping_method/';
					
					/*
					var hfield = Ext.create('Ext.field.Hidden', {
						itemId: 'breadcramb_field',
	                    value: "Shipping Info"
					});
					
					this.shippingmethod.add(hfield);
					main_view.push(this.shippingmethod);
					Ext.Viewport.setMasked(false);
					*/
				},
				
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					Ext.Viewport.setMasked(false);
				},
					
				callback: function(response) {
					
				}
			});
		
	},
	
	onTapUpdateShippingAddress: function(obj, index, target, record, e, eOpts){
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		terms_condition = this.getTerms_condition();
		
		this.getNewAddressButton().hide();
		var main_view = this.getMain();
		confirmmethod = this.getConfirmmethod();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
        Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'POST',
			disableCaching: true,

			params: {
				action: "add_shipping",
				user_id: user.Id,
				address_id: record.data.ID
			},
			success: function(response) {
				
				u = mob.model.User;
				u.getProxy().setExtraParams(
				{ 
					//get values from phonegap
					get: 'user',
					user_id: user.Id
				});
				u.load(0, {
		            scope: this,
		            success: function (record, operation) {
		            	var bbwStore = Ext.getStore('SettingsStoreBBW');
		            	bbwStore.setCookie("user", record.data);
		            	
						confirmmethod.setData(record.data);
						
						main_view.push(confirmmethod);
						terms_condition.show();
		            }
		        });
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},	
			callback: function(response) {
				Ext.Viewport.setMasked(false);
			}
		});	
    	
	},
	
	onShippingNotEqualTap: function(obj, index, target, record, e, eOpts) {
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		terms_condition = this.getTerms_condition();
		
		this.getNewAddressButton().hide();
		var main_view = this.getMain();
		confirmmethod = this.getConfirmmethod();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
        Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'POST',
				disableCaching: true,

				params: {
					action: "add_shipping_verify",
					user_id: user.Id,
					address_id: record.data.ID
				},
				success: function(response) {
					
					u = mob.model.User;
					u.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						get: 'user',
						user_id: user.Id
					});
					u.load(0, {
			            scope: this,
			            success: function (record, operation) {
			            	var bbwStore = Ext.getStore('SettingsStoreBBW');
			            	bbwStore.setCookie("user", record.data);
			            	
			            	Ext.getCmp("breadcrambs").setHtml("Confirmation");
			            	
			            	//confirmmethod
							if(this.confirmmethod == undefined)
							{
								this.confirmmethod = Ext.create('mob.view.tablet.Confirm');
							}
							
							var hfield = Ext.create('Ext.field.Hidden', {
								itemId: 'breadcramb_field',
			                    value: "Confirmation"
							});
							
							this.confirmmethod.add(hfield);
							
							this.confirmmethod.setData(record.data);
							
							main_view.push(this.confirmmethod);
							terms_condition.show();
			            }
			        });
				},
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},	
				callback: function(response) {
					Ext.Viewport.setMasked(false);
					window.location.hash='';
				}
		});
	},
	
	onShippingTap: function(obj, index, target, record, e, eOpts)
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		terms_condition = this.getTerms_condition();
		
		this.getNewAddressButton().hide();
		var main_view = this.getMain();
		confirmmethod = this.getConfirmmethod();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'POST',
				disableCaching: true,

				params: {
					action: "add_shipping",
					user_id: user.Id,
					address_id: record.data.ID
				},
				success: function(response) {
					
					u = mob.model.User;
					u.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						get: 'user',
						user_id: user.Id
					});
					u.load(0, {
			            scope: this,
			            success: function (record, operation) {
			            	var bbwStore = Ext.getStore('SettingsStoreBBW');
			            	bbwStore.setCookie("user", record.data);
			            	
			            	Ext.getCmp("breadcrambs").setHtml("Confirmation");
			            	
			            	//confirmmethod
							if(this.confirmmethod == undefined)
							{
								this.confirmmethod = Ext.create('mob.view.tablet.Confirm');
							}
							
							var hfield = Ext.create('Ext.field.Hidden', {
								itemId: 'breadcramb_field',
			                    value: "Confirmation"
							});
							
							this.confirmmethod.add(hfield);
							
							this.confirmmethod.setData(record.data);
							
							main_view.push(this.confirmmethod);
							terms_condition.show();
			            }
			        });
				},
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},	
				callback: function(response) {
					Ext.Viewport.setMasked(false);
					window.location.hash='';
				}
			});		
	},
	
	onCompletedButton: function(obj, e)
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		if(obj.getText() == 'Completed')
		{	
			terms_condition = this.getTerms_condition();
			box_items = this.getBox_items();
			var main_view = this.getMain();
			var bbwStore = Ext.getStore('SettingsStoreBBW');
	        user = bbwStore.getCookie("user");
			
			if(user != undefined)
			{
				var store = Ext.getStore('TradesStore');
				store.getProxy().setExtraParams(
				{ 
					//get values from phonegap
					user_id : user.Id,
					orders: 'completed',
					is_guest: user.IsGuest
					
				});
				store.load({
				    callback: function(records, operation, success) {
						if(success){
							
							//terms_condition.hide();
							
							this.getClientaccount().getComponent('clientaccounttrades').down("#clientaccounttradesView").setData(records);
							this.getClientaccount().getComponent('clientaccounttrades').down("#clientaccounttradesView").refresh();
							
						}else{
							
							Ext.Msg.alert('ALERT', 'Sorry, there are no completed orders!', Ext.emptyFn);
						}
						Ext.Viewport.setMasked(false);
				    },
				    scope: this
				});
				
			}else{
			
				if(this.loginregister == undefined)
				{
					this.loginregister = Ext.create('mob.view.LoginRegister');
				}
				main_view.push(this.loginregister);
				Ext.Viewport.setMasked(false);
				
			}
			
		
		}else{
			
			terms_condition = this.getTerms_condition();
			box_items = this.getBox_items();
			var main_view = this.getMain();
			var bbwStore = Ext.getStore('SettingsStoreBBW');
	        user = bbwStore.getCookie("user");
			
			if(user != undefined)
			{
				var store = Ext.getStore('TradesStore');
				store.getProxy().setExtraParams(
				{ 
					//get values from phonegap
					user_id : user.Id,
					orders: 'not_completed',
					is_guest: user.IsGuest
					
				});
				store.load({
				    callback: function(records, operation, success) {
						if(success){
							
							//terms_condition.hide();
							//box_items.hide();
							//
							//clientaccount = Ext.create('mob.view.tablet.ClientAccount');
							//main_view.push(clientaccount);
							this.getClientaccount().getComponent('clientaccounttrades').down("#clientaccounttradesView").setData(records);
							this.getClientaccount().getComponent('clientaccounttrades').down("#clientaccounttradesView").refresh();
						
							
						}else{
							
							Ext.Msg.alert('ALERT', 'Sorry, there are no completed orders!', Ext.emptyFn);
							//this.getClientaccount().getComponent('clientaccounttrades').setStore(store);
							//this.getClientaccount().getComponent('clientaccounttrades').refresh();	
						}
						Ext.Viewport.setMasked(false);
				    },
				    scope: this
				});
				
			}else{
			
				if(this.loginregister == undefined)
				{
					this.loginregister = Ext.create('mob.view.LoginRegister');
				}
				main_view.push(this.loginregister);
				Ext.Viewport.setMasked(false);
				
			}
		}
	},
	
	onNewAddressButton: function(obj)
	{
		if(this.createclientaddress == undefined)
		{
			this.createclientaddress = Ext.create('mob.view.tablet.CreateClientAddress');
		}
		if (!this.createclientaddress.getParent()) {
            this.getMain().add(this.createclientaddress);
        }
        
        var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        this.createclientaddress.updateData(user);
        this.createclientaddress.show();	
		
		//Ext.Viewport.setMasked(false);	
	},
	
	onCreateAddressButton: function(obj){
		
		clientaddress = this.createclientaddress;
		form = Ext.getCmp("create_address_id").getValues();
		
		address1 = form.address1;
		address2 = form.address2;
		address_name = form.address_name;
		city = form.city;
		state = form.state;
		zip = form.zip;
		first_address_name = form.first_name_address;
		last_address_name = form.last_name_address;
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		if(user.IsGuest == "1" && 
			(Ext.util.Format.trim(first_address_name) == "" || Ext.util.Format.trim(last_address_name) == ""))
		{
			Ext.Msg.alert('ALERT', 'Please fill all required fields!!!', Ext.emptyFn);
			return;
		}
		
		if(address1 != "" && 
			address_name != "" && 
			city != "" && 
			state != "" && 
			zip != "")
		{	
			
			Ext.getCmp("create_address_id").submit({
			    url: '/app/json_adapter.php?action=add_address&user_id='+user.Id,
			    method: 'POST',
			    success: function() {
			        
			        var store = Ext.getStore('ClientAddressStore');
					store.getProxy().setExtraParams(
					{ 
						user_id : user.Id, //25//user.Id
						is_guest: user.IsGuest
					});
					store.load();
			        clientaddress.hide();
			    }
			});
			
		}else{
			Ext.Msg.alert('ALERT', 'Please fill all required fields!', Ext.emptyFn);	
		}
		
	},
	
	onPendingButton: function()
	{
		
	},
	
	onMainBeforePop: function() {
      
    },
	
	onBeforePushMain: function(obj, view, eopts)
	{
		//this.getShowButton().hide();
	},
	
	onBackButtonTap: function(obj, e1, e2, e3)
	{
		window.location.hash = "";
		
		savedResult = obj.getActiveItem().query('hiddenfield')[0]
		if(savedResult != undefined)
		{
			
			Ext.getCmp("breadcrambs").setHtml(obj.getActiveItem().query('hiddenfield')[0].getValue());
		}
		
		if(obj.getActiveItem().getItemId() == 'paymentprocess'){
			Ext.getCmp("breadcrambs").setHtml('Payment Preference');	
		}
		if(obj.getActiveItem().getItemId() == 'shipping_process'){
			Ext.getCmp("breadcrambs").setHtml('Shipping Info');	
		}
		if(obj.getActiveItem().getItemId() == 'clientaccount'){
			Ext.getCmp("breadcrambs").setHtml('Account');	
		}
		
		//this.getShowButton().hide();
        this.getNewAddressButton().hide();
        this.getTerms_condition().hide();
        //this.getResend_kit().hide();
		
		if(obj.getActiveItem().getItemId() == "paymentprocess")
		{
			this.getNewAddressButton().show();	
		}
		if(obj.getActiveItem().getItemId() == "shippingmethod")
		{
			this.getNewAddressButton().show();	
		}
		if(obj.getActiveItem().getItemId() == 'clientaccount')
		{
			this.getNewAddressButton().hide();
		}
		
		//removing buttons
		buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
		if(buttons.length > 0)
		{
			key = buttons[(buttons.length-1)];
			Ext.removeNode(key);
		}
		//end of removing buttons
		
	},
	
	onOrdersTap: function(view, index, target, record, e)
	{
		this.getNewAddressButton().hide();
		////this.getResend_kit().show();
		//this.getShowButton().hide();
		
		clientaccounttradedetails = this.getClientaccounttradedetails();
		
		main_window = this.getMain();
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		var store = Ext.getStore('TradeDetailStore');
		store.getProxy().setExtraParams(
		{ 
			//get values from phonegap
			box_id : record.data.boxId,
			user_id: user.Id
		});
		store.load({
		    callback: function(records, operation, success) {
		    	if(success)
		    	{
		    		Ext.getCmp("breadcrambs").setHtml("Order Details");
					if(main_window.down("#clientAccountDetailsId") == null){
						this.clientaccounttradedetails = Ext.create('mob.view.tablet.ClientAccountTradeDetails');
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: "Order Details"
						});
						this.clientaccounttradedetails.add(hfield);
						//this.clientaccounttradedetails.down("#tradeDetailsAccountId").setData(records);
						main_window.push(this.clientaccounttradedetails);
					}else{
						main_window.pop(this.clientaccounttradedetails);
					}
				}	
				Ext.Viewport.setMasked(false);
		    },
		    scope: this
		});
		
		
		//Ext.Viewport.setMasked(false);
		
		//Ext.Msg.alert('Info', 'the product data will be shown here', Ext.emptyFn);
	},
	
	onPropertyTap: function (view, index, target, record, e) {

		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.Url.indexOf("?") > 0)
		{
			category_id = record.data.Url.split("?")[1];	
		}else {
			category_id = record.data.Url;
		}
		
		window.location.hash='category.php?'+category_id;
		
		//ask server where to go
		/*
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				check: 'root',
				category: category_id
			},

			success: function(response) {

				if(response.responseText == "property1") {

					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
								
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
									
									//if(this.properties == undefined) {
										properties = Ext.create('mob.view.tablet.Properties');
									//}
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									properties.add(hfield);
									properties.down('#property_list_items').refresh();
									
									///
									
									array_view[record.data.Value] = [];
									array_view[record.data.Value][0] = properties.down('#property_list_items');
									array_view[record.data.Value][1] = properties.down('#property_list_items').getStore().getProxy().getExtraParams();
									
									var btn = new Ext.Button({
							            itemId: '555',
							            iconCls: 'icon-cross',
							            cls: 'x-buttons-breadcrumbs',
							            text: record.data.Value,
							            style:{
							            	"margin":"2px 1px 0px 1px",
							            	"font-size":"12px",
											"color":"#FFFFFF",
							            	"background-color":"#14A9EA",
											"background-image":"none"
							            },
							            handler:function(obj){
							            	text = obj.getText();
							            	
							            	array_view[text][0].getStore().getProxy().setExtraParams(array_view[text][1]);
							            	array_view[text][0].getStore().load({
							            		
							            		callback: function(records, operation, success) {
													if(success)
													{
														//if(this.properties_top == undefined)
														//{
															this.properties_top = Ext.create('mob.view.tablet.Properties');
														//}
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[0].raw.topTextString
														});
														this.properties_top.add(hfield);
														
														this.properties_top.down('#property_list_items').setData(records);
														Ext.getCmp('main_view_nav').push(this.properties_top); //main_view
														
														///
														var flag = false;
														buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
														Ext.Array.each(buttons, function(name, index, countriesItSelf) {
														    if(btn.id == name.id)flag = true;
														    if(flag)Ext.removeNode(name);
														});
														///
														
														savedResult =  this.properties_top.query('hiddenfield')[0]
														if(savedResult != undefined)
														{
															Ext.getCmp("breadcrambs").setHtml(this.properties_top.query('hiddenfield')[0].getValue());
														}
														
													}
							            		}
							            	});
							            }
							        });
									Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									///
									
									
									
									Ext.Viewport.setMasked(false);
									main_view.push(properties);
									
								}else {
									Ext.Viewport.setMasked(false);
									
									Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
									
								}
							},
							scope: this
						});
					
				}else if(response.responseText == "products"){
					
					var store = Ext.getStore('ProductStore');
					store.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							
							if(success){
								
								Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
							
								//if(this.products == undefined) {
									products = Ext.create('mob.view.tablet.Products');
								//}
								
								var hfield = Ext.create('Ext.field.Hidden', {
									itemId: 'breadcramb_field',
				                    value: records[0].raw.topTextString
								});
								
								products.add(hfield);
								products.down('#products_list_items').refresh();
								
								array_view[record.data.Value] = [];
								array_view[record.data.Value][0] = products.down('#products_list_items');
								array_view[record.data.Value][1] = products.down('#products_list_items').getStore().getProxy().getExtraParams();								
								var btn = new Ext.Button({
						            cls: 'x-buttons-breadcrumbs',
						            iconCls: 'icon-cross',
						            text: record.data.Value,
						            style:{
						            	"margin":"2px 1px 0px 1px",
						            	"font-size":"12px",
										"color":"#FFFFFF",
						            	"background-color":"#14A9EA",
										"background-image":"none"
						            },
						            handler:function(obj){
						            	
						            	text = obj.getText();
						            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
								        (array_view[text][0]).getStore().load({
								            	
						            		callback: function(records, operation, success) {
												if(success)
												{
													//if(this.products_top_properties == undefined)
													//{
														this.products_top_properties = Ext.create('mob.view.tablet.Products');
													//}
													var hfield = Ext.create('Ext.field.Hidden', {
														itemId: 'breadcramb_field',
									                    value: records[0].raw.topTextString
													});
														
													this.products_top_properties.down('#products_list_items').setData(records);
													
													this.products_top_properties.add(hfield);
													Ext.getCmp('main_view_nav').push(this.products_top_properties); //main_view
													
													///
													var flag = false;
													buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
													Ext.Array.each(buttons, function(name, index, countriesItSelf) {
													    if(btn.id == name.id)flag = true;
													    if(flag)Ext.removeNode(name);
													});
													///
													
													savedResult =  this.products_top_properties.query('hiddenfield')[0]
													if(savedResult != undefined)
													{
														Ext.getCmp("breadcrambs").setHtml(this.products_top_properties.query('hiddenfield')[0].getValue());
													}
													
												}
						            		}
						            	});
						            }
						        });
								Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
								///
								
								
								
								Ext.Viewport.setMasked(false);
								main_view.push(products);
							}
						},
						scope: this
					});
					
				}else if(response.responseText == "property_drop") {

					if(this.selectproperty != undefined)
					{
						this.selectproperty.reset();
					}

					//propertiesdropdown
					store = Ext.getStore('PropertiesStoreDrop');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
								
								
									Ext.getCmp("breadcrambs").setHtml(records[1].raw.topTextString);
									
									if(this.propertiesdropdown == undefined) {
										this.propertiesdropdown = Ext.create('mob.view.tablet.PropertiesDropDown');
									}
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[1].raw.topTextString
									});
									this.propertiesdropdown.add(hfield);
									this.selectproperty = Ext.ComponentQuery.query('#selectproperty')[0];
									
									this.selectproperty.setStore(store);
									if(store.data.all.length > 1)
									{
										this.selectproperty.setLabel(store.data.all[1].data.Name);
									}
									
									array_view[record.data.Value] = [];
									array_view[record.data.Value][0] = store;
									array_view[record.data.Value][1] = store.getProxy().getExtraParams();
									
									var btn = new Ext.Button({
							            cls: 'x-buttons-breadcrumbs',
							            iconCls: 'icon-cross',
							            text: record.data.Value,
							            style:{
							            	"margin":"2px 1px 0px 1px",
							            	"font-size":"12px",
											"color":"#FFFFFF",
							            	"background-color":"#14A9EA",
											"background-image":"none"
							            },
							            handler:function(obj){
							            	text = obj.getText();
							            	
							            	array_view[text][0].getProxy().setExtraParams(array_view[text][1]);
							            	array_view[text][0].load({
							            		
							            		callback: function(records, operation, success) {
													if(success)
													{
														Ext.getCmp("breadcrambs").setHtml(records[1].raw.topTextString);
														//if(this.products_top_propertiesdropdown == undefined)
														//{
															this.products_top_propertiesdropdown = Ext.create('mob.view.tablet.PropertiesDropDown');
														//}
														
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[1].raw.topTextString
														});
														this.products_top_propertiesdropdown.add(hfield);
														this.selectproperty1 = this.products_top_propertiesdropdown.down("#selectproperty");
														this.selectproperty1.setStore(array_view[text][0]);
														if((array_view[text][0]).data.all.length > 1)
														{
															this.selectproperty1.setLabel((array_view[text][0]).data.all[1].data.Name);
														}
														
														//return;
														
														Ext.getCmp('main_view_nav').push(this.products_top_propertiesdropdown); //main_view
														
														///
														var flag = false;
														buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
														Ext.Array.each(buttons, function(name, index, countriesItSelf) {
														    if(btn.id == name.id)flag = true;
														    if(flag)Ext.removeNode(name);
														});
														///
														
														savedResult =  this.products_top_propertiesdropdown.query('hiddenfield')[0]
														if(savedResult != undefined)
														{
															Ext.getCmp("breadcrambs").setHtml(this.products_top_propertiesdropdown.query('hiddenfield')[0].getValue());
														}
														
													}
							            		}
							            	});
							            }
							        });
									Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									///
									
									
									Ext.Viewport.setMasked(false);
									main_view.push(this.propertiesdropdown);
									
								}else {
									Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
									Ext.Viewport.setMasked(false);
								}
							},
							scope: this
						});
						
				}

			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
				
			callback: function(response) {
				
			}
		});
				
		*/
	},
	
	onCategoryTap: function(view, index, target, record, e) {		
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var main_view = this.getMain();
		var not_main_view = this.getNotmaincategoriespage();
		
		//check if not main page
		if(record.data.Id == 60)
		{
			Ext.getCmp("breadcrambs").setHtml("Everything Else");
			
			store = Ext.getStore('NotMainCategoriesStore');
			store.getProxy().setExtraParams(
				{ 
					sub_action : 'not_main'
				});
				store.load({
					callback: function(records, operation, success) {
						
						if(success){
						
							if(not_main_view == undefined) {
								not_main_view = Ext.create('mob.view.NotMainCategories');
							}
							
							Ext.Viewport.setMasked(false);
							main_view.push(not_main_view);
						}else {
							Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
							Ext.Viewport.setMasked(false);
						}
						
					},
					scope: this
				});
			
		}else{
		
			//end of check if not main page
			
			category_id = "";
			if(record.data.RawCategoryURL.indexOf("?") > 0)
			{
				category_id = record.data.RawCategoryURL.split("?")[1];	
			}else {
				category_id = record.data.RawCategoryURL;
			}		
			
			
			window.location.hash='category.php?'+category_id;
			
			//ask server where to go
			/*
			
			Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'GET',
				disableCaching: true,

				params: {
					check: 'root',
					category: category_id
				},

				success: function(response) {
					
					//action here
					
					if(response.responseText == "brand") {
						
						store = Ext.getStore('BrandsStore');
						store.getProxy().setExtraParams(
							{ 
								category_id : category_id
							});
							store.load({
								callback: function(records, operation, success) {
									
									if(success){
										
										Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
										
										if(this.brands == undefined) {
											this.brands = Ext.create('mob.view.tablet.Brands');
										}
										
										var hfield = Ext.create('Ext.field.Hidden', {
											itemId: 'breadcramb_field',
						                    value: records[0].raw.topTextString
										});
										
										this.brands.add(hfield);
										this.brands.down('#brands_list_items').setData(records);
										this.brands.down('#brands_list_items').refresh();
										
										array_view[record.data.Description] = [];
										array_view[record.data.Description][0] = this.brands.down('#brands_list_items');
										array_view[record.data.Description][1] = this.brands.down('#brands_list_items').getStore().getProxy().getExtraParams();
										///
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: record.data.Description,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	text = obj.getText();
							            		(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
								        		(array_view[text][0]).getStore().load({
								            		callback: function(records, operation, success) {
														if(success)
														{
															//if(this.brands_top == undefined)
															//{
																this.brands_top = Ext.create('mob.view.tablet.Brands');
															//}
															var hfield = Ext.create('Ext.field.Hidden', {
																itemId: 'breadcramb_field',
											                    value: records[0].raw.topTextString
															});
															this.brands_top.add(hfield);
															
															this.brands_top.down('#brands_list_items').setData(records);
															Ext.getCmp('main_view_nav').push(this.brands_top); //main_view
															
															///
															var flag = false;
															buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
															Ext.Array.each(buttons, function(name, index, countriesItSelf) {
															    if(btn.id == name.id)flag = true;
															    if(flag)Ext.removeNode(name);
															});
															///
															
															savedResult =  this.brands_top.query('hiddenfield')[0]
															if(savedResult != undefined)
															{
																Ext.getCmp("breadcrambs").setHtml(this.brands_top.query('hiddenfield')[0].getValue());
															}
															
														}
								            		}
								            	});
								            }
								        });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
										///
										
										
										
										Ext.Viewport.setMasked(false);
										main_view.push(this.brands);
									}else {
										
										Ext.Msg.alert('MESSAGE', 'Coming Soon...', Ext.emptyFn);
										Ext.Viewport.setMasked(false);
									}
								},
								scope: this
							});
						
							Ext.Viewport.setMasked(false);
						
					}else if(response.responseText == "property0") {
						
						store = Ext.getStore('PropertiesStore');
						store.getProxy().setExtraParams(
							{ 
								category_id : category_id
							});
							store.load({
								callback: function(records, operation, success) {
									
									if(success){
										
										Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
										
										//if(this.properties == undefined) {
											this.properties = Ext.create('mob.view.tablet.Properties');
										//}
										
										var hfield = Ext.create('Ext.field.Hidden', {
											itemId: 'breadcramb_field',
						                    value: records[0].raw.topTextString
										});
										
										this.properties.add(hfield);
										
										this.properties.down('#property_list_items').setData(records);
										this.properties.down('#property_list_items').refresh();
										
										array_view[record.data.Description] = [];
										array_view[record.data.Description][0] = this.properties.down('#property_list_items');
										array_view[record.data.Description][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
										
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: record.data.Description,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	
								            	text = obj.getText();
								            	
								            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
								            	(array_view[text][0]).getStore().load({
								            		callback: function(records, operation, success) {
														if(success)
														{
															//if(this.properties_top_properties == undefined)
															//{
																properties_top_properties = Ext.create('mob.view.tablet.Properties');
															//}
															var hfield = Ext.create('Ext.field.Hidden', {
																itemId: 'breadcramb_field',
											                    value: records[0].raw.topTextString
															});
															properties_top_properties.add(hfield);
															
															properties_top_properties.down('#property_list_items').setData(records);
															Ext.getCmp('main_view_nav').push(properties_top_properties); //main_view
															
															///
															var flag = false;
															buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
															Ext.Array.each(buttons, function(name, index, countriesItSelf) {
															    if(btn.id == name.id)flag = true;
															    if(flag)Ext.removeNode(name);
															});
															///
															
															savedResult =  properties_top_properties.query('hiddenfield')[0]
															if(savedResult != undefined)
															{
																Ext.getCmp("breadcrambs").setHtml(properties_top_properties.query('hiddenfield')[0].getValue());
															}
															
														}
								            		}
								            	});
								            }
								        });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
										///
										
										///
										Ext.Viewport.setMasked(false);
										main_view.push(this.properties);
										
									}else {
										Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
										Ext.Viewport.setMasked(false);
									}
								},
								scope: this
							});
							
					}else if(response.responseText == "products"){

						var store = Ext.getStore('ProductStore');
						store.getProxy().setExtraParams(
						{ 
							//get values from phonegap
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
								
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
									
									if(this.products == undefined) {
										this.products = Ext.create('mob.view.tablet.Products');
									}
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									this.products.down('#products_list_items').setData(records);
									this.products.add(hfield);
									this.products.down('#products_list_items').refresh();
									
									
									array_view[record.data.Description] = [];
									array_view[record.data.Description][0] = this.products.down('#products_list_items');
									array_view[record.data.Description][1] = this.products.down('#products_list_items').getStore().getProxy().getExtraParams();
									///
									var btn = new Ext.Button({
							            cls: 'x-buttons-breadcrumbs',
							            iconCls: 'icon-cross',
							            text: record.data.Description,
							            style:{
							            	"margin":"2px 1px 0px 1px",
							            	"font-size":"12px",
											"color":"#FFFFFF",
							            	"background-color":"#14A9EA",
											"background-image":"none"
							            },
							            handler:function(obj){
							            	text = obj.getText();
							            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
								            (array_view[text][0]).getStore().load({
							            		callback: function(records, operation, success) {
													if(success)
													{
														//if(this.products_top_products == undefined)
														//{
															this.products_top_products = Ext.create('mob.view.tablet.Products');
														//}
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[0].raw.topTextString
														});
														
														this.products_top_products.down('#products_list_items').setData(records);
														this.products_top_products.add(hfield);
														Ext.getCmp('main_view_nav').push(this.products_top_products); //main_view
														
														///
														var flag = false;
														buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
														Ext.Array.each(buttons, function(name, index, countriesItSelf) {
														    if(btn.id == name.id)flag = true;
														    if(flag)Ext.removeNode(name);
														});
														///
														
														savedResult =  this.products_top_products.query('hiddenfield')[0]
														if(savedResult != undefined)
														{
															Ext.getCmp("breadcrambs").setHtml(this.products_top_products.query('hiddenfield')[0].getValue());
														}
													}
							            		}
							            	});
							            }
							        });
									Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									///
									
									
									
									main_view.push(this.products);
									Ext.Viewport.setMasked(false);
								}
							},
							scope: this
						});
						
					}

				},

				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},
					
				callback: function(response) {
					
				}
			});
			
			*/
		}
    },

	onBrandTap: function(view, index, target, record, e) {
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		//category_id = record.data.BrandRawURL;
		var main_view = this.getMain();
		
		category_id = "";
		if(record.data.BrandRawURL.indexOf("?") > 0)
		{
			category_id = record.data.BrandRawURL.split("?")[1];	
		}else {
			category_id = record.data.BrandRawURL;
		}
		
		window.location.hash='category.php?'+category_id;
		
		//ask server where to go
		/*
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				check: 'root',
				category: category_id
			},

			success: function(response) {

				if(response.responseText == "property0") {
				
					store = Ext.getStore('PropertiesStore');
					store.getProxy().setExtraParams(
						{ 
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
								
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
									
									if(this.properties == undefined) {
										this.properties = Ext.create('mob.view.tablet.Properties');
									}
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									this.properties.add(hfield);
									
									this.properties.down('#property_list_items').setData(records);
									this.properties.down('#property_list_items').refresh();
									
									array_view[record.data.Description] = [];
									array_view[record.data.Description][0] = this.properties.down('#property_list_items');
									array_view[record.data.Description][1] = this.properties.down('#property_list_items').getStore().getProxy().getExtraParams();
									///
									var btn = new Ext.Button({
							            cls: 'x-buttons-breadcrumbs',
							            iconCls: 'icon-cross',
							            text: record.data.Description,
							            style:{
							            	"margin":"2px 1px 0px 1px",
							            	"font-size":"12px",
											"color":"#FFFFFF",
							            	"background-color":"#14A9EA",
											"background-image":"none"
							            },
							            handler:function(obj){
							            	text = obj.getText();
							            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
								            (array_view[text][0]).getStore().load({
							            		callback: function(records, operation, success) {
													if(success)
													{
														//if(this.products_top_properties == undefined)
														//{
															this.products_top_properties = Ext.create('mob.view.tablet.Properties');
														//}
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[0].raw.topTextString
														});
														this.products_top_properties.add(hfield);
														
														this.products_top_properties.down('#property_list_items').setData(records);
														Ext.getCmp('main_view_nav').push(this.products_top_properties); //main_view

														///
														var flag = false;
														buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
														Ext.Array.each(buttons, function(name, index, countriesItSelf) {
														    if(btn.id == name.id)flag = true;
														    if(flag)Ext.removeNode(name);
														});
														///
														
														savedResult =  this.products_top_properties.query('hiddenfield')[0]
														if(savedResult != undefined)
														{
															Ext.getCmp("breadcrambs").setHtml(this.products_top_properties.query('hiddenfield')[0].getValue());
														}
														
													}
							            		}
							            	});
							            }
							        });
									Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									///
									
									main_view.push(this.properties);
									Ext.Viewport.setMasked(false);
								}else {
									Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
									Ext.Viewport.setMasked(false);
								}
							},
							scope: this
						});

				}else if(response.responseText == "products") {
					
					var store = Ext.getStore('ProductStore');
					store.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						category_id : category_id
					});
					store.load({
						callback: function(records, operation, success) {
							
							if(success){
								
								Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
							
								if(this.products == undefined) {
									this.products = Ext.create('mob.view.tablet.Products');
								}
								
								var hfield = Ext.create('Ext.field.Hidden', {
									itemId: 'breadcramb_field',
				                    value: records[0].raw.topTextString
								});
								
								this.products.down('#products_list_items').setData(records);
								this.products.add(hfield);
								this.products.down('#products_list_items').refresh();
								
								array_view[record.data.Description] = [];
								array_view[record.data.Description][0] = this.products.down('#products_list_items');
								array_view[record.data.Description][1] = this.products.down('#products_list_items').getStore().getProxy().getExtraParams();
								///
								var btn = new Ext.Button({
						            cls: 'x-buttons-breadcrumbs',
						            iconCls: 'icon-cross',
						            text: record.data.Description,
						            style:{
						            	"margin":"2px 1px 0px 1px",
						            	"font-size":"12px",
										"color":"#FFFFFF",
						            	"background-color":"#14A9EA",
										"background-image":"none"
						            },
						            handler:function(obj){
						            	text = obj.getText();
						            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
							            (array_view[text][0]).getStore().load({
						            		callback: function(records, operation, success) {
												if(success)
												{
													//if(this.products_top_properties == undefined)
													//{
														this.products_top_properties = Ext.create('mob.view.tablet.Products');
													//}
													var hfield = Ext.create('Ext.field.Hidden', {
														itemId: 'breadcramb_field',
									                    value: records[0].raw.topTextString
													});
													
													this.products_top_properties.down('#products_list_items').setData(records);
													this.products_top_properties.add(hfield);
													Ext.getCmp('main_view_nav').push(this.products_top_properties); //main_view
													
													///
													var flag = false;
													buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
													Ext.Array.each(buttons, function(name, index, countriesItSelf) {
													    if(btn.id == name.id)flag = true;
													    if(flag)Ext.removeNode(name);
													});
													///
													
													savedResult =  this.products_top_properties.query('hiddenfield')[0]
													if(savedResult != undefined)
													{
														Ext.getCmp("breadcrambs").setHtml(this.products_top_properties.query('hiddenfield')[0].getValue());
													}
													
												}
						            		}
						            	});
						            }
						        });
								Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
								///
								
								
								
								main_view.push(this.products);
								Ext.Viewport.setMasked(false);
							}
						},
						scope: this
					});
				}


			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
				
			callback: function(response) {
				
			}
		});
		
		*/
	},
	
	onChangeProperty: function (obj, newValue, oldValuem, eOpts) {

		if(!obj.initdata && obj.record != undefined && obj.record.data.Id > 0)
		{
			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			
			var main_view = this.getMain();		
			
			category_id = "";
			if (obj.record.data.Url.indexOf("?") > 0)
			{
				category_id = obj.record.data.Url.split("?")[1];
			} else {
				category_id = obj.record.data.Url;
			}		
			
			window.location.hash='category.php?'+category_id;
			
			Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'GET',
				disableCaching: true,

				params: {
					check: 'root',
					category: category_id
				},

				success: function(response) {
//property1
					
					if(response.responseText == "property1") {

						Ext.Viewport.setMasked(false);
						
					}else if(response.responseText == "products"){

						selected_value = Ext.ComponentQuery.query('#' + obj.id)[0].record.data.Value;
						selected_url = Ext.ComponentQuery.query('#' + obj.id)[0].record.data.Url;
						
						var store = Ext.getStore('ProductStore');
						store.getProxy().setExtraParams(
						{ 
							//get values from phonegap
							category_id : category_id
						});
						store.load({
							callback: function(records, operation, success) {
								
								if(success){
								
									Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
									
									if(this.products == undefined) {
										this.products = Ext.create('mob.view.tablet.Products');
									}
									
									var hfield = Ext.create('Ext.field.Hidden', {
										itemId: 'breadcramb_field',
					                    value: records[0].raw.topTextString
									});
									
									this.products.down('#products_list_items').setData(records);
									this.products.add(hfield);
									this.products.down('#products_list_items').refresh();
									
									
									
									array_view[selected_value] = [];
									array_view[selected_value][0] = this.products.down('#products_list_items');
									array_view[selected_value][1] = this.products.down('#products_list_items').getStore().getProxy().getExtraParams();
									///
									var btn = new Ext.Button({
							            cls: 'x-buttons-breadcrumbs',
							            iconCls: 'icon-cross',
							            text: selected_value,
							            style:{
							            	"margin":"2px 1px 0px 1px",
							            	"font-size":"12px",
											"color":"#FFFFFF",
							            	"background-color":"#14A9EA",
											"background-image":"none"
							            },
							            handler:function(obj){
							            	text = obj.getText();
							            	(array_view[text][0]).getStore().getProxy().setExtraParams(array_view[text][1]);
								            (array_view[text][0]).getStore().load({
							            		callback: function(records, operation, success) {
													if(success)
													{
														//if(this.products_top_products1 == undefined)
														//{
															this.products_top_products1 = Ext.create('mob.view.tablet.Products');
														//}
														var hfield = Ext.create('Ext.field.Hidden', {
															itemId: 'breadcramb_field',
										                    value: records[0].raw.topTextString
														});
														
														this.products_top_products1.down('#products_list_items').setData(records);
														this.products_top_products1.add(hfield);
														Ext.getCmp('main_view_nav').push(this.products_top_products1); //main_view
														
														///
														var flag = false;
														buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
														Ext.Array.each(buttons, function(name, index, countriesItSelf) {
														    if(btn.id == name.id)flag = true;
														    if(flag)Ext.removeNode(name);
														});
														///
														
														savedResult =  this.products_top_products1.query('hiddenfield')[0]
														if(savedResult != undefined)
														{
															Ext.getCmp("breadcrambs").setHtml(this.products_top_products1.query('hiddenfield')[0].getValue());
														}
														
													}
							            		}
							            	});
							            }
							        });
									Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
									///
									
									
									
									main_view.push(this.products);
									Ext.Viewport.setMasked(false);
									
								}
							},
							scope: this
						});
						
					}else if(response.responseText == "property_drop") {
						
						selected_value = Ext.ComponentQuery.query('#' + obj.id)[0].record.data.Value;
						selected_url = Ext.ComponentQuery.query('#' + obj.id)[0].record.data.Url;
						
						var store = Ext.getStore('PropertiesStoreDrop');
						store.getProxy().setExtraParams(
							{ 
								category_id : category_id
							});
							store.load({
								callback: function(records, operation, success) {									
									
									if(success){
									
										Ext.getCmp("breadcrambs").setHtml(records[1].raw.topTextString);
									
										//if(this.propertiesdropdown == undefined) {
											this.propertiesdropdown = Ext.create('mob.view.tablet.PropertiesDropDown');
										//}
										
										var hfield = Ext.create('Ext.field.Hidden', {
											itemId: 'breadcramb_field',
						                    value: records[1].raw.topTextString
										});
										
										this.propertiesdropdown.add(hfield);
										
										selectproperty = this.propertiesdropdown.down('#selectproperty');
										
										selectproperty.setStore(store);
										if(store.data.all.length > 1)
										{
											selectproperty.setLabel(store.data.all[1].data.Name);
										}
										
										array_view[selected_value] = [];
										array_view[selected_value][0] = store;
										array_view[selected_value][1] = selected_url;
										///
										var btn = new Ext.Button({
								            cls: 'x-buttons-breadcrumbs',
								            iconCls: 'icon-cross',
								            text: selected_value,
								            style:{
								            	"margin":"2px 1px 0px 1px",
								            	"font-size":"12px",
												"color":"#FFFFFF",
								            	"background-color":"#14A9EA",
												"background-image":"none"
								            },
								            handler:function(obj){
								            	text = obj.getText();
								            	
								            	(array_view[text][0]).getProxy().setExtraParams({category_id : array_view[text][1]});
								            	(array_view[text][0]).load({
								            		
								            		callback: function(records, operation, success) {
														if(success)
														{
															Ext.getCmp("breadcrambs").setHtml(records[1].raw.topTextString);
															//if(this.products_top_propertiesdropdown == undefined)
															//{
																this.products_top_propertiesdropdown = Ext.create('mob.view.tablet.PropertiesDropDown');
															//}
															
															
															var hfield = Ext.create('Ext.field.Hidden', {
																itemId: 'breadcramb_field',
											                    value: records[1].raw.topTextString
															});
															this.products_top_propertiesdropdown.add(hfield);
															this.selectproperty1 = this.products_top_propertiesdropdown.down("#selectproperty");
															this.selectproperty1.setStore((array_view[text][0]));
															
															
															
															if(((array_view[text])[0]).data.all.length > 1)
															{
																this.selectproperty1.setLabel(((array_view[text])[0]).data.all[1].data.Name);
															}
															
															Ext.getCmp('main_view_nav').push(this.products_top_propertiesdropdown); //main_view
															
															///
															var flag = false;
															buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
															Ext.Array.each(buttons, function(name, index, countriesItSelf) {
															    if(btn.id == name.id)flag = true;
															    if(flag)Ext.removeNode(name);
															});
															///
															
															savedResult =  this.products_top_propertiesdropdown.query('hiddenfield')[0]
															if(savedResult != undefined)
															{
																Ext.getCmp("breadcrambs").setHtml(this.products_top_propertiesdropdown.query('hiddenfield')[0].getValue());
															}
															
														}
								            		}
								            	});
								            }
								        });
										Ext.getCmp('breadcrambs_buttons').element.appendChild(btn.element);
										///
										
										
										
										main_view.push(this.propertiesdropdown);
										Ext.Viewport.setMasked(false);
										
									}else{
										Ext.Msg.alert('Alert', 'Coming Soon...', Ext.emptyFn);
										Ext.Viewport.setMasked(false);
									}
									
								},
								scope: this
							});
						
							
					}

				},

				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					Ext.Viewport.setMasked(false);
				},
					
				callback: function(response) {
					
				}
			});

		}
	},
	
	onSubCategoryTap: function(view, index, target, record, e){
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		category_id = record.data.RawCategoryURL;		
		
		window.location.hash='category.php?'+category_id;
		
		/*
		
		var store = Ext.getStore('ProductStore');
		store.getProxy().setExtraParams(
			{ 
				//get values from phonegap
				category_id : category_id
				
			});
			store.load({
			    callback: function(records, operation, success) {
			    	
			    	if(success){
			    	
			    		Ext.getCmp("breadcrambs").setHtml(records[0].raw.topTextString);
			    		
						if(this.products == undefined) {
							this.products = Ext.create('mob.view.tablet.Products');
						}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
		                    value: records[0].raw.topTextString
						});
						
						this.products.add(hfield);
						
						this.products.down('#products_list_items').setData(records);
						this.products.down('#products_list_items').refresh();
						this.getMain().push(this.products);
						
						Ext.Viewport.setMasked(false);
					}
			    },
			    scope: this
			});
		
		*/
		
	},
	
	onProductsTap: function(view, index, target, record, e){
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		/*
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		//Name
		Ext.getCmp("breadcrambs").setHtml(record.data.Name);
		
		//if(this.product_obj == undefined) {
			this.product_obj = Ext.create('mob.view.tablet.Product');
		//}
		
		var hfield = Ext.create('Ext.field.Hidden', {
			itemId: 'breadcramb_field',
            value: record.data.Name
		});
		this.product_obj.add(hfield);
		
		this.product_obj.setData(record.data);
		this.product_obj.query('[itemId="excellent_popup"]')[0].check();
		this.getMain().push(this.product_obj);
		
		Ext.Viewport.setMasked(false);
		*/
		
		window.location.hash='product/'+record.data.Id;
	},
	
	onGiftTap: function()
	{
	
	},
	
	onProductTap: function()
	{
		
	},
	
	onPoorPopUpTap: function()
	{
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		if(this.poor_popup == undefined) {
			this.poor_popup = Ext.create('mob.view.PoorPopUp');
		}

		if (!this.poor_popup.getParent()) {
            this.getMain().add(this.poor_popup);
        }
        this.poor_popup.show();		
		
		poor = this.product_obj.getData();
		Ext.ComponentQuery.query('panel[itemId="poorId"]')[0].innerElement.dom.innerHTML = poor.Categoryid.Condition.PoorTitle;
		
		Ext.Viewport.setMasked(false);
		
	},
	
	onAvetagePopUpTap: function()
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		if(this.poor_popup == undefined) {
			this.poor_popup = Ext.create('mob.view.PoorPopUp');
		}

		if (!this.poor_popup.getParent()) {
            this.getMain().add(this.poor_popup);
        }
        this.poor_popup.show();	
		
		poor = this.product_obj.getData();
		Ext.ComponentQuery.query('panel[itemId="poorId"]')[0].innerElement.dom.innerHTML = poor.Categoryid.Condition.AverageTitle;
		
		Ext.Viewport.setMasked(false);
	},
	
	onExcellentPopUpTop: function()
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		if(this.poor_popup == undefined) {
			this.poor_popup = Ext.create('mob.view.PoorPopUp');
		}

		if (!this.poor_popup.getParent()) {
            this.getMain().add(this.poor_popup);
        }
        this.poor_popup.show();	
		
		poor = this.product_obj.getData();
		Ext.ComponentQuery.query('panel[itemId="poorId"]')[0].innerElement.dom.innerHTML = poor.Categoryid.Condition.ExcellentTitle;
		
		Ext.Viewport.setMasked(false);
	},
	
	onNewPopUpTop: function()
	{
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		if(this.poor_popup == undefined) {
			this.poor_popup = Ext.create('mob.view.PoorPopUp');
		}

		if (!this.poor_popup.getParent()) {
            this.getMain().add(this.poor_popup);
        }
        this.poor_popup.show();	
		
		poor = this.product_obj.getData();
		Ext.ComponentQuery.query('panel[itemId="poorId"]')[0].innerElement.dom.innerHTML = poor.Categoryid.Condition.NewOptionTitle;
		
		Ext.Viewport.setMasked(false);
	},	
	
	onGiftSubmit: function(){
		
		this.getBox_items().show();
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		Ext.getCmp("breadcrambs").setHtml('Login/Register/Checkout as Guest');
		
		var newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		
		var newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
        giftData = this.gift_obj.getData();
        
        product_id = giftData.Id;
        
        //console.log(this.gift_obj.getData());
        
        //GiftFinalPrice
        //product_id
        //GiftFinalCount
        
    	Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,

			params: {
				add_gift: 1,
				product: product_id,
				final_price: giftData.GiftFinalPrice,
				final_count: giftData.GiftFinalCount,
				init_price: giftData.GiftInitPrice
			},
			
			success: function(response) {
				
				//load user addresses
				if(user == undefined)
				{
					window.location.hash='login/';
				}else{
					window.location.hash='payment/';
				}
			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				Ext.Viewport.setMasked(false);
			},
				
			callback: function(response) {
				
			}
		});
        
        return;
	},
	
	onOrderSubmit: function()   // submit order here
	{
		this.getBox_items().show();
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		Ext.getCmp("breadcrambs").setHtml('Login/Register/Checkout as Guest');
		
		var newButton = this.getNewAddressButton();
		var main_view = this.getMain();
		var checkedValue = this.product_obj.query('radiofield[name=question_option]')[0].getGroupValue();
		
		//dead condition price
		
		var checkedDeadValue = this.product_obj.query('radiofield[name=question_option_dead]')[0].getGroupValue();
		
		//
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		product_id = this.product_obj.getData().Id;
		var price = "";
		if(checkedValue == 1)
		{
			price = this.product_obj.getData().NewPrice;
		}else if(checkedValue == 2)
		{
			price = this.product_obj.getData().ExcellentPrice;
		}else if(checkedValue == 3)
		{
			price = this.product_obj.getData().AveragePrice;
		}else if(checkedValue == 4)
		{
			price = this.product_obj.getData().PoorPrice;
		}
		
		condition = checkedValue;
		
		if(checkedValue == 4) {
			if(checkedDeadValue == 5) {
				price = this.product_obj.getData().DeadPrice;
				condition = checkedDeadValue;
			}
			if(checkedDeadValue == 4) {
				price = this.product_obj.getData().PoorPrice;
				condition = checkedValue;
			}
		}
		
		//
		
		question_panel = Ext.getCmp("question_panel_area");
		var selected_values = [];
		Ext.Array.forEach(this.product_obj.getData().QuestionModuleArray, function(q, index, qSelf) {
			
			var checkedValue = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0].getGroupValue();
			if(checkedValue) {
				selected_values.push(checkedValue);
			}
		});
		
		//condition
		
		if(this.product_obj.getData().QuestionModuleArray.length > 0) {
			
			if(	condition == 1 && 
				this.product_obj.getData().QuestionModuleArray[0].ShowForNew == "1" && 
				this.product_obj.getData().QuestionModuleArray.length != selected_values.length ) {
				
				Ext.Msg.alert('Alert', 'Please answer the Additional Question we asked you on this product!', function(){
				
					Ext.getCmp('question_panel_area').setStyle({color:"red"});
				
				});
				Ext.Viewport.setMasked(false);
				return;
				
			}else if( condition == 2 && 
					  this.product_obj.getData().QuestionModuleArray[0].ShowForExcellent == "1" && 
					  this.product_obj.getData().QuestionModuleArray.length != selected_values.length ) {
				
				Ext.Msg.alert('Alert', 'Please answer the Additional Question we asked you on this product!', function(){
				
					Ext.getCmp('question_panel_area').setStyle({color:"red"});
				
				});
				Ext.Viewport.setMasked(false);
				return;
				
			}else if( condition == 3 && 
					  this.product_obj.getData().QuestionModuleArray[0].ShowForAverage == "1" && 
					  this.product_obj.getData().QuestionModuleArray.length != selected_values.length ) {
				
				Ext.Msg.alert('Alert', 'Please answer the Additional Question we asked you on this product!', function(){
				
					Ext.getCmp('question_panel_area').setStyle({color:"red"});
				
				});
				Ext.Viewport.setMasked(false);
				return;
				
			}else if( condition == 4 && 
			   		  this.product_obj.getData().QuestionModuleArray[0].ShowForPoor == "1" && 
			   		  this.product_obj.getData().QuestionModuleArray.length != selected_values.length ) {
				
				Ext.Msg.alert('Alert', 'Please answer the Additional Question we asked you on this product!', function(){
				
					Ext.getCmp('question_panel_area').setStyle({color:"red"});
				
				});
				Ext.Viewport.setMasked(false);
				return;
				
			}else if( condition == 5 && 
					  this.product_obj.getData().QuestionModuleArray[0].ShowForDead == "1" && 
					  this.product_obj.getData().QuestionModuleArray.length != selected_values.length ) {
				
				Ext.Msg.alert('Alert', 'Please answer the Additional Question we asked you on this product!', function(){
				
					Ext.getCmp('question_panel_area').setStyle({color:"red"});
				
				});
				Ext.Viewport.setMasked(false);
				return;
				
			}
			
		}
		
		//
		
		//
		
		productObj = this.product_obj.getData();
		
		Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'GET',
				disableCaching: true,

				params: {
					quick_pass: Ext.getCmp("hidden_quick_pass").getValue(),
					add_item: 1,
					product: product_id,
					price: price,
					condition: condition,
					question_answers: selected_values.join()
				},
				
				success: function(response) {
					
					//load user addresses
					if(user == undefined)
					{
						/*
						if(this.loginregister == undefined)
						{
							this.loginregister = Ext.create('mob.view.LoginRegister');
						}
						Ext.Viewport.setMasked(false);
						main_view.push(this.loginregister);
						
						//
						buttons = Ext.getCmp('breadcrambs_buttons').element.query(".x-buttons-breadcrumbs");
						Ext.Array.each(buttons, function(name, index, countriesItSelf) {
							Ext.removeNode(name);
						});
						Ext.getCmp("main_panel_scroll_menu").removeCls("hide_top_bar");
						//
						*/
						
						if(this.askwindow != undefined) {
							this.askwindow.destroy();
						}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
				            value: 'Smart Selling!'
						});
						
						Ext.getCmp("breadcrambs").setHtml("Smart Selling!");
						
						this.askwindow = Ext.create('mob.view.tablet.AskWindow');//.innerHTML
						
						Ext.DomQuery.select('span[id="product_name_ask"]')[0].innerHTML = productObj.Name;
						Ext.DomQuery.select('span[id="product_name_price"]')[0].innerHTML = price;
						
						main_view.push(this.askwindow);
						
						//window.location.hash='choice/';
						//window.location.hash='login/';
						
					}else{
						
						/*
						var store = Ext.getStore('ClientAddressStore');
						store.getProxy().setExtraParams(
						{ 
							user_id : user.Id//25//user.Id
						});
						store.load({
							callback: function(records, operation, success) {
								
								Ext.getCmp("breadcrambs").setHtml('Payment Preference');
								if(this.paymentprocess == undefined)
								{
									this.paymentprocess = Ext.create('mob.view.tablet.PaymentProcess');
								}
								
								newButton.show();
								
								var hfield = Ext.create('Ext.field.Hidden',{ 
									config:{
										itemId: 'breadcramb_field',
					                    value: "Payment Preference"
									}
								});
								//this.paymentprocess.add(hfield);
								Ext.Viewport.setMasked(false);
								main_view.push(this.paymentprocess);
							},
							scope: this
						});
						*/
						
						//console.log(this.product_obj.getData());
						
						if(this.askwindow != undefined) {
							this.askwindow.destroy();
						}
						
						var hfield = Ext.create('Ext.field.Hidden', {
							itemId: 'breadcramb_field',
				            value: 'Smart Selling!'
						});
						
						Ext.getCmp("breadcrambs").setHtml("Smart Selling!");
						
						this.askwindow = Ext.create('mob.view.tablet.AskWindow');
						
						Ext.DomQuery.select('span[id="product_name_ask"]')[0].innerHTML = productObj.Name;
						Ext.DomQuery.select('span[id="product_name_price"]')[0].innerHTML = price;
						
						main_view.push(this.askwindow);
						
						//window.location.hash='choice/';
						//window.location.hash='payment/';
						
					}	
				},

				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					Ext.Viewport.setMasked(false);
				},
					
				callback: function(response) {
					Ext.Viewport.setMasked(false);
				}
			});	
	},
	
	YesContinueWindow: function() {
	
		window.location = '/app/';
	},
	
	NoContinueWindow: function() {
	
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        if(user == undefined){
        	window.location.hash='login/';
        }else{
        	window.location.hash='payment/';
        }
	},
	
	onDeadPopup: function() {
		
		newData = this.product_obj.getData();
		
		if(parseInt(newData.QuickPassFlag) && parseInt(newData.QuickPassLive)) {
        	if(parseInt(newData.QuickPassStatusDead)) {
        		
        		Ext.getCmp("quick_pass_outer").show();
        		Ext.getCmp("quick_pass_text").show();
        		//Ext.getCmp("hidden_quick_pass").setValue(1);
        		
        		Ext.getCmp("submit_instant_btn").setHtml("Instant Quote = $" + newData.DeadPrice);
        		Ext.getCmp("submit_quick_pass_btn").setHtml("Quick Pay Quote = $" + newData.QuickPassStatusDeadPrice);	
        		
        		if(parseInt(Ext.getCmp("hidden_quick_pass").getValue())) {
        			
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().QuickPassStatusDeadPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Quick Pay Quote");
					Ext.getCmp("submit_order_btn").setIconCls("icon-glyph-bolt2");
					
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn");
        			
        		}else{
        			
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().DeadPrice;
					Ext.Viewport.setMasked(false);
        			
        			Ext.getCmp("submit_order_btn").setHtml("Sell Now");
					Ext.getCmp("submit_order_btn").setIconCls("");
					
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        		}
        		
        	} else {
        		//Ext.getCmp("hidden_quick_pass").setValue(0);
        		Ext.getCmp("quick_pass_outer").hide();
        		Ext.getCmp("quick_pass_text").hide();
        		
        		Ext.getCmp("submit_order_btn").setHtml("Sell Now");
				Ext.getCmp("submit_order_btn").setIconCls("");
				
				Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
				Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        		
				Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
				Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().DeadPrice;
				Ext.Viewport.setMasked(false);
				
	        }
        }else{
        	//Ext.getCmp("hidden_quick_pass").setValue(0);
        	Ext.getCmp("quick_pass_outer").hide();
        	Ext.getCmp("quick_pass_text").hide();
        	
        	Ext.getCmp("submit_order_btn").setHtml("Sell Now");
			Ext.getCmp("submit_order_btn").setIconCls("");
        	
        	Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
			Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        	
			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().DeadPrice;
			Ext.Viewport.setMasked(false);
			
        }
		
		//
		
		data = this.product_obj.getData();
		
		if(data && data != null && (data.QuestionModuleArray).length > 0) {
			if(data.QuestionModuleArray[0].ShowForDead == "1") {
				Ext.getCmp("question_panel_area").show();
			}else{
				Ext.getCmp("question_panel_area").hide();
			}
			
			question_panel = Ext.getCmp("question_panel_area");
			Ext.Array.forEach(data.QuestionModuleArray, function(q, index, qSelf) {
									
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0];
				checked.uncheck();
				
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[1];
				checked.uncheck();
				
			});
		}
		
	},
	
	onPoorPopup: function () {
		
		newData = this.product_obj.getData();
		
		if(parseInt(newData.QuickPassFlag) && parseInt(newData.QuickPassLive)) {
        	if(parseInt(newData.QuickPassStatusPoor)) {
        		
        		Ext.getCmp("quick_pass_text").show();
        		Ext.getCmp("quick_pass_outer").show();
        		//Ext.getCmp("hidden_quick_pass").setValue(1);
        		
        		Ext.getCmp("submit_instant_btn").setHtml("Instant Quote = $" + newData.PoorPrice);
        		Ext.getCmp("submit_quick_pass_btn").setHtml("Quick Pay Quote = $" + newData.QuickPassStatusPoorPrice);
        		
        		if(parseInt(Ext.getCmp("hidden_quick_pass").getValue())) {
        			
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().QuickPassStatusPoorPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Quick Pay Quote");
					Ext.getCmp("submit_order_btn").setIconCls("icon-glyph-bolt2");
					
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn");
        			
        		}else{
        			
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().PoorPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Sell Now");
					Ext.getCmp("submit_order_btn").setIconCls("");
        			
        			Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        			
        		}
        		
        	} else {
        		//Ext.getCmp("hidden_quick_pass").setValue(0);
        		Ext.getCmp("quick_pass_outer").hide();
        		Ext.getCmp("quick_pass_text").hide();
        		
        		Ext.getCmp("submit_order_btn").setHtml("Sell Now");
				Ext.getCmp("submit_order_btn").setIconCls("");
				
				Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
				Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        		
        		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
				Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().PoorPrice;
				Ext.Viewport.setMasked(false);
	        }
        }else{
        	//Ext.getCmp("hidden_quick_pass").setValue(0);
        	Ext.getCmp("quick_pass_outer").hide();
        	Ext.getCmp("quick_pass_text").hide();
        
        	Ext.getCmp("submit_order_btn").setHtml("Sell Now");
			Ext.getCmp("submit_order_btn").setIconCls("");
			
			Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
			Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        	
        	Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().PoorPrice;
			Ext.Viewport.setMasked(false);
        
        }
		
		data = this.product_obj.getData();
		
		if(data && data != null && (data.QuestionModuleArray).length > 0) {
			if(data.QuestionModuleArray[0].ShowForPoor == "1") {
				Ext.getCmp("question_panel_area").show();
			}else{
				Ext.getCmp("question_panel_area").hide();
			}
			
			question_panel = Ext.getCmp("question_panel_area");
			Ext.Array.forEach(data.QuestionModuleArray, function(q, index, qSelf) {
									
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0];
				checked.uncheck();
				
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[1];
				checked.uncheck();
				
			});
		}
		
	},
	
	onAveragePopup: function () {
		
		newData = this.product_obj.getData();
		
		if(parseInt(newData.QuickPassFlag) && parseInt(newData.QuickPassLive)) {
        	if(parseInt(newData.QuickPassStatusAverage)) {
        		
        		Ext.getCmp("quick_pass_text").show();
        		Ext.getCmp("quick_pass_outer").show();
        		//Ext.getCmp("hidden_quick_pass").setValue(1);
        		
        		Ext.getCmp("submit_instant_btn").setHtml("Instant Quote = $" + newData.AveragePrice);
        		Ext.getCmp("submit_quick_pass_btn").setHtml("Quick Pay Quote = $" + newData.QuickPassStatusAveragePrice);
        		
        		if(parseInt(Ext.getCmp("hidden_quick_pass").getValue())) {
        		
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().QuickPassStatusAveragePrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Quick Pay Quote");
					Ext.getCmp("submit_order_btn").setIconCls("icon-glyph-bolt2");
					
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn");
				
				}else{
					
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().AveragePrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Sell Now");
					Ext.getCmp("submit_order_btn").setIconCls("");
					
				}
        			
        	} else {
        		//Ext.getCmp("hidden_quick_pass").setValue(0);
        		Ext.getCmp("quick_pass_outer").hide();
        		Ext.getCmp("quick_pass_text").hide();
        		
        		Ext.getCmp("submit_order_btn").setHtml("Sell Now");
				Ext.getCmp("submit_order_btn").setIconCls("");
				
				Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
				Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        		
        		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
				Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().AveragePrice;
				Ext.Viewport.setMasked(false);
	        }
        }else{
        	//Ext.getCmp("hidden_quick_pass").setValue(0);
        	Ext.getCmp("quick_pass_outer").hide();
        	Ext.getCmp("quick_pass_text").hide();
        	
        	Ext.getCmp("submit_order_btn").setHtml("Sell Now");
			Ext.getCmp("submit_order_btn").setIconCls("");
			
			Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
			Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        	
        	Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().AveragePrice;
			Ext.Viewport.setMasked(false);
        }
		
		data = this.product_obj.getData();
		
		if(data && data != null && (data.QuestionModuleArray).length > 0) {
			if(data.QuestionModuleArray[0].ShowForAverage == "1") {
				Ext.getCmp("question_panel_area").show();
			}else{
				Ext.getCmp("question_panel_area").hide();
			}
			
			question_panel = Ext.getCmp("question_panel_area");
			Ext.Array.forEach(data.QuestionModuleArray, function(q, index, qSelf) {
									
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0];
				checked.uncheck();
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[1];
				checked.uncheck();
				
			});
		}
		
	},
	
	onExcellentPopup: function () {
		
		newData = this.product_obj.getData();
		
		if(parseInt(newData.QuickPassFlag) && parseInt(newData.QuickPassLive)) {
        	if(parseInt(newData.QuickPassStatusExcellent)) {
        		
        		Ext.getCmp("quick_pass_text").show();
        		Ext.getCmp("quick_pass_outer").show();
        		//Ext.getCmp("hidden_quick_pass").setValue(1);
        		
        		Ext.getCmp("submit_instant_btn").setHtml("Instant Quote = $" + newData.ExcellentPrice);
        		Ext.getCmp("submit_quick_pass_btn").setHtml("Quick Pay Quote = $" + newData.QuickPassStatusExcellentPrice);	
        		
        		if(parseInt(Ext.getCmp("hidden_quick_pass").getValue())) {
        		
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().QuickPassStatusExcellentPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Quick Pay Quote");
					Ext.getCmp("submit_order_btn").setIconCls("icon-glyph-bolt2");
					
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn");
				
				}else{
					
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().ExcellentPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Sell Now");
					Ext.getCmp("submit_order_btn").setIconCls("");
					
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
				}
        		
        	} else {
        		//Ext.getCmp("hidden_quick_pass").setValue(0);
        		Ext.getCmp("quick_pass_outer").hide();
        		Ext.getCmp("quick_pass_text").hide();
        		
        		Ext.getCmp("submit_order_btn").setHtml("Sell Now");
				Ext.getCmp("submit_order_btn").setIconCls("");
        		
        		Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
				Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        		
        		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
				Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().ExcellentPrice;
				Ext.Viewport.setMasked(false);
	        }
        }else{
        	//Ext.getCmp("hidden_quick_pass").setValue(0);
        	Ext.getCmp("quick_pass_outer").hide();
        	Ext.getCmp("quick_pass_text").hide();
        	
        	Ext.getCmp("submit_order_btn").setHtml("Sell Now");
			Ext.getCmp("submit_order_btn").setIconCls("");
        	
        	Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
			Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        	
        	Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().ExcellentPrice;
			Ext.Viewport.setMasked(false);
			
        }
		
		if(data && data != null && (data.QuestionModuleArray).length > 0) {
			if(data.QuestionModuleArray[0].ShowForExcellent == "1") {
				Ext.getCmp("question_panel_area").show();
			}else{
				Ext.getCmp("question_panel_area").hide();
			}
			
			question_panel = Ext.getCmp("question_panel_area");
			Ext.Array.forEach(data.QuestionModuleArray, function(q, index, qSelf) {
									
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0];
				checked.uncheck();
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[1];
				checked.uncheck();
				
			});
		}
		
	},
	
	onNewPopup: function () {
		
		newData = this.product_obj.getData();
		
		if(parseInt(newData.QuickPassFlag) && parseInt(newData.QuickPassLive)) {
        	if(parseInt(newData.QuickPassStatusNew)) {
        		
        		Ext.getCmp("quick_pass_text").show();
        		Ext.getCmp("quick_pass_outer").show();
        		//Ext.getCmp("hidden_quick_pass").setValue(1);
        		
        		Ext.getCmp("submit_instant_btn").setHtml("Instant Quote = $" + newData.NewPrice);
        		Ext.getCmp("submit_quick_pass_btn").setHtml("Quick Pay Quote = $" + newData.QuickPassStatusNewPrice);
        		
        		if(parseInt(Ext.getCmp("hidden_quick_pass").getValue())) {
        		
        			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().QuickPassStatusNewPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").setHtml("Quick Pay Quote");
					Ext.getCmp("submit_order_btn").setIconCls("icon-glyph-bolt2");
					
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn");
				
				}else{
					
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().NewPrice;
					Ext.Viewport.setMasked(false);
					
					Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
					Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
					
					Ext.getCmp("submit_order_btn").setHtml("Sell Now");
					Ext.getCmp("submit_order_btn").setIconCls("");
					
				}
					
        	} else {
        		//Ext.getCmp("hidden_quick_pass").setValue(0);
        		Ext.getCmp("quick_pass_outer").hide();
        		Ext.getCmp("quick_pass_text").hide();
        		
        		Ext.getCmp("submit_order_btn").setHtml("Sell Now");
				Ext.getCmp("submit_order_btn").setIconCls("");
				
				Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
				Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
        		
        		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
				Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().NewPrice;
				Ext.Viewport.setMasked(false);
	        }
        }else{
        	//Ext.getCmp("hidden_quick_pass").setValue(0);
        	Ext.getCmp("quick_pass_outer").hide();
        	Ext.getCmp("quick_pass_text").hide();
        	
        	Ext.getCmp("submit_order_btn").setHtml("Sell Now");
			Ext.getCmp("submit_order_btn").setIconCls("");
        	
        	Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = "$"+this.product_obj.getData().NewPrice;
			Ext.Viewport.setMasked(false);
        }
		
		if(data && data != null && (data.QuestionModuleArray).length > 0) {
			if(data.QuestionModuleArray[0].ShowForNew == "1") {
				Ext.getCmp("question_panel_area").show();
			}else{
				Ext.getCmp("question_panel_area").hide();
			}
			
			question_panel = Ext.getCmp("question_panel_area");
			Ext.Array.forEach(data.QuestionModuleArray, function(q, index, qSelf) {
									
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[0];
				checked.uncheck();
				checked = question_panel.query('radiofield[name="question_option_'+q.QuestionId+'"]')[1];
				checked.uncheck();
				
			});
			
		}
		
	},
	
	onGuestLoginSubmit: function(){
	
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		main_view = this.getMain();
		
		var email_address = this.getLoginregister().query('textfield')[7].getName();
		var email_address_value = this.getLoginregister().query('textfield')[7].getValue();
		var email_address1 = this.getLoginregister().query('textfield')[8].getName();
		var email_address_value1 = this.getLoginregister().query('textfield')[8].getValue();
		
		if((Ext.util.Format.trim(email_address_value1) == "" || 
			Ext.util.Format.trim(email_address_value) == "") || 
			(Ext.util.Format.trim(email_address_value1) != Ext.util.Format.trim(email_address_value))) {
			
			Ext.Msg.show({
				title: 'Alert',
				message: 'Please check emails you entered!',
				buttons: Ext.MessageBox.OK,
				modal: false,
				autoDestroy: true,
				fn: function(buttonId) {
					
				}
			});
			Ext.Viewport.setMasked(false);
			return;
		}
		
		u = mob.model.User;
		u.getProxy().setExtraParams(
		{ 
			check: 'guest',
			email: email_address_value,
			is_guest: 1
		});
		u.load(1, {
            scope: this,
            success: function (record, operation) {
				
				if(operation.getResponse().responseText == "\"existing\"")
				{
					Ext.Viewport.setMasked(false);
					Ext.Msg.show({
						title: 'Alert',
						message: 'You already have an activated account, please use your credentials to login.',
						buttons: Ext.MessageBox.OK,
						modal: false,
						autoDestroy: true,
						fn: function(buttonId) {}
					});
					return;
				}
				
				Ext.Viewport.setMasked(false);
				
				var bbwStore = Ext.getStore('SettingsStoreBBW');
            	bbwStore.setCookie("user", record.data);
        		
            	var bbwStore = Ext.getStore('SettingsStoreBBW');
		        user = bbwStore.getCookie("user");
				
				window.location.hash='payment/';
			},
				
            failure: function (record, operation) {
				
				Ext.Viewport.setMasked(false);
				
				Ext.Msg.show({
					title: 'Alert',
					message: 'Please select different email!',
					buttons: Ext.MessageBox.OK,
					modal: false,
					autoDestroy: true,
					fn: function(buttonId) {}
				});
            	
			},	
			
            callback: function(record, operation) {
				
            	Ext.Viewport.setMasked(false);
            	
		    }
        });
		
	},
	
	onLoginSubmit: function(){
		
		newButton = this.getNewAddressButton();
		main_view = this.getMain();
		var name1 = this.getLoginregister().query('textfield')[0].getName();
		var value1 = this.getLoginregister().query('textfield')[0].getValue();
		
		var name2 = this.getLoginregister().query('textfield')[1].getName();
		var value2 = this.getLoginregister().query('textfield')[1].getValue();
		
		//
		if(value1 == "" || value2 == "") {
			
			Ext.Msg.show({
				title: 'Alert',
				message: 'Please fill all textboxes!',
				buttons: Ext.MessageBox.OK,
				modal: false,
				autoDestroy: true,
				fn: function(buttonId) {
				
				}
			});
			
			//Ext.Msg.alert('Please fill all textboxes!');
			//Ext.Msg.alert({title: 'Alert', message: 'Please fill all textboxes!', modal: false});
			return;
		}
		
		//Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		//Ext.Viewport.mask({ xtype: 'loadmask' });
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		store_box_items = Ext.getStore('ItemInBoxStore');
		store_box_items.load({
			callback: function(records_temp, operation_temp, success_temp) {
				
				Ext.Viewport.setMasked(false);
				
				if(success_temp){
					
					u = mob.model.User;
					u.getProxy().setExtraParams(
					{ 
						check: 'login',
						email: value1,
						password: value2
					});
					u.load(0, {
			            scope: this,
			            success: function (record, operation) {
			            	
			            	var bbwStore = Ext.getStore('SettingsStoreBBW');
			            	bbwStore.setCookie("user", record.data);
							//Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
							
							window.location.hash='payment/';
							
							/*
							var store = Ext.getStore('ClientAddressStore');
							store.getProxy().setExtraParams(
							{ 
								user_id : record.data.Id
							});
							store.load({
								callback: function(records, operation, success) {
									
									Ext.getCmp("breadcrambs").setHtml('Payment Preference');
									if(this.paymentprocess == undefined)
									{
										this.paymentprocess = Ext.create('mob.view.tablet.PaymentProcess');
									}
									
									newButton.show();
									
									var hfield = Ext.create('Ext.field.Hidden',{ 
										config:{
											itemId: 'breadcramb_field',
						                    value: "Payment Preference"
										}
									});
									//this.paymentprocess.add(hfield);
									Ext.Viewport.setMasked(false);
									main_view.push(this.paymentprocess);
								},
								scope: this
							});
							*/
							
						},
			            failure: function (record, operation) {
			            	
			            	Ext.Viewport.setMasked(false);
			            	
			            	Ext.Msg.show({
								title: 'Alert',
								message: 'Please check login details!',
								buttons: Ext.MessageBox.OK,
								modal: false,
								autoDestroy: true,
								fn: function(buttonId) {}
							});
			            	
			            	//Ext.Msg.alert('Alert', 'Please check login details!', function(){
			            	//	Ext.Viewport.setMasked(false);	
			            	//});//Ext.emptyFn
						},
			            callback: function(record, operation) {}
			        });
					
				}else{
					
					u = mob.model.User;
					u.getProxy().setExtraParams(
					{ 
						check: 'login',
						email: value1,
						password: value2
					});
					u.load(0, {
			            scope: this,
			            success: function (record, operation) {
			            	
			            	//Ext.Viewport.setMasked(false);
			            	
			            	var bbwStore = Ext.getStore('SettingsStoreBBW');
			            	bbwStore.setCookie("user", record.data);
			            	
							//Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
							
							window.location.hash='trades/';
							
							//items_in_box_count
							/*
							var store = Ext.getStore('TradesStore');
							store.getProxy().setExtraParams(
							{
								//get values from phonegap
								user_id : record.data.Id,
								orders: 'not_completed'
								
							});
							store.load({
							    callback: function(records, operation, success) {
									if(success){
										this.clientaccount = Ext.create('mob.view.tablet.ClientAccount');
										main_view.push(this.clientaccount);
										Ext.Viewport.setMasked(false);
									}
							    },
							    scope: this
							});
							*/
						},
			            failure: function (record, operation) {
			            	
			            	Ext.Viewport.setMasked(false);
			            	
			            	Ext.Msg.show({
								title: 'Alert',
								message: 'Please check login details!',
								buttons: Ext.MessageBox.OK,
								modal: false,
								autoDestroy: true,
								fn: function(buttonId) {}
							});
							
						},
			            callback: function(record, operation) {}
			        });
				}	
			},
			scope: this
		});
	},
	
	onRegisterSubmit: function(){
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		main_view = this.getMain();
		
		var email_address = this.getLoginregister().query('textfield')[2].getName();
		var email_address_value = this.getLoginregister().query('textfield')[2].getValue();
		
		var confirm_address = this.getLoginregister().query('textfield')[3].getName();
		var confirm_address_value = this.getLoginregister().query('textfield')[3].getValue();
		
		var user_password = this.getLoginregister().query('textfield')[4].getName();
		var user_password_value = this.getLoginregister().query('textfield')[4].getValue();
		
		var first_name = this.getLoginregister().query('textfield')[5].getName();
		var first_name_value = this.getLoginregister().query('textfield')[5].getValue();
		
		var last_name = this.getLoginregister().query('textfield')[6].getName();
		var last_name_value = this.getLoginregister().query('textfield')[6].getValue();
		
		if(email_address_value == '' ||
			confirm_address_value == '' || 
			user_password_value == '' ||
			first_name_value == '' || 
			last_name_value == '')
		{
			Ext.Viewport.setMasked(false);
			
			Ext.Msg.show({
				title: 'Alert',
				message: 'Please fill all tet boxes!',
				buttons: Ext.MessageBox.OK,
				modal: false,
				autoDestroy: true,
				fn: function(buttonId) {}
			});
			
			return;
		}
		
		if(email_address_value != confirm_address_value)
		{
			Ext.Viewport.setMasked(false);
			
			Ext.Msg.show({
				title: 'Alert',
				message: 'Please check email!',
				buttons: Ext.MessageBox.OK,
				modal: false,
				autoDestroy: true,
				fn: function(buttonId) {}
			});
			
			return;
		}
		
		u = mob.model.User;
		u.getProxy().setExtraParams(
		{ 
			//get values from phonegap
			check: 'regster',
			email: email_address_value,
			password: user_password_value,
			first_name: first_name_value,
			last_name: last_name_value,
			is_guest: 0
		});
		u.load(1, {
            scope: this,
            success: function (record, operation) {
				
				var bbwStore = Ext.getStore('SettingsStoreBBW');
            	bbwStore.setCookie("user", record.data);
        		
            	var bbwStore = Ext.getStore('SettingsStoreBBW');
		        user = bbwStore.getCookie("user");
				
				window.location.hash='payment/';
				//window.location.hash='trades/';
				
				/*
				var store = Ext.getStore('TradesStore');
				store.getProxy().setExtraParams(
				{ 
					user_id : user.Id,
					orders: 'not_completed'
				});
				store.load({
				    callback: function(records, operation, success) {
				    	
						if(success){
							Ext.getCmp("breadcrambs").setHtml("Account");
							clientaccount = Ext.create('mob.view.tablet.ClientAccount');
							main_view.push(clientaccount);
							Ext.Viewport.setMasked(false);
						}else{
							Ext.getCmp("breadcrambs").setHtml("Account");
							clientaccount = Ext.create('mob.view.tablet.ClientAccount');
							main_view.push(clientaccount);
							Ext.Viewport.setMasked(false);
						}
				    },
				    scope: this
				});
				*/
				//this.getShowButton().show();
            	
			},
				
            failure: function (record, operation) {
				
				Ext.Viewport.setMasked(false);
				
				Ext.Msg.show({
					title: 'Alert',
					message: 'Please select different email!',
					buttons: Ext.MessageBox.OK,
					modal: false,
					autoDestroy: true,
					fn: function(buttonId) {}
				});
            	
			},	
			
            callback: function(record, operation) {
				
            	Ext.Viewport.setMasked(false);
            	
            	//var bbwStore = Ext.getStore('SettingsStoreBBW');
            	//bbwStore.setCookie("user", record.data);
            	//var bbwStore = Ext.getStore('SettingsStoreBBW');
		        //user = bbwStore.getCookie("user");
				//window.location.hash='trades/';
            	
		    }
        });
		
		//return;
		
	},	
	
	onActiveItemChange: function(obj, value, oldValue, eOpts)
	{
		var id = value.getItemId();
		var showButton = this.getShowButton();
		if(id == 'clientaccounttrades')
		{
	        //showButton.show();
		}else{
	        //showButton.hide();
		}
		if(id == 'clientaccountaddresses')
		{
			this.getNewAddressButton().show();
		}else{
			this.getNewAddressButton().hide();
		} 
		
	},
	
	onAboutUsInit: function(obj, e){
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			params: {
				action: "our_goals",
				time: Math.random()
			},
			success: function(response) {
				
				obj.down("#our_goals").setHtml(response.responseText);
				
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},	
			callback: function(response) {
				
				Ext.Viewport.setMasked(false);
				
			}
		})
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			params: {
				action: "our_team",
				time: Math.random()
			},
			success: function(response) {
				
				obj.down("#our_team").setHtml(response.responseText);
				
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},	
			callback: function(response) {
				
			}
		})
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,
			params: {
				action: "about_us"
			},
			success: function(response) {
				obj.down("#about_us_id").setHtml(response.responseText);
			},
			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},	
			callback: function(response) {
			}
		})
	},
	
	onAboutUsChange: function(obj, value, oldValue, eOpts)
	{
		/*
		flag_team = false;
		flag_goal = false;
		flag_our = true;
		var id = value.getItemId();
		
		var id = value.getItemId();
		var showButton = this.getShowButton();
		if(id == 'our_goals_tab' && !flag_goal)
		{
			flag_goal = true;
			
			Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'GET',
				params: {
					action: "our_goals",
					time: Math.random()
				},
				success: function(response) {
					
					obj.down("#our_goals").setHtml(response.responseText);
					
				},
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},	
				callback: function(response) {
					
					Ext.Viewport.setMasked(false);
					
				}
			})
			
		}else if(id == 'our_team_tab' && !flag_team)
		{
			flag_team = true;
			
			Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading...'});
		        Ext.Ajax.request({
					url: '/app/json_adapter.php',
					method: 'GET',
					params: {
						action: "our_team",
						time: Math.random()
					},
					success: function(response) {
						
						obj.down("#our_team").setHtml(response.responseText);
						
					},
					failure: function(response) {
						Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					},	
					callback: function(response) {
						
						Ext.Viewport.setMasked(false);
						
					}
				})
			
		}else if(id == 'our_story_tab' && !flag_our)
		{
			flag_our = true;
			
			Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'POST',
				disableCaching: true,
				params: {
					action: "about_us"
				},
				success: function(response) {
					obj.down("#about_us_id").setHtml(response.responseText);
				},
				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},	
				callback: function(response) {
					Ext.Viewport.setMasked(false);
				}
			})
			
		}
		
		*/
	},
	
	onChangePaymentProcess: function(obj, value, oldValue, eOpts){
		
		var id = value.getItemId();
		var newButton = this.getNewAddressButton();
		if(id == 'payment_process')
		{
	        newButton.show();
		}else{
	        newButton.hide();
		}
	},
	
	onNextButtonClick: function() {
	
	},
	
	onTermCondition: function(){
		
		if(this.termsservices == undefined)
		{
			this.termsservices = Ext.create('mob.view.TermsServices');
		}
		if (!this.termsservices.getParent()) {
            this.getMain().add(this.termsservices);
        }
		this.termsservices.show();
	},
	
	onConfirmSubmitOrder: function(obj){
		
		terms_condition = this.getTerms_condition();
		box_items = this.getBox_items();
		terms = this.getTermscheckbox();
		
		select_value = this.getConfirmmethod().down("#selectsource").getValue();
		
		if(!terms.getChecked())
		{
			Ext.Msg.alert('ALERT', 'You must agree to service terms!', Ext.emptyFn);
			return;
		}
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
	
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
			url: '../mobile_confirm.php',
			method: 'POST',
			disableCaching: true,
			timeout: 999999999,
			
			params: {
				submit_order: 1,
				mobile: 1,
				user_id: user.Id,
				source: select_value,
				is_guest: user.IsGuest
			},
			
			success: function(response) {
				
				window.location.hash='thank-you/';
				
			},

			failure: function(response) {
				
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				Ext.Viewport.setMasked(false);
			},	
				
			callback: function(response) {
				box_items.hide();
			}
		});	
	},
	
	onThankYouPage: function(){
	
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
	
		var store = Ext.getStore('TradesStore');
		store.getProxy().setExtraParams(
		{ 
			//get values from server
			user_id : user.Id,
			is_guest: user.IsGuest,
			orders: 'not_completed'
		});
		store.load({
		    callback: function(records, operation, success) {
				if(success){
					
					Ext.getCmp("breadcrambs").setHtml("Thank You!");
					
					if(this.thankyou == undefined)
					{
						this.thankyou = Ext.create('mob.view.tablet.ThankYou');
					}
					this.thankyou.add({
	                    xtype: 'hiddenfield',
	                    itemId: 'breadcramb_field',
	                    value: "Thank You!"
	                });
					
					//ga('set', 'page', '/thank-you');
					ga('send', 'pageview', {
								  page: '/app/#thank-you',
								  title: 'Thank You'
								});
					//
					
					this.thankyou.setData(records[0]);
					main_view.push(this.thankyou);
					Ext.Viewport.setMasked(false);
					
				}else{
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
					Ext.Viewport.setMasked(false);
				}
		    },
		    scope: this
		});
	
	},
	
	onBoxItemsButton: function(obj){
		
		var main_view = this.getMain();
		var itemsinbox = this.getItemsinbox();
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		store = Ext.getStore('ItemInBoxStore');
		store.load({
			callback: function(records, operation, success) {
				if(success){
					if(itemsinbox == undefined) {
						itemsinbox = Ext.create('mob.view.tablet.ItemsInBox');
					}
					
					if (!itemsinbox.getParent()) {
			            main_view.add(itemsinbox);
			        }
			        itemsinbox.show();
			        
			        itemsinbox.updateData(records);
			        
					Ext.Viewport.setMasked(false);
				}else {
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert('Alert', 'Sorry, your box is empty!', Ext.emptyFn);
				}
			},
			scope: this
		});
		
	},
	
	onBoxItemListID: function(list,index,target,record,e){
	
		items = this.getBox_items();
		var node = e.target;
		id = 0;
		if (node.className && node.className.indexOf('x-buttons-delete') > -1) {
			id = record.raw.Id;
		}else if (node.className && node.className.indexOf('x-button-label') > -1) {
			id = record.raw.Id;
		}
		
		if(id == 0)
		{
			return;
		}
		
		Ext.Msg.confirm("Delete ?", "", 
			function(answer){ 
				if(answer=='yes') 
				{ 
					//this.myDeleteFct(this.getMyForm()); 
					
					var itemsinbox = this.getItemsinbox();
					var main_view = this.getMain();
					
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					
					Ext.Ajax.request({
						url: '/app/json_adapter.php',
						method: 'GET',
						disableCaching: true,

						params: {
							action: "delete_box_item",
							item_id: id
						},

						success: function(response) {
							
							store = Ext.getStore('ItemInBoxStore');
							store.load({
								callback: function(records, operation, success) {
									if(success){
										Ext.Viewport.setMasked(false);
									}else {
										items.hide();
										Ext.Viewport.setMasked(false);
										Ext.Msg.alert('Alert', 'Sorry, your box is empty!', Ext.emptyFn);
									}
								},
								scope: this
							});
							
						},

						failure: function(response) {
							items.hide();
							Ext.Msg.alert('Alert', 'Sorry, your box is empty!', Ext.emptyFn);
						},
							
						callback: function(response) {
							itemsinbox.hide();
							Ext.Viewport.setMasked(false);
						}
					});	
					
				}
			}, this);
	},
	
	onTradeDetailsAccountID: function(list,index,target,record,e){
		
		this.getNewAddressButton().hide();
		var node = e.target;
		id = 0;
		if (node.className && node.className.indexOf('x-buttons-delete') > -1) {
			id = record.raw.OrderDetails.Id;
		}else if (node.className && node.className.indexOf('x-button-label') > -1) {
			id = record.raw.OrderDetails.Id;
		}
		
		if(id == 0)
		{
			return;
		}
		
		Ext.Msg.confirm("Delete ?", "", 
			function(answer){ 
				if(answer=='yes') 
				{
					var tradeDetailsAccountId = this.getTradeDetailsAccountId();
					var main_view = this.getMain();
					
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					
					Ext.Ajax.request({
							url: '/app/json_adapter.php',
							method: 'GET',
							disableCaching: true,

							params: {
								action: "cancel_box_item",
								item_id: id
							},

							success: function(response) {
								
								store = Ext.getStore('TradeDetailStore');
								store.load({
									callback: function(records, operation, success) {
										if(success){
											//Ext.Viewport.setMasked(false);
										}else {
											//Ext.Viewport.setMasked(false);
											Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
										}
									},
									scope: this
								});
								
							},

							failure: function(response) {
								Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
							},
								
							callback: function(response) {
								Ext.Viewport.setMasked(false);
							}
						});
				
				}}, this);
		
	},
	
	onMyAccountTap: function(obj, e){
		
		
		if(obj.getIconCls() == 'icon-list')
		{
			if(this.topaccountlinks == undefined)
			{
				this.topaccountlinks = Ext.create('mob.view.tablet.TopAccountLinks');
			}else{
				this.topaccountlinks = undefined;
				this.topaccountlinks = Ext.create('mob.view.tablet.TopAccountLinks');
			}
			
			obj.setIconCls("icon-cross"); 
			this.getMain().add(this.topaccountlinks);//icon-cross//icon-list
			this.topaccountlinks.show();
			
		}else if(obj.getIconCls() == 'icon-cross')
		{	
			/*if(this.getTop_account_category()) {
				this.getTop_account_category().hide();
				this.getTop_account_category().destroy();
				this.getMain().remove(this.topaccountlinks)
			}
			
			if(this.getTop_account_brand()) { Cannot read property 'getScroller' of undefined
				this.getTop_account_brand().hide();
				this.getTop_account_brand().destroy();
			}
			
			if(this.getTop_account_property()) {
				this.getTop_account_property().hide();
				this.getTop_account_property().destroy();
			}*/
			
			
			/*console.log(this.getTopaccountlinks());
			console.log(this.getTopaccountlinkscategory());
			console.log(this.getTopaccountlinksbrand());
			console.log(this.getTopaccountlinksproperty());*/
			
			
			if(this.getTopaccountlinks() != undefined) {
				this.getTopaccountlinks().hide();
				this.getMain().remove(this.getTopaccountlinks(), true);
				//console.log("close getTopaccountlinks");
			}
			if(this.getTopaccountlinkscategory() != undefined) {
				this.getTopaccountlinkscategory().hide();
				this.getMain().remove(this.getTopaccountlinkscategory(), true);
				//console.log("close getTopaccountlinkscategory");
			}
			if(this.getTopaccountlinksbrand() != undefined) {
				this.getTopaccountlinksbrand().hide();
				this.getMain().remove(this.getTopaccountlinksbrand(), true);
				//console.log("close getTopaccountlinksbrand");
			}
			if(this.getTopaccountlinksproperty() != undefined) {
				this.getTopaccountlinksproperty().hide();
				this.getMain().remove(this.getTopaccountlinksproperty(), true);
				//console.log("close getTopaccountlinksproperty");
			}
			
			//this.topaccountlinks.refresh();
			//this.topaccountlinks.hide();
			//this.getMain().remove();
			
			obj.setIconCls("icon-list"); 
			
			//console.log(this.getMain().getActiveItem());
			
		}
		
		return;
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		//this.getShowButton().show();
		terms_condition = this.getTerms_condition();
		box_items = this.getBox_items();
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		clientaccount = this.getClientaccount();
		
		if(user != undefined)
		{
			var store = Ext.getStore('TradesStore');
			store.getProxy().setExtraParams(
			{ 
				//get values from phonegap
				user_id : user.Id,
				orders: 'not_completed',
				is_guest: user.IsGuest
				
			});
			store.load({
			    callback: function(records, operation, success) {
			    	if(success){
			    	
			    		Ext.getCmp("breadcrambs").setHtml("Account");
			    		
						//terms_condition.hide();
						//box_items.hide();
						//
						if(clientaccount == undefined)
						{
							clientaccount = Ext.create('mob.view.tablet.ClientAccount');
						}
						
						//add hidden field
						
						/*
						clientaccount.add({
		                    xtype: 'hiddenfield',
		                    itemId: 'breadcramb_field',
		                    value: "Account"
		                });
						*/
						
						main_view.push(clientaccount);
						clientaccount.query('[name="user_email"]')[0].setValue(user.Email);
						clientaccount.query('[name="user_first"]')[0].setValue(user.FirstName);
						clientaccount.query('[name="user_second"]')[0].setValue(user.LastName);
					}else{
						//terms_condition.hide();
						//box_items.hide();
						//
						if(clientaccount == undefined)
						{
							clientaccount = Ext.create('mob.view.tablet.ClientAccount');
						}
						
						main_view.push(clientaccount);
						clientaccount.query('[name="user_email"]')[0].setValue(user.Email);
						clientaccount.query('[name="user_first"]')[0].setValue(user.FirstName);
						clientaccount.query('[name="user_second"]')[0].setValue(user.LastName);
				
					}
					Ext.Viewport.setMasked(false);
					//this.getMy_acccount().hide();
			    },
			    scope: this
			});
			
		}else{
			
			Ext.getCmp("breadcrambs").setHtml("Login/Register/Checkout as Guest");
			
			if(this.loginregister == undefined)
			{
				this.loginregister = Ext.create('mob.view.LoginRegister');
			}
			main_view.push(this.loginregister);
			Ext.Viewport.setMasked(false);
			//this.getShowButton().hide();
		}
	},
	
	onResendShippingKit: function(){
		
		items = this.getClientaccounttradedetails().getStore().data.all;
		if(items.length == 0)
		{
			return;
		}
		boxid = items[0].raw.boxId;
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		Ext.Ajax.request({
				url: '../mobile_confirm.php',
				method: 'GET',
				disableCaching: true,
				timeout: 9999999,

				params: {
					action: 'resend_box',
					box_id: boxid,
					user_id: user.Id
				},
				
				success: function(response) {
					Ext.Msg.alert('Alert', 'Shipping kit has been resent!', Ext.emptyFn);
				},

				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},
					
				callback: function(response) {
					
					Ext.Viewport.setMasked(false);
					
			        
			        
				}
			});	
	
	
	},
	
	onChangePassword: function(){
		
		var old_password_value = this.getClientaccountpassword().query('textfield')[3].getValue();
		var new_password_value = this.getClientaccountpassword().query('textfield')[4].getValue();
		var confirm_password_value = this.getClientaccountpassword().query('textfield')[5].getValue();
		
		if(old_password_value != "" && 
			new_password_value != "" &&
			confirm_password_value != "")
		{
			var bbwStore = Ext.getStore('SettingsStoreBBW');
        	user = bbwStore.getCookie("user");
			
			if(user.UserPassword == old_password_value)
			{
				if(new_password_value == confirm_password_value)
				{
					Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
					
					//set user password
					Ext.Ajax.request({
						url: '/app/json_adapter.php',
						method: 'GET',
						disableCaching: true,
						timeout: 9999999,

						params: {
							action: 'update_password',
							new_password: new_password_value,
							user_id: user.Id
						},
						
						success: function(response) {
							
							var bbwStore = Ext.getStore('SettingsStoreBBW');
            				user.UserPassword = new_password_value;
            				bbwStore.setCookie("user", user);
							
							Ext.Msg.alert('Alert', 'Your password has been updated!', Ext.emptyFn);
						},

						failure: function(response) {
							Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
						},
							
						callback: function(response) {
							Ext.Viewport.setMasked(false);
						}
					});	
					
				}else{
					Ext.Msg.alert('Alert', 'Please check passwords!', Ext.emptyFn);
				}
			}else{
				Ext.Msg.alert('Alert', 'Sorry, wrong old password!', Ext.emptyFn);	
			}
			
		}else{
			Ext.Msg.alert('Alert', 'Please fill all text boxes!', Ext.emptyFn);	
		}
	},
	
	onChangeUserDetails: function(){
	
		email = this.getClientaccountpassword().query('[name="user_email"]')[0].getValue();
		first = this.getClientaccountpassword().query('[name="user_first"]')[0].getValue();
		last = this.getClientaccountpassword().query('[name="user_second"]')[0].getValue();
		
		var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	email_valid = check.test(email);
		if(!email_valid)
		{
			Ext.Msg.alert('Alert', 'Please enter correct email!', Ext.emptyFn);
			return;
		}
		
		if(first == '' && last == '' && email == '')
		{
			Ext.Msg.alert('Alert', 'Please fill all text boxes!', Ext.emptyFn);
		}else{
			Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
			
			var bbwStore = Ext.getStore('SettingsStoreBBW');
        	user = bbwStore.getCookie("user");
			
			Ext.Ajax.request({
				url: '/app/json_adapter.php',
				method: 'GET',
				disableCaching: true,
				timeout: 9999999,

				params: {
					action: 'update_user_data',
					email: email,
					user_id: user.Id,
					first: first,
					last: last
				},
				
				success: function(response) {
					
					var bbwStore = Ext.getStore('SettingsStoreBBW');
    				user.FirstName = first;
    				user.LastName = last;
    				user.Email = email;
    				bbwStore.setCookie("user", user);
					
					Ext.Msg.alert('Alert', 'Your details have been updated!', Ext.emptyFn);
				},

				failure: function(response) {
					Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
				},
					
				callback: function(response) {
					Ext.Viewport.setMasked(false);
				}
			});
		}
	},
	
	onEditClientAddressTap: function(list,index,target,record,e){
	
		this.getNewAddressButton().hide();
		var main_view = this.getMain();
		var node = e.target;
		id = 0;
		if (node.className && node.className.indexOf('x-buttons-edit') > -1) {
			id = record.raw.ID;
		}else if (node.className && node.className.indexOf('x-button-label') > -1) {
			id = record.raw.ID;
		}
		
		if(id == 0)
		{
			return;
		}
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
		Ext.getCmp("breadcrambs").setHtml("Edit Address");
		
		flag = false;
		if(this.editclientaddress == undefined)
		{
			this.editclientaddress = Ext.create('mob.view.tablet.ClientAddressEdit');
		}else{
			flag = true;
		}
		
		//add hidden field
		this.editclientaddress.add({
                    xtype: 'hiddenfield',
                    itemId: 'breadcramb_field',
                    value: "Edit Address"
                });
		
		this.editclientaddress.query('hiddenfield[name="address_id"]')[0].setValue(record.raw.ID);
		this.editclientaddress.query('textfield[name="edit_address_name"]')[0].setValue(record.raw.Name);
		this.editclientaddress.query('textfield[name="edit_address1"]')[0].setValue(record.raw.Address1);
		this.editclientaddress.query('textfield[name="edit_address2"]')[0].setValue(record.raw.Address2);
		this.editclientaddress.query('textfield[name="edit_city"]')[0].setValue(record.raw.City);
		this.editclientaddress.query('selectfield[name="edit_state"]')[0].setValue(record.raw.State);
		this.editclientaddress.query('textfield[name="edit_zip"]')[0].setValue(record.raw.Zipcode);
		this.editclientaddress.query('togglefield[name="edit_primary"]')[0].setValue(record.raw.Primary);
		
		if(!flag)
		{
			main_view.push(this.editclientaddress);
		}else{
			main_view.pop(this.editclientaddress);
		}
		
		Ext.Viewport.setMasked(false);
		
	},
	
	onEditSubmitAddress: function(obj){
	
		var values = Ext.getCmp("edit_address_id").getValues();
		
		if(values["edit_address1"] == "" && 
			values["edit_address_name"] == "" && 
			values["edit_city"] == "" && 
			values["edit_state"] == "" && 
			values["edit_zip"] == "")
		{
			Ext.Msg.alert('Alert', 'Please fill all text boxes!', Ext.emptyFn);
		}else{
			var bbwStore = Ext.getStore('SettingsStoreBBW');
        	user = bbwStore.getCookie("user");
        	
        	form = Ext.getCmp("edit_address_id");
        	
			form.submit({ url: '/app/json_adapter.php?action=update_address&user_id='+user.Id, 
							method: 'Post', 
							success: function() { 
								//reload store
								
								var bbwStore = Ext.getStore('SettingsStoreBBW');
			        			user = bbwStore.getCookie("user");
								store = store = Ext.getStore('ClientAddressStore');
								store.getProxy().setExtraParams(
								{ 
									//get values from phonegap
									user_id : user.Id,
									is_guest: user.IsGuest
								});
								store.load();
								
								//
								Ext.Msg.alert("Address has been updated"); 
							}, 
							failure: function() { 
								//Ext.Msg.alert("error"); 
							} 
						});
		}
	},
	
	onPromoCodeTap: function()
	{	
		
	},
	
	QuickPassOption: function() {
		
		//addCls
		//removeCls
		
		quick_pass_price = Ext.getCmp("submit_quick_pass_btn").getHtml();
		quick_price_number = quick_pass_price.split(" = ")[1];
		Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = quick_price_number;
		
		//console.log("pass");
		
		Ext.getCmp("hidden_quick_pass").setValue(1);
		//submit_order_btn_passive
		
		Ext.getCmp("submit_instant_btn").removeCls("outline_button_top");
		Ext.getCmp("submit_instant_btn").addCls("outline_button_top_default");
		//submit_quick_pass_btn 
		Ext.getCmp("submit_quick_pass_btn").removeCls("outline_button_top_default");
		Ext.getCmp("submit_quick_pass_btn").addCls("outline_button_top");
		
		//Ext.getCmp("submit_instant_btn").addCls("submit_order_btn_passive");
		//Ext.getCmp("submit_quick_pass_btn").removeCls("submit_order_btn_passive");
		
		Ext.getCmp("submit_order_btn").addCls("submit_order_btn_top");
		Ext.getCmp("submit_order_btn").removeCls("submit_order_btn");
		Ext.getCmp("submit_order_btn").setHtml("Quick Pay");
		Ext.getCmp("submit_order_btn").setIconCls("icon-glyph-bolt2");
		
		//console.log(Ext.getCmp("hidden_quick_pass").getValue());
		//console.log(Ext.getCmp("hidden_quick_pass").getValue());
		
	},
		
	InstantPassOption: function() {
		
		instant_pass = Ext.getCmp("submit_instant_btn").getHtml();
		instant_pass_number = instant_pass.split(" = ")[1];
		Ext.DomQuery.select('div[id="price_value"]')[0].innerHTML = instant_pass_number;
		
		//console.log("instant");
		
		Ext.getCmp("hidden_quick_pass").setValue(0);
		//
		//Ext.getCmp("submit_instant_btn").addCls("submit_order_btn_top");
		//Ext.getCmp("submit_quick_pass_btn").removeCls("submit_order_btn_top");
		
		//Ext.getCmp("submit_instant_btn").removeCls("submit_order_btn_passive");
		//Ext.getCmp("submit_quick_pass_btn").addCls("submit_order_btn_passive");
		
		Ext.getCmp("submit_instant_btn").removeCls("outline_button_top_default");
		Ext.getCmp("submit_instant_btn").addCls("outline_button_top");
		
		Ext.getCmp("submit_quick_pass_btn").removeCls("outline_button_top");
		Ext.getCmp("submit_quick_pass_btn").addCls("outline_button_top_default");
		
		Ext.getCmp("submit_order_btn").removeCls("submit_order_btn_top");
		Ext.getCmp("submit_order_btn").addCls("submit_order_btn");
		Ext.getCmp("submit_order_btn").setHtml("Sell Now");
		Ext.getCmp("submit_order_btn").setIconCls("");
		
		//console.log(Ext.getCmp("hidden_quick_pass").getValue());
		
	},
		
	VerifyUserShipAddress: function(){
		
		var verify_ship_first_name = this.getShippinginfoaddress().query('textfield[name="first_name_ship_guest"]')[0].getValue();
		var verify_ship_last_name = this.getShippinginfoaddress().query('textfield[name="last_name_ship_guest"]')[0].getValue();
		var verify_ship_address1 = this.getShippinginfoaddress().query('textfield[name="verify_ship_address1"]')[0].getValue();
		var verify_ship_address2 = this.getShippinginfoaddress().query('textfield[name="verify_ship_address2"]')[0].getValue();
		var verify_ship_city = this.getShippinginfoaddress().query('textfield[name="verify_ship_city"]')[0].getValue();
		var verify_ship_state = this.getShippinginfoaddress().query('textfield[name="verify_ship_state"]')[0].getValue();
		var verify_ship_zip = this.getShippinginfoaddress().query('textfield[name="verify_ship_zip"]')[0].getValue();
		var verify_phone_number = this.getShippinginfoaddress().query('textfield[name="verify_phone_number"]')[0].getValue();
		
		if(verify_ship_address1 == '' || verify_ship_city == '' || verify_ship_zip == '') {
			
			Ext.Msg.alert('Alert', 'Please enter all necessary fields', Ext.emptyFn);
			return;
		}
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
        
        terms_condition = this.getTerms_condition();
		this.getNewAddressButton().hide();
		confirmmethod = this.getConfirmmethod();
		
		Ext.Viewport.setMasked(true);
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,
			timeout: 9999999,
			
			params: {
				action: 'verify_ship_address_data',
				verify_ship_address1: verify_ship_address1,
				verify_ship_address2: verify_ship_address2,
				verify_ship_city: verify_ship_city,
				verify_ship_state: verify_ship_state,
				verify_ship_zip: verify_ship_zip,
				verify_ship_first_name: verify_ship_first_name,
				verify_ship_last_name: verify_ship_last_name,
				verify_phone_number: verify_phone_number,
				user_id: user.Id
			},
			
			success: function(response) {
				
				if(response.responseText == "false") {
					Ext.Msg.alert('Alert', 'Your address could not be verified, please adjust it accordingly!', Ext.emptyFn);
				}
				if(response.responseText == "incorrect") {
					Ext.Msg.alert('Alert', 'It seems your address is incomplete. Double-check everything is correct.', Ext.emptyFn);
				}
				if(response.responseText == "many") {
					
					var store = Ext.getStore('ClientAddressStoreVerified');
					store.getProxy().setExtraParams(
					{ 
						user_id : user.Id,
						is_guest: user.IsGuest
					});
					store.load({
						callback: function(records, operation, success) {
							
							if(this.shippinginfoaddressnotequal != undefined)
							{
								this.shippinginfoaddressnotequal.destroy();
							}
							this.shippinginfoaddressnotequal = Ext.create('mob.view.tablet.ShippingInfoAddressNotEqual');

							main_view.push(this.shippinginfoaddressnotequal);
							
						},	
						scope: this
					});
				}
				if(response.responseText == "single") {
					
					u = mob.model.User;
					u.getProxy().setExtraParams(
					{ 
						//get values from phonegap
						get: 'user',
						user_id: user.Id,
						is_guest: user.IsGuest
					});
					u.load(0, {
						scope: this,
						success: function (record, operation) {
							var bbwStore = Ext.getStore('SettingsStoreBBW');
							bbwStore.setCookie("user", record.data);
							
							Ext.getCmp("breadcrambs").setHtml("Confirmation");
							
							//confirmmethod
							if(this.confirmmethod == undefined)
							{
								this.confirmmethod = Ext.create('mob.view.tablet.Confirm');
							}
							
							var hfield = Ext.create('Ext.field.Hidden', {
								itemId: 'breadcramb_field',
								value: "Confirmation"
							});
							
							this.confirmmethod.add(hfield);
							
							this.confirmmethod.setData(record.data);
							
							main_view.push(this.confirmmethod);
							terms_condition.show();
						}
					});
					
				}
			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
				
			callback: function(response) {
				Ext.Viewport.setMasked(false);
			}
		});
		
	},
		
	VerifyUserAddress: function() {
		
		var main_view = this.getMain();
		var bbwStore = Ext.getStore('SettingsStoreBBW');
        user = bbwStore.getCookie("user");
		
		var verify_fist_name = this.getPaymentprocesscheckaddress().query('textfield[name="first_name_guest"]')[0].getValue();
		var verify_last_name = this.getPaymentprocesscheckaddress().query('textfield[name="last_name_guest"]')[0].getValue();
		var verify_address1 = this.getPaymentprocesscheckaddress().query('textfield[name="verify_address1"]')[0].getValue();
		var verify_address2 = this.getPaymentprocesscheckaddress().query('textfield[name="verify_address2"]')[0].getValue();
		var verify_city = this.getPaymentprocesscheckaddress().query('textfield[name="verify_city"]')[0].getValue();
		var verify_state = this.getPaymentprocesscheckaddress().query('textfield[name="verify_state"]')[0].getValue();
		var verify_zip = this.getPaymentprocesscheckaddress().query('textfield[name="verify_zip"]')[0].getValue();
		
		if(user.IsGuest == "1") {
		
			if(verify_address1 == '' || verify_city == '' || verify_state == '' || verify_zip == '' || verify_fist_name == '' || verify_last_name == '') {
				
				Ext.Msg.alert('Alert', 'Please enter all necessary fields', Ext.emptyFn);
				return;
			}
		
		}else{
			
			if(verify_address1 == '' || verify_city == '' || verify_state == '' || verify_zip == '') {
				
				Ext.Msg.alert('Alert', 'Please enter all necessary fields', Ext.emptyFn);
				return;
			}
			
		}
		
		Ext.Viewport.setMasked(true);
		
		Ext.Ajax.request({
			url: '/app/json_adapter.php',
			method: 'GET',
			disableCaching: true,
			timeout: 9999999,
			
			params: {
				action: 'verify_address_data',
				verify_address1: verify_address1,
				verify_address2: verify_address2,
				verify_city: verify_city,
				verify_state: verify_state,
				verify_zip: verify_zip,
				verify_fist_name: verify_fist_name,
				verify_last_name: verify_last_name,
				user_id: user.Id
			},
			
			success: function(response) {
				
				if(response.responseText == "false") {
					Ext.Msg.alert('Alert', 'Your address could not be verified, please adjust it accordingly!', Ext.emptyFn);
				}
				if(response.responseText == "incorrect") {
					Ext.Msg.alert('Alert', 'It seems your address is incomplete. Double-check everything is correct.', Ext.emptyFn);
				}
				if(response.responseText == "many") {
				
					var store = Ext.getStore('ClientAddressStoreVerified');
					store.getProxy().setExtraParams(
					{ 
						user_id : user.Id,
						is_guest: user.IsGuest
					});
					store.load({
						callback: function(records, operation, success) {
							
							Ext.getCmp("breadcrambs").setHtml('Payment Preference');
							if(this.paymentprocesschecknotequal == undefined)
							{
								this.paymentprocesschecknotequal = Ext.create('mob.view.tablet.PaymentProcessCheckNotEqual');
							}
							
							newButton.show();
							
							var hfield = Ext.create('Ext.field.Hidden',{ 
								config:{
									itemId: 'breadcramb_field',
									value: "Payment Preference"
								}
							});
							
							Ext.Viewport.setMasked(false);
							main_view.push(this.paymentprocesschecknotequal);
							
						},	
						scope: this
					});
				}
				if(response.responseText == "single") {
				
					var store = Ext.getStore('ClientAddressStoreVerified');
					store.getProxy().setExtraParams(
					{ 
						user_id : user.Id,
						is_guest: user.IsGuest
					});
					store.load({
						callback: function(records, operation, success) {
							
							Ext.getCmp("breadcrambs").setHtml('Payment Preference');
							if(this.paymentprocesschecknotequal == undefined)
							{
								this.paymentprocesschecknotequal = Ext.create('mob.view.tablet.PaymentProcessCheckNotEqual');
							}
							
							newButton.show();
							
							var hfield = Ext.create('Ext.field.Hidden',{ 
								config:{
									itemId: 'breadcramb_field',
									value: "Payment Preference"
								}
							});
							
							Ext.Viewport.setMasked(false);
							main_view.push(this.paymentprocesschecknotequal);
							
							//
							//
							Ext.getCmp("breadcrambs").setHtml("Shipping Info");
							window.location.hash='shipping_method/';
							//
							//
							
						},	
						scope: this
					});
				
				}
			},

			failure: function(response) {
				Ext.Msg.alert('Alert', 'Sorry, there was a little problem!', Ext.emptyFn);
			},
				
			callback: function(response) {
				Ext.Viewport.setMasked(false);
			}
		});
		
		
		
		
	},
		
	TapQuickPassText: function() {
		
	},
		
	CarouselLeftFeedback: function() {
		
		
		
	},
		
	CarouselRightFeedback: function() {
		
		
		
	}
	
});
