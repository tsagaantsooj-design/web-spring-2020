// const assert = require('assert');
function Cs142TemplateProcessor (template) {
	this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dict) {
	// do sth to replace properties in template with those in dictionary
	var str = this.template;
	var reg = /{{[^{]*}}/g;
	var words = str.match(reg);
	// console.log(typeof(words));
	for(var i = 0; i < words.length; i++) {
		var word = words[i].replace("{{", "").replace("}}", "");
		str = str.replace(words[i], dict[word] || "");
	}
	return str;
};

