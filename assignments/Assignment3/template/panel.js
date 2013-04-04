(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['panel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n    <h3></h3>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n	<div class=\"general-info\">\r\n		<table>\r\n			<tr>\r\n				<td colspan=\"2\"><h2 class=\"name\"></h2></td>\r\n			</tr>\r\n			<tr>\r\n				<td colspan=\"2\"><img class=\"customer-rating\" /> <a\r\n					class=\"btn btn-link\">Write a Review</a> | <a class=\"btn btn-link\">Ask\r\n						a Question</a></td>\r\n			</tr>\r\n			<tr>\r\n				<td colspan=\"2\">\r\n					<div class=\"product-carousel\"></div>\r\n\r\n				</td>\r\n			</tr>\r\n			<tr>\r\n				<td width=\"50%\">\r\n					<h3>About</h3>\r\n					<p class=\"about\">\r\n					</p>\r\n				</td>\r\n				<td width=\"50%\">\r\n					<div class=\"btn-group\">\r\n					  <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n					    1\r\n					    <span class=\"caret\"></span>\r\n					  </a>\r\n					  <ul class=\"dropdown-menu\">\r\n					    <li><a>1</a></li>\r\n					    <li><a>2</a></li>\r\n					    <li><a>3</a></li>\r\n					  </ul>\r\n					</div>\r\n					\r\n					<button data-product-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"add-to-cart-button btn btn-warning\">Add to Cart</button>\r\n					<div class=\"row-fluid\">\r\n					<a class=\"btn btn-link\"><i class=\"icon-map-marker\"></i> Find This product Locally</a><br /> \r\n					<a class=\"btn btn-link\"><i	class=\"icon-gift\"></i> Calculate Arrival Date</a><br />\r\n					<a class=\"btn btn-link\"><i class=\"icon-random\"></i> Share With a Friend</a><br />\r\n					</div>\r\n				</td>\r\n			</tr>\r\n		</table>\r\n	</div>\r\n	\r\n	<hr />\r\n	\r\n	<div class=\"recommendation\">\r\n	\r\n		<button class=\"btn pull-right\">See More <i class=\"icon-chevron-right\"></i></button>\r\n		<h3>People Who Viewed This Item Also Viewed</h3>\r\n		\r\n		<div class=\"also-viewed\"></div>\r\n	</div>\r\n	\r\n	<hr />\r\n	\r\n	<div class=\"product-details\">\r\n\r\n		<button class=\"btn pull-right\">Have a Question? <i class=\"icon-chevron-right\"></i></button>\r\n		<h3>Product Details</h3>\r\n		\r\n		<div class=\"nav\"></div>\r\n	</div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a href=\"#\" class=\"btn\">Close</a>\r\n    <a href=\"#\" class=\"btn btn-primary\">Save changes</a>\r\n  </div>\r\n\r\n\r\n";
  return buffer;
  });
})();