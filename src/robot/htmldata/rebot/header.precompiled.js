(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":13}}}) : helper)))
    + "</h1>\n<button id=theme-toggle>\n    <svg class=\"light-mode-icon\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\"viewBox=\"0 0 24 24\" fill=\"var(--text-color)\">\n        <rect fill=\"none\" height=\"24\" width=\"24\" />\n        <path d=\"M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z\" />\n    </svg>\n    <svg class=\"dark-mode-icon\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" fill=\"var(--text-color)\">\n        <rect fill=\"none\" height=\"24\" width=\"24\" />\n        <path d=\"M11.01,3.05C6.51,3.54,3,7.36,3,12c0,4.97,4.03,9,9,9c4.63,0,8.45-3.5,8.95-8c0.09-0.79-0.78-1.42-1.54-0.95 c-0.84,0.54-1.84,0.85-2.91,0.85c-2.98,0-5.4-2.42-5.4-5.4c0-1.06,0.31-2.06,0.84-2.89C12.39,3.94,11.9,2.98,11.01,3.05z\" />\n    </svg>\n</button>\n<div id=\"generated\">\n    <span>Generated<br>"
    + alias4(((helper = (helper = lookupProperty(helpers,"generated") || (depth0 != null ? lookupProperty(depth0,"generated") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"generated","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":36}}}) : helper)))
    + "</span><br>\n    <span id=\"generated-ago\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ago") || (depth0 != null ? lookupProperty(depth0,"ago") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":14,"column":29},"end":{"line":14,"column":36}}}) : helper)))
    + " ago</span>\n</div>\n<div id=\"top-right-header\">\n    <div id=\"report-or-log-link\"><a href=\"#\"></a></div>\n</div>\n";
},"useData":true});
})();