var app = app || {};

app.CarouselComponentView = Backbone.View.extend({
	
	tagName: "div",
	template: Handlebars.templates["carousel"],
	
	render: function() {
		
		console.log(this.model.toJSON());
		this.$el
			.html(this.template(this.model.toJSON()));
		return this;
	}
});
