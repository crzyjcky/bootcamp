(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\r\n\r\n	<div class=\"modal-header\">\r\n		<button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n			aria-hidden=\"true\">X</button>\r\n		<span id=\"myModalLabel\"> <span class=\"n-line-item\">0 Item in Your Cart</span>\r\n			<div class=\"btn-group\">\r\n				<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n					Sort <span class=\"caret\"></span>\r\n				</a>\r\n				<ul class=\"dropdown-menu\">\r\n					<!-- dropdown menu links -->\r\n				</ul>\r\n			</div>\r\n		</span>\r\n	</div>\r\n	<div class=\"modal-body\">\r\n\r\n		<div class=\"accordion\" id=\"accordion2\">\r\n			<div class=\"accordion-group\">\r\n				<div class=\"accordion-heading\">\r\n					<a class=\"accordion-toggle\" data-toggle=\"collapse\"\r\n						data-parent=\"#accordion2\" href=\"#collapseOne\"> <span class=\"n-cart-line-item\">0 Item for Purchase</span>\r\n						 </a>\r\n				</div>\r\n				<div id=\"collapseOne\" class=\"accordion-body collapse in\">\r\n					<div class=\"accordion-inner\">\r\n\r\n						<table id=\"cart-line-items\">\r\n\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"accordion\" id=\"accordion3\">\r\n			<div class=\"accordion-group\">\r\n				<div class=\"accordion-heading\">\r\n					<a class=\"accordion-toggle\" data-toggle=\"collapse\"\r\n						data-parent=\"#accordion3\" href=\"#collapseTwo\"> <span class=\"n-saved-line-item\">0 Saved Item</span> </a>\r\n				</div>\r\n				<div id=\"collapseTwo\" class=\"accordion-body collapse in\">\r\n					<div class=\"accordion-inner\">\r\n						\r\n						<table id=\"saved-line-items\">\r\n\r\n						</table>\r\n\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n	</div>\r\n	<div class=\"modal-footer\">\r\n		Subtotal $<span class=\"subtotal\">0</span>\r\n\r\n		<button class=\"btn btn-primary btn-warning\">\r\n			Checkout <i class=\"icon-chevron-right icon-white\"></i>\r\n		</button>\r\n	</div>\r\n";
  });
})();