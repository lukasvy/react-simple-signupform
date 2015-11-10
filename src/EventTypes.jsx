var eventTypes = [

	'progressChange',
	'onSave',
	'register',
	'valueChange',
	'containerDidMount'
];

var object = {};
for (var i = 0; i < eventTypes.length; i++ ) {
	object[eventTypes[i]] = eventTypes[i];
}

module.exports = object;