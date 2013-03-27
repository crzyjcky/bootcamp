(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['carousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n				<li data-target=\"#carousel-"
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide-to=\"";
  if (stack2 = helpers['i']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['i']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"active\"></li>\r\n			";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n				<li data-target=\"#carousel-"
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide-to=\"";
  if (stack2 = helpers['i']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['i']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></li>				\r\n			";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n				<div class=\"active item\"><img src=\"";
  if (stack1 = helpers.largeImage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.largeImage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\r\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<div class=\"item\"><img src=\"";
  if (stack1 = helpers.largeImage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.largeImage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\r\n\r\n			";
  return buffer;
  }

  buffer += "	<div id=\"carousel-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"carousel slide\">\r\n		<ol class=\"carousel-indicators\">\r\n			";
  options = {hash:{},inverse:self.programWithDepth(program3, data, depth0),fn:self.programWithDepth(program1, data, depth0),data:data};
  stack2 = ((stack1 = helpers.carouselIndicators),stack1 ? stack1.call(depth0, depth0.largeImages, options) : helperMissing.call(depth0, "carouselIndicators", depth0.largeImages, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		</ol>\r\n		<!-- Carousel items -->\r\n		<div class=\"carousel-inner\">	\r\n			";
  options = {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.carouselInner),stack1 ? stack1.call(depth0, depth0.largeImages, options) : helperMissing.call(depth0, "carouselInner", depth0.largeImages, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		</div>\r\n		<!-- Carousel nav -->\r\n		<a class=\"carousel-control left\" href=\"#carousel-";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\r\n			data-slide=\"prev\">&lsaquo;</a> <a class=\"carousel-control right\"\r\n			href=\"#carousel-";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-slide=\"next\">&rsaquo;</a>\r\n	</div>";
  return buffer;
  });
})();