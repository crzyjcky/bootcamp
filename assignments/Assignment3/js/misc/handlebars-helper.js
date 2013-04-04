Handlebars.registerHelper("carouselIndicators", function(context, options) {

	var ret = "";
	var len = context.length;
	for ( var i = 0; i < len; i++) {

		var object = {};
		var isFirst = (i === 0);

		object["i"] = i;

		if (isFirst) {

			ret += options.fn(object);
		} else {

			ret += options.inverse(object);
		}
	}

	return ret;
});

Handlebars.registerHelper("carouselInner", function(context, options) {

	var ret = "";
	var len = context.length;
	for ( var i = 0; i < len; i++) {

		console.log("i:" + i);
		var object = {};
		var isFirst = (i === 0);

		object["i"] = i;
		object["largeImage"] = context[i];

		if (isFirst) {

			ret += options.fn(object);
		} else {

			ret += options.inverse(object);
		}
	}

	return ret;
});