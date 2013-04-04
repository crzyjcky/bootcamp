var app = app || {};

app.CartLineItemComponentView = Backbone.View.extend({
	
	tagName : "tr",
	template : Handlebars.templates["cart-line-item"],
	

	render : function() {
		
		console.log(this.model.toJSON());
		
		this.$el
			.append(this.template(this.model.toJSON()));
		return this;
	}
});