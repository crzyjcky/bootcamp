var app = app || {};

app.NavComponentView = Backbone.View.extend({
	
	tagName: "div",
	template: Handlebars.templates["nav"],
	
	render: function() {
		this.$el
			.html(this.template(this.model.toJSON()));
		return this;
	}
});

//template = _.template($(@template).html(), @model.toJSON())