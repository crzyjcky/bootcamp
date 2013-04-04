var app = app || {};

app.CartComponentView = Backbone.View.extend({
	
	el: "#cart",
	template: Handlebars.templates["cart"],
	
	initialize: function() {
		
		_.bindAll(this, "onCartRemoveButtonClicked");
		_.bindAll(this, "onSavedRemoveButtonClicked");
		_.bindAll(this, "onSaveForLaterButtonClicked");
		_.bindAll(this, "onMoveToCartButtonClicked");
		
		cartLineItemCollection = this.model.getCartLineItemCollection();
		
		cartLineItemCollection.forEach(function(cartLineItemModel) {
			
			this.onCartLineItemAdded(cartLineItemModel);
		});
		
		
	
		this.listenTo(this.model, "onCartReset", this.onCartReset);
		
		this.listenTo(this.model, "onCartLineItemAdded", this.onCartLineItemAdded);
		this.listenTo(this.model, "onCartLineItemRemoved", this.onCartLineItemRemoved);
		this.listenTo(this.model, "onSavedLineItemAdded", this.onSavedLineItemAdded);
		this.listenTo(this.model, "onSavedLineItemRemoved", this.onSavedLineItemRemoved);
		this.listenTo(this.model, "onNCartLineItemChanged", this.onNCartLineItemChanged);
		this.listenTo(this.model, "onNSavedLineItemChanged", this.onNSavedLineItemChanged);
		this.listenTo(this.model, "onNLineItemChanged", this.onNLineItemChanged);
		this.listenTo(this.model, "onSubtotalChanged", this.onSubtotalChanged);
		
		$(document).on("click", "#cart-line-items .remove-button", this.onCartRemoveButtonClicked);
		$(document).on("click", "#cart-line-items .save-for-later-button", this.onSaveForLaterButtonClicked);
		
		$(document).on("click", "#saved-line-items .remove-button", this.onSavedRemoveButtonClicked);
		$(document).on("click", "#saved-line-items .move-to-cart-button", this.onMoveToCartButtonClicked);
		
	},
	/*
	events : {
		"click #cart .remove" : "onRemoveButtonClicked"
		
	},
	*/
	render: function() {
		
		this.$el
			.html(this.template(this.model.toJSON()));
		return this;
	},
	
	onCartLineItemAdded : function(lineItemModel) {
		
		var cartLineItemComponentView = new app.CartLineItemComponentView({model : lineItemModel});
		this.$el.find("#cart-line-items").append(cartLineItemComponentView.render().el);
	},
	
	onCartLineItemRemoved : function(lineItemModel) {
		
		console.log("onCartItemRemoved");
		$('#cart-line-items button[data-product-id="' + lineItemModel.get("id") + '"]').closest("tr").remove();
		console.log($('#cart-line-items button[data-product-id="' + lineItemModel.get("productId") + '"]'));
	},
	
	onSavedLineItemAdded : function(lineItemModel) {
		
		console.log("onSaved");
		var savedLineItemComponentView = new app.SavedLineItemComponentView({model : lineItemModel});
		this.$el.find("#saved-line-items").append(savedLineItemComponentView.render().el);
	},
	
	onSavedLineItemRemoved : function(lineItemModel) {
		
		console.log("onSavedItemRemoved");
		$('#saved-line-items button[data-product-id="' + lineItemModel.get("id") + '"]').closest("tr").remove();
		console.log($('#saved-line-items button[data-product-id="' + lineItemModel.get("productId") + '"]'));
	},
	
	// ui events
	onCartRemoveButtonClicked : function(e) {
		
		var productId = $(e.target).data("product-id");
		

		this.model.removeCartLineItem(productId);
	},
	
	onSavedRemoveButtonClicked : function(e) {
		
		var productId = $(e.target).data("product-id");
		

		this.model.removeSavedLineItem(productId);
	},
	
	onSaveForLaterButtonClicked : function(e) {
		
		var productId = $(e.target).data("product-id");
		
		//var lineItemModel = this.model.removeCartLineItem(productId);
		this.model.moveToSaved(productId);
		
	},
	
	onMoveToCartButtonClicked : function(e) {
		
		var productId = $(e.target).data("product-id");
		
		//var lineItemModel = this.model.removeCartLineItem(productId);
		this.model.moveToCart(productId);
	},
	
	onNCartLineItemChanged : function(n) {
		
		console.log("onNCartLineItemChanged");
		console.log($("#cart .n-cart-line-item"));
		if (n <= 1) {
			
			$("#cart .n-cart-line-item").html(n + " Item for Purchase");
		} else {
			
			$("#cart .n-cart-line-item").html(n + " Items for Purchase");
		}
		
	},
	
	onNSavedLineItemChanged : function(n) {
		
		console.log("onNSavedLineItemChanged");
		if (n <= 1) {
			
			$("#cart .n-saved-line-item").html(n + " Saved Item");
		} else {
			
			$("#cart .n-saved-line-item").html(n + " Saved Items");
		}
	},
	
	onNLineItemChanged : function(n) {
		
		if (n <= 1) {
			
			$("#cart .n-line-item").html(n + " Item in Your Cart");
		} else {
			
			$("#cart .n-line-item").html(n + " Items in Your Cart");
		}
	},
	
	onSubtotalChanged : function(subtotal) {
		
		$("#cart subtotal").html(subtotal);
	}
});