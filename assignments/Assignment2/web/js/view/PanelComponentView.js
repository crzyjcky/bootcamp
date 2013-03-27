var app = app || {};

app.PanelComponentView = Backbone.View.extend({
	
	tagName: "div",
	className: "panel modal hide fade",
	template: Handlebars.templates["panel"],
	
	render: function() {
		
		console.log();
		
		this.$el
			.attr("id", this.id)
			.html(this.template());
		
		//console.log("this." + $(this).html());
		return this;
	}
});
