var app = app || {};

app.CartModel = Backbone.Model.extend({
	
	// broadcast events
	initialize : function() {
		
		this.cartLineItemCollection = new app.LineItemCollection({}, {key : "cart"});
		this.savedLineItemCollection = new app.LineItemCollection({}, {key : "saved"});
		
		this.listenTo(this.cartLineItemCollection, "reset", this.onCartReset);
		
		this.listenTo(this.cartLineItemCollection, "add", this.onCartLineItemAdded);
		
		this.listenTo(this.cartLineItemCollection, "remove", this.onCartLineItemRemoved);
		
		this.listenTo(this.cartLineItemCollection, "change:quantity", function(e) {
			
		});
		
		this.listenTo(this.savedLineItemCollection, "reset", this.onSavedReset);
		
		this.listenTo(this.savedLineItemCollection, "add", this.onSavedLineItemAdded);
		
		this.listenTo(this.savedLineItemCollection, "remove", this.onSavedLineItemRemoved);
		
		this.listenTo(this.savedLineItemCollection, "change:quantity", function(e) {
			
		});
		
		this.cartLineItemCollection.fetchLocalStorage();
		this.savedLineItemCollection.fetchLocalStorage();
	},
	
	addCartLineItem : function(lineItemModel) {
		
		
		//var lineItemModel = new LineItemModel({productId : productId, quantity : quantity});
		
		this.cartLineItemCollection.add(lineItemModel);
		
		
		
	},
	
	removeCartLineItem : function(productId) {
		var lineItemModel = this.cartLineItemCollection.get(productId);
			
		
		this.cartLineItemCollection.remove(lineItemModel);
		
		return lineItemModel;
		
	},
	
	getCartLineItemCollection : function() {
		
		return this.cartLineItemCollection;
	},
	
	addSavedLineItem : function(lineItemModel) {
		
		this.savedLineItemCollection.add(lineItemModel);
	},
	
	removeSavedLineItem : function(productId) {
		
		var lineItem = this.savedLineItemCollection.get(productId);
		
		console.log("lineItem");
		console.log(lineItem);
		console.log("productId:"+ productId);
		
		this.savedLineItemCollection.remove(productId);
		
		return lineItem;
		
	},
	
	getSavedLineItemCollection : function() {
		
		return this.savedLineItemCollection;
	},

	// move to saved / cart
	moveToSaved : function(productId) {
		
		var lineItem = this.removeCartLineItem(productId);
		this.addSavedLineItem(lineItem);
		
	},
	
	moveToCart : function(productId) {
		
		var lineItem = this.removeSavedLineItem(productId);
		this.addCartLineItem(lineItem);
	},
	
	// events
	
	onCartLineItemCollectionReset : function(lineItemCollection) {
		
		this.trigger("onCartLineItemCollectionReset", lineItemCollection);
	},
	
	onCartLineItemAdded : function(lineItemModel) {
		
		this.trigger("onCartLineItemAdded", lineItemModel);
		this.trigger("onNCartLineItemChanged", this.cartLineItemCollection.length);
		
		this.trigger("onNLineItemChanged", this.cartLineItemCollection.length + this.savedLineItemCollection.length);
		
		var subtotal = 0;
		this.cartLineItemCollection.forEach(function(lineItemModel){
			subtotal += lineItemModel.get("price");
		});
		this.trigger("onSubtotalChanged", subtotal);
	},
	
	onCartLineItemRemoved : function(lineItemModel) {
		this.trigger("onCartLineItemRemoved", lineItemModel);
		this.trigger("onNCartLineItemChanged", this.cartLineItemCollection.length);
		
		this.trigger("onNLineItemChanged", this.cartLineItemCollection.length + this.savedLineItemCollection.length);
		
		var subtotal = 0;
		this.cartLineItemCollection.forEach(function(lineItemModel){
			subtotal += lineItemModel.get("price");
		});
		this.trigger("onSubtotalChanged", subtotal);
	},
	
	onCartLineItemChanged : function(lineItemModel) {
		
		this.trigger("onCartLineItemChanged", lineItemModel);
	},
	
	onCartReset : function(collection, options) {
		
		console.log("onCartReset");
		this.trigger("onCartReset", collection);
	},
	
	onSavedLineItemCollectionReset : function(lineItemCollection) {
		
		this.trigger("onSavedLineItemCollectionReset", lineItemCollection);
	},
	
	onSavedLineItemAdded : function(lineItemModel) {
		
		this.trigger("onSavedLineItemAdded", lineItemModel);
		this.trigger("onNSavedLineItemChanged", this.savedLineItemCollection.length);
		
		this.trigger("onNLineItemChanged", this.cartLineItemCollection.length + this.savedLineItemCollection.length);
	},
	
	onSavedLineItemRemoved : function(lineItemModel) {
		
		this.trigger("onSavedLineItemRemoved", lineItemModel);
		this.trigger("onNSavedLineItemChanged", this.savedLineItemCollection.length);
		
		this.trigger("onNLineItemChanged", this.cartLineItemCollection.length + this.savedLineItemCollection.length);
	},
	
	onSavedLineItemChanged : function(lineItemModel) {
		
		this.trigger("onSavedLineItemChanged", lineItemModel);
	},
	
	onSavedReset : function(collection, options) {
		//return this.savedLineItemCollection;
		this.trigger("onSavedReset", collection);
	}

});