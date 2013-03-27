var app = app || {};

app.AlsoViewedComponentView = Backbone.View.extend({
	
	tagName: "div",
	template: Handlebars.templates["also-viewed"],
	alsoViewedProducts: [],
	
	initialize: function() {
		
		// fake recommendation service, it's hackish, shouldn't place it here
		var alsoViewedProducts = [];
		var productCount = this.collection.length;
		var len = 3;
		for (var i = 0; i < len; i++) {
			alsoViewedProducts.push(this.collection.at(Math.floor(Math.random() * productCount)).toJSON());
		}
		
		this.alsoViewedProducts = alsoViewedProducts;
	},
	
	render: function() {
		
		this.$el
			.html(this.template({alsoViewedProducts : this.alsoViewedProducts}));
		return this;
	}
});
