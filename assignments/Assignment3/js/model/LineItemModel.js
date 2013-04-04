var app = app || {};

app.LineItemModel = Backbone.Model.extend({
	defaults : {
		productId : 0, 
		quantity : 1,
		listPrice : 0,
		price : 0,
		image : "",
		name : ""
	}
});