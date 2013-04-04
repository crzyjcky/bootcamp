var app = app || {};

app.SavedLineItemComponentView = Backbone.View.extend({
	
	tagName : "tr",
	template : Handlebars.templates["saved-line-item"],
	

	render : function() {
		
		console.log(this.model.toJSON());
		
		this.$el
			.append(this.template(this.model.toJSON()));
		return this;
	}
});