var app = app || {};

app.AlertComponentView = Backbone.View.extend({
	
	tagName: "div",
	template: Handlebars.templates["alert"],
	
	render: function() {
		
		this.$el
			.html(this.template(this.model.toJSON()));
		return this;
	}
});
