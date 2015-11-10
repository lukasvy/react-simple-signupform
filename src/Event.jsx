var $ = window.jQuery;
var eventTypes = require('./EventTypes');

var callbacks = {};
var emmit = function(name, payload, callback) {
	if (callbacks[name] !== 'undefined' && $.isArray(callbacks[name])) {
		$.each(callbacks[name], function(i, o) {
			o(payload, i, callbacks[name].length);
		});
	}
	if (callback) {
		callback();
	}
}
var on = function(name, callback) {
	if (!callbacks[name]) {
		callbacks[name] = [];
	}
	callbacks[name].push(callback);
}

module.exports = {
	emmit : emmit,
	on 	  : on,
	types : eventTypes
};
