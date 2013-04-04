var app = app || {};

app.LineItemCollection = Backbone.Collection.extend({
	model : app.LineItemModel,
	
	initialize : function(models, options) {
		
		this.key = options.key;
	},
	
	fetchLocalStorage: function() {
		
		console.log("key: " + this.key);
		
		var jsonString = $.jStorage.get(this.key);
		lineItems = JSON.parse(jsonString);
		
		this.reset(lineItems);
		/*
		var len = lineItems.length;
		for (var i = 0; i < len; i++) {
			var lineItem = lineItems[i];
			
			this.add(lineItem);
		}
		*/
	},
	
	saveLocalStorage: function() {
		
		var jsonString = JSON.stringify(json);
		$.jStorage.set(this.key, jsonString);
		
	}
});