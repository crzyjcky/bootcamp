var app = app || {};

app.PanelComponentView = Backbone.View.extend({
	
	tagName: "div",
	className: "panel modal hide fade",
	template: Handlebars.templates["panel"],
	
	render: function() {
		
		console.log();
		
		this.$el
			.attr("id", "panel-" + this.model.id)
			.html(this.template(this.model.toJSON()));
		
		//console.log("this." + $(this).html());
		return this;
	}
});
