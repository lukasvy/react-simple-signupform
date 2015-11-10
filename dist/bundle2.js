(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = window.React;
var event = require('./Event');

module.exports = React.createClass({
	displayName: 'exports',

	componentDidMount: function componentDidMount() {
		event.emmit(event.types.containerDidMount, true);
	},
	render: function render() {
		var action = this.props.action || '';
		var method = this.props.method || 'POST';
		return React.createElement(
			'form',
			{ action: action, method: method },
			React.createElement(
				'div',
				{ className: 'container container-table' },
				React.createElement(
					'div',
					{ className: 'row vertical-center-row' },
					React.createElement(
						'div',
						{ className: 'text-center col-md-5 col-md-offset-3 push-top' },
						this.props.children
					)
				)
			)
		);
	}
});

},{"./Event":2}],2:[function(require,module,exports){
'use strict';

var $ = window.jQuery;
var eventTypes = require('./EventTypes');

var callbacks = {};
var emmit = function emmit(name, payload, callback) {
	if (callbacks[name] !== 'undefined' && $.isArray(callbacks[name])) {
		$.each(callbacks[name], function (i, o) {
			o(payload, i, callbacks[name].length);
		});
	}
	if (callback) {
		callback();
	}
};
var on = function on(name, callback) {
	if (!callbacks[name]) {
		callbacks[name] = [];
	}
	callbacks[name].push(callback);
};

module.exports = {
	emmit: emmit,
	on: on,
	types: eventTypes
};

},{"./EventTypes":3}],3:[function(require,module,exports){
'use strict';

var eventTypes = ['progressChange', 'onSave', 'register', 'valueChange', 'containerDidMount'];

var object = {};
for (var i = 0; i < eventTypes.length; i++) {
	object[eventTypes[i]] = eventTypes[i];
}

module.exports = object;

},{}],4:[function(require,module,exports){
'use strict';

var React = window.React;
var event = require('./Event');

module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return { ok: false };
	},
	onInputChange: function onInputChange(payload) {
		if (payload.name === this.props.name) {
			if (payload.value !== '') {
				this.setState({ ok: true });
			} else {
				this.setState({ ok: false });
			}
		}
	},
	componentWillMount: function componentWillMount() {
		event.on(event.types.valueChange, this.onInputChange);
	},
	render: function render() {
		var iconClass = "fa vcenter form-icon-left ";
		if (this.state.ok) {
			iconClass += " form-icon-left-color ";
		} else {
			iconClass += " form-icon-left ";
		}
		iconClass += this.props.icon ? this.props.icon : "";
		return React.createElement(
			'div',
			{ className: 'iconmenu-row clearfix' },
			React.createElement(
				'span',
				{ className: 'col-xs-1 text-center' },
				React.createElement('i', { className: iconClass })
			),
			React.createElement(
				'span',
				{ className: 'col-xs-10 form-icon-right' },
				this.props.children
			)
		);
	}
});

},{"./Event":2}],5:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = window.React;
var ValidateFormMixin = require('./Mixins/ValidateFormMixin');

module.exports = React.createClass({
	displayName: "exports",

	mixins: [ValidateFormMixin], // Use the mixin
	render: function render() {
		var _props = this.props;
		var checked = _props.checked;
		var full = _props.full;

		var other = _objectWithoutProperties(_props, ["checked", "full"]);

		var cl = "col-xs-form form-control row-input ";
		cl += full ? "full-length" : "";
		//cl += this.state["$error"] ? " has-error " : "";
		return React.createElement("input", _extends({}, other, { className: cl, onChange: this.handleChange }));
	}
});

},{"./Mixins/ValidateFormMixin":7}],6:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = window.React;
var Row = require('./Row');
var IconRow = require('./IconRow');
var Input = require('./Input');

module.exports = React.createClass({
	displayName: 'exports',

	render: function render() {
		var _props = this.props;
		var icon = _props.icon;
		var label = _props.label;
		var name = _props.name;

		var other = _objectWithoutProperties(_props, ['icon', 'label', 'name']);

		if (label) {
			return React.createElement(
				Row,
				null,
				React.createElement(
					'p',
					{ className: 'text-align-left ' },
					label
				),
				React.createElement(Input, _extends({ name: name, full: '1' }, other))
			);
		} else if (icon) {
			return React.createElement(
				IconRow,
				{ icon: icon, name: name },
				React.createElement(Input, _extends({ name: name }, other))
			);
		} else {
			return React.createElement(
				Row,
				null,
				React.createElement(Input, _extends({ name: name, full: '1' }, other))
			);
		}
	}
});

},{"./IconRow":4,"./Input":5,"./Row":13}],7:[function(require,module,exports){
'use strict';

var $ = window.jQuery;
var ReactDOM = window.ReactDOM;
var _ = window._;
var event = require('../Event');

var validatables = {};
var required = {};

var registerValidatable = function registerValidatable(v, name) {
	validatables[name] = v;
};
var registerRequired = function registerRequired(v, name) {
	required[name] = v;
};

module.exports = {
	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	checkForChildrenErrors: function checkForChildrenErrors(payload) {
		// save pressed
		_.each(validatables, function (child) {
			var child = validatables[i];
			if (child && child.props.pattern) {
				child.checkForError();
			}
		});
	},
	componentDidMount: function componentDidMount() {
		var self = this;

		event.emmit(event.types.register, { name: this.props.registerWith || false, childName: this.props.name, child: this });

		registerValidatable(this, this.props.name);
		if (this.props.required) {
			registerRequired(this, this.props.name);
		}
		event.on(event.types.onSave, this.checkForChildrenErrors);
		event.on(event.types.containerDidMount, function () {
			if (self.props.value) {
				self.handleChange();
			}
		});
	},
	handleChange: function handleChange(e) {
		event.emmit(event.types.valueChange, { name: this.props.name, value: this.getValue() });
	},
	getValue: function getValue() {
		var $el = $(ReactDOM.findDOMNode(this));
		var input = $el.find('input');
		return $(input).context.value;
	},
	checkForError: function checkForError() {
		var $el = $(ReactDOM.findDOMNode(this));
		var input = $el.find('input');
		var select = $el.find('input');
		if (input) {
			var regex = new RegExp(this.props.pattern);
			if (!input.context.value.match(regex)) {
				var state = this.state;
				state["$error"] = true;
				this.setState(state);
			} else {
				var state = this.state;
				state["$error"] = false;
				this.setState(state);
			}
		} else if (select) {}
	}
};

},{"../Event":2}],8:[function(require,module,exports){
"use strict";

var $ = window.jQuery;
var ReactDOM = window.ReactDOM;
var React = window.React;

module.exports = React.createClass({
	displayName: "exports",

	componentWillEnter: function componentWillEnter(callback) {
		$(ReactDOM.findDOMNode(this)).stop(true).hide().slideDown({
			duration: 500,
			complete: function complete() {
				callback();
			}
		});
	},
	componentWillLeave: function componentWillLeave(callback) {
		$(ReactDOM.findDOMNode(this)).stop(true).slideUp({
			duration: 500,
			complete: function complete() {
				callback();
			}
		});
	},
	render: function render() {
		var self = this;
		return React.createElement(
			"div",
			{ className: "clearfix" },
			React.Children.map(self.props.children, function (child) {
				return React.cloneElement(child, {
					name: child.props.name + self.props.index,
					id: child.props.id + self.props.index
				});
			})
		);
	}
});

},{}],9:[function(require,module,exports){
'use strict';

var React = window.React;
var ReactTransitionGroup = window.React.addons.TransitionGroup;
var MultiplyRowSlider = require('./MultiplyRowSlider');

module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return { times: 1, adding: false, animate: false };
	},
	add: function add() {
		if (this.props.max) {
			if (this.state.times < this.props.max) {
				this.setState({ times: ++this.state.times, adding: true, animate: true });
			}
		} else {
			this.setState({ times: ++this.state.times, adding: true, animate: true });
		}
	},
	remove: function remove() {
		if (this.state.times > 1) {
			this.setState({ times: --this.state.times, adding: false, animate: true });
		}
	},
	componentDidMount: function componentDidMount() {
		var state = this.state;
		state['animate'] = true;
		this.setState(state);
	},
	renderChildren: function renderChildren(times) {
		var array = [];
		for (var i = 0; i < times; i++) {
			array.push(React.createElement(
				MultiplyRowSlider,
				{ key: i, index: i },
				this.props.children
			));
		}
		return array;
	},
	render: function render() {
		var minusClass = "fa fa-minus pull-right text-left add-sign";
		minusClass += this.state.times < 2 ? " hidden" : "";
		var plusClass = "fa fa-plus pull-left text-left add-sign";
		if (this.props.max) {
			if (this.props.max <= this.state.times) {
				plusClass += ' hidden';
			}
		}
		return React.createElement(
			ReactTransitionGroup,
			{ transitionName: 'transition', className: 'clearfix' },
			this.renderChildren(this.state.times),
			React.createElement('i', { className: plusClass, onClick: this.add }),
			React.createElement('i', { className: minusClass, onClick: this.remove })
		);
	}
});

},{"./MultiplyRowSlider":8}],10:[function(require,module,exports){
'use strict';

var React = window.React;
var event = require('./Event');
var _ = window._;

var progressable = {};

module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return { value: 0, containerDidMount: false };
	},
	componentWillMount: function componentWillMount() {
		event.on(event.types.register, function (payload) {
			progressable[payload.childName] = false;
		});
	},
	componentDidMount: function componentDidMount() {
		var self = this;

		event.on(event.types.valueChange, function (payload) {
			var index = 0;
			var all = 0;
			if (payload.value !== '') {
				progressable[payload.name] = true;
			} else {
				progressable[payload.name] = false;
			}
			$.each(progressable, function (i, o) {
				if (o === true) {
					index++;
				}
				all++;
			});
			self.updateProgress(Math.floor(index / all * 100));
		});
	},
	updateProgress: function updateProgress(value) {
		if (value >= 0 && value <= 100) {
			this.setState({ value: value });
		}
	},
	render: function render() {
		var divStyle = {
			width: this.state.value + "%"
		};
		return React.createElement(
			'span',
			null,
			React.createElement(
				'p',
				null,
				'Your profile is ',
				this.state.value,
				'% complete'
			),
			React.createElement(
				'div',
				{ className: 'progress' },
				React.createElement('div', { className: 'progress-bar', role: 'progressbar', 'aria-valuenow': '30', 'aria-valuemin': '0', 'aria-valuemax': '100', style: divStyle })
			)
		);
	}
});

},{"./Event":2}],11:[function(require,module,exports){
'use strict';

var React = window.React;

module.exports = React.createClass({
	displayName: 'exports',

	handleClick: function handleClick() {
		this.props.onSelect(this.props.children);
	},
	render: function render() {
		var classType = this.props.selected ? 'form-icon-radio fa fa-circle' : 'form-icon-radio fa fa-circle-o';
		return React.createElement(
			'label',
			{ className: 'radio-inline', onClick: this.handleClick },
			React.createElement('i', { className: classType }),
			React.createElement('span', { dangerouslySetInnerHTML: { __html: "&nbsp;&nbsp;" } }),
			this.props.children
		);
	}
});

// <input type="radio" onClick={this.handleClick} name={this.props.name} value={this.props.children} onChange={this.handleChange} />{this.props.children}

},{}],12:[function(require,module,exports){
'use strict';

var React = window.React;
var ValidateFormMixin = require('./Mixins/ValidateFormMixin');
var $ = window.jQuery;

module.exports = React.createClass({
	displayName: 'exports',

	mixins: [ValidateFormMixin], // Use the mixin
	getInitialSelectedValue: function getInitialSelectedValue() {
		var value = '';
		React.Children.forEach(this.props.children, function (child) {
			if (child.props.selected) {
				value = child.props.children;
				return true;
			}
		});
		return value;
	},
	getInitialState: function getInitialState() {
		return { selectedValue: this.getInitialSelectedValue() };
	},
	onSelect: function onSelect(value) {
		this.setState({ selectedValue: value });
	},
	renderChildren: function renderChildren() {
		var self = this;
		return React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				name: self.props.name,
				selected: child.props.children === self.state.selectedValue ? true : false,
				onSelect: self.onSelect
			});
		});
	},
	render: function render() {
		var selectedValue = this.state.selectedValue;
		return React.createElement(
			'span',
			null,
			React.createElement(
				'p',
				null,
				this.props.label
			),
			React.createElement('input', { type: 'hidden', name: this.props.name, value: selectedValue }),
			React.createElement(
				'span',
				{ className: 'form-group radio-group' },
				this.renderChildren()
			)
		);
	}
});

},{"./Mixins/ValidateFormMixin":7}],13:[function(require,module,exports){
"use strict";

var React = window.React;

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "iconmenu-row clearfix" },
			this.props.children
		);
	}
});

},{}],14:[function(require,module,exports){
'use strict';

var React = window.React;
var event = require('./Event');

module.exports = React.createClass({
	displayName: 'exports',

	handleClick: function handleClick(e) {
		e.preventDefault();
		event.emmit(event.types.onSave, true);
	},
	render: function render() {
		var label = this.props.label ? this.props.label : 'Save';
		return React.createElement(
			'div',
			{ className: 'row push-top ' },
			React.createElement(
				'button',
				{ type: 'button', onClick: this.handleClick, className: 'btn-primary action-button animate' },
				label
			)
		);
	}
});

},{"./Event":2}],15:[function(require,module,exports){
'use strict';

var React = window.React;
var ValidateFormMixin = require('./Mixins/ValidateFormMixin');
var event = require('./Event');

module.exports = React.createClass({
	displayName: 'exports',

	mixins: [ValidateFormMixin], // Use the mixin
	getInitialState: function getInitialState() {
		return { value: '' };
	},
	getDefaultProps: function getDefaultProps() {
		return {
			placeholder: 'Please select'
		};
	},
	propTypes: {
		name: React.PropTypes.string.isRequired,
		id: React.PropTypes.string.isRequired
	},
	onSelectHandle: function onSelectHandle(child) {
		if (child !== this.props.placeholder) {
			this.setState({ value: child });
			event.emmit(event.types.valueChange, { name: this.props.name, value: child });
		}
	},
	renderChildren: function renderChildren() {
		var self = this;
		return React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				onSelect: self.onSelectHandle
			});
		});
	},
	render: function render() {
		var cl = "btn btn-default dropdown-toggle newdropdown row-input ";
		cl += this.props.full ? "full-length" : "";
		var cl2 = "dropdown-menu ";
		cl2 += this.props.full ? "full-length" : "";
		var value = this.state.value ? this.state.value : this.props.placeholder;
		return React.createElement(
			'div',
			{ className: 'dropdown ' },
			React.createElement(
				'button',
				{ className: cl, type: 'button', id: this.props.id, 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
				React.createElement(
					'span',
					{ className: 'dropdownlabel pull-left' },
					value
				),
				React.createElement('input', { type: 'hidden', name: this.props.name, value: this.state.value }),
				React.createElement(
					'span',
					{ className: 'pull-right' },
					React.createElement('i', { className: 'fa fa-caret-down' })
				)
			),
			React.createElement(
				'ul',
				{ className: cl2, 'aria-labelledby': this.props.id },
				this.renderChildren()
			)
		);
	}
});

},{"./Event":2,"./Mixins/ValidateFormMixin":7}],16:[function(require,module,exports){
"use strict";

var React = window.React;

module.exports = React.createClass({
	displayName: "exports",

	handleClick: function handleClick(e) {
		e.preventDefault();
		this.props.onSelect(this.props.children);
	},
	render: function render() {
		return React.createElement(
			"li",
			null,
			React.createElement(
				"a",
				{ href: "#", onClick: this.handleClick },
				this.props.children
			)
		);
	}
});

},{}],17:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = window.React;
var Select = require('./Select');
var IconRow = require('./IconRow');
var Row = require('./Row');

module.exports = React.createClass({
	displayName: 'exports',

	render: function render() {
		var _props = this.props;
		var icon = _props.icon;
		var label = _props.label;
		var name = _props.name;

		var other = _objectWithoutProperties(_props, ['icon', 'label', 'name']);

		if (label) {
			return React.createElement(
				'span',
				null,
				React.createElement(
					'p',
					{ className: 'text-align-left ' },
					label
				),
				React.createElement(
					Select,
					_extends({ name: name }, other, { full: '1' }),
					this.props.children
				)
			);
		} else if (icon) {
			return React.createElement(
				IconRow,
				{ icon: icon, name: name },
				React.createElement(
					Select,
					_extends({ name: name }, other),
					this.props.children
				)
			);
		} else {
			return React.createElement(
				Row,
				{ name: name },
				React.createElement(
					Select,
					_extends({ name: name }, other, { full: '1' }),
					this.props.children
				)
			);
		}
	}
});

},{"./IconRow":4,"./Row":13,"./Select":15}],18:[function(require,module,exports){
'use strict';

var React = window.React;
var $ = window.jQuery;
var ReactDOM = window.ReactDOM;
var event = require('./Event');
var _ = window._;

var children = {};

module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return { rotateDown: false, hidden: false, color: false, children: {} };
	},
	registerChildren: function registerChildren(payload) {
		if (payload.name === this.props.name) {
			this.setChild(payload.childName, false);
			this.checkForIconUp();
		}
	},
	setChild: function setChild(childName, value) {
		var children = this.state.children;
		children[childName] = value;
		this.setState(_.extend(this.state, { children: children }));
	},
	toggleColorOnIcon: function toggleColorOnIcon(value) {
		var self = this;
		this.setState(_.extend(self.state, { color: value }));
	},
	checkForIconUp: function checkForIconUp() {
		if (_.every(this.state.children, function (child) {
			return child === true;
		})) {
			this.toggleColorOnIcon(true);
		} else {
			this.toggleColorOnIcon(false);
		}
	},
	checkChildrenValue: function checkChildrenValue(payload) {
		if (!_.isUndefined(this.state.children[payload.name])) {
			if (payload.value !== '') {
				this.setChild(payload.name, true);
			} else {
				this.setChild(payload.name, false);
			}
			this.checkForIconUp();
		}
	},
	componentWillMount: function componentWillMount() {
		event.on(event.types.register, this.registerChildren);
	},
	componentDidMount: function componentDidMount() {
		if (this.props.hidden) {
			this.handleClick();
		}
		event.on(event.types.valueChange, this.checkChildrenValue);
	},
	handleClick: function handleClick() {
		this.setState({ rotateDown: !this.state.rotateDown, hidden: !this.state.hidden });
		var $el = $(ReactDOM.findDOMNode(this));
		$el.find('.slideable').slideToggle();
	},
	render: function render() {
		var leftIcon = "fa pull-left text-left left-icon ";
		leftIcon += this.props.icon ? this.props.icon : 'fa-user';
		var rightIcon = "fa fa-chevron-up pull-right text-right rotate slide-toggle right-icon ";
		rightIcon += this.state.rotateDown ? 'down' : '';
		if (this.state.color) {
			leftIcon += " form-icon-left-color";
		} else {
			leftIcon += "";
		}
		return React.createElement(
			'div',
			{ className: 'slider-form' },
			React.createElement(
				'div',
				{ className: 'iconmenu', onClick: this.handleClick, style: { cursor: 'pointer' } },
				React.createElement('i', { className: leftIcon }),
				React.createElement('i', { className: rightIcon })
			),
			React.createElement(
				'div',
				{ className: 'slideable clearfix ' },
				React.createElement(
					'div',
					{ className: 'iconmenu-active clearfix' },
					this.props.children
				)
			)
		);
	}
});

},{"./Event":2}],19:[function(require,module,exports){
'use strict';

var ReactDOM = window.ReactDOM;
var $ = window.jQuery;

var Container = require('./Container');
var Progress = require('./Progress');
var SliderForm = require('./SliderForm');
var InputRow = require('./InputRow');
var SelectRow = require('./SelectRow');
var SelectOption = require('./SelectOption');
var RadioRow = require('./RadioRow');
var Radio = require('./Radio');
var Row = require('./Row');
var MultiplyRows = require('./MultiplyRows');
var Save = require('./Save');

module.exports = ReactDOM.render(React.createElement(
	Container,
	null,
	React.createElement(
		'h1',
		null,
		'Your profile has been created!'
	),
	React.createElement('hr', { className: 'hrClass' }),
	React.createElement(Progress, null),
	React.createElement(
		'p',
		null,
		'Please take a moment to complete your profile to receive invitations to events or job interviews that maches your interests and skills'
	),
	React.createElement(
		SliderForm,
		{ icon: 'fa-user', name: 'fa-user' },
		React.createElement(InputRow, { icon: 'fa-user', type: 'text', name: 'name', placeholder: 'Name', pattern: '^[a-zA-Z0-9\\\'-\\s\']+$', error: 'Please type correct name', registerWith: 'fa-user', value: Data.name || '' }),
		React.createElement(InputRow, { icon: 'fa-phone', type: 'text', name: 'phone', placeholder: 'Country code + phone number', registerWith: 'fa-user' }),
		React.createElement(
			SelectRow,
			{ id: 'nationality', name: 'nationality', icon: 'fa-flag', placeholder: 'Nationality', registerWith: 'fa-user' },
			React.createElement(
				SelectOption,
				null,
				'Slovak'
			),
			React.createElement(
				SelectOption,
				null,
				'Dutch'
			),
			React.createElement(
				SelectOption,
				null,
				'Another'
			)
		),
		React.createElement(InputRow, { icon: 'fa-venus-mars', type: 'text', name: 'gender', placeholder: 'Gender', registerWith: 'fa-user' }),
		React.createElement(InputRow, { icon: 'fa-map-marker', type: 'text', name: 'residence', placeholder: 'Residence', registerWith: 'fa-user' }),
		React.createElement(InputRow, { icon: 'fa-star', type: 'number', name: 'year-birth', placeholder: 'Year of birth', min: '1960', max: '2015', registerWith: 'fa-user' }),
		React.createElement(
			RadioRow,
			{ label: 'Subscribe', name: 'subscribe', label: 'Subscribe me to the Newletter?' },
			React.createElement(
				Radio,
				{ selected: '1' },
				'Yes'
			),
			React.createElement(
				Radio,
				null,
				'No'
			)
		),
		React.createElement(Row, null)
	),
	React.createElement(
		SliderForm,
		{ hidden: '1', icon: 'fa-file-text' },
		React.createElement(
			'p',
			{ className: 'text-align-left' },
			'Uploaded CVs'
		),
		React.createElement(
			MultiplyRows,
			{ max: '2' },
			React.createElement(InputRow, { icon: 'fa-check', type: 'file', accept: 'application/pdf', name: 'cv', placeholder: 'filename1.pdf' })
		)
	),
	React.createElement(
		SliderForm,
		{ hidden: '1', icon: 'fa-graduation-cap', name: 'fa-graduation-cap' },
		React.createElement(
			MultiplyRows,
			{ max: '3' },
			React.createElement(InputRow, { type: 'text', label: 'Degree', name: 'degree-type', placeholder: 'Type', registerWith: 'fa-graduation-cap' }),
			React.createElement(InputRow, { type: 'text', name: 'school', placeholder: 'Insert school', registerWith: 'fa-graduation-cap' }),
			React.createElement(InputRow, { type: 'number', name: 'graduation-year', placeholder: 'Graduation Year', min: '1980', max: '2015', registerWith: 'fa-graduation-cap' }),
			React.createElement(InputRow, { type: 'text', name: 'degree-type', placeholder: 'Degree Type', registerWith: 'fa-graduation-cap' }),
			React.createElement(InputRow, { type: 'text', name: 'field', placeholder: 'Field', registerWith: 'fa-graduation-cap' })
		)
	),
	React.createElement(
		SliderForm,
		{ hidden: '1', icon: 'fa-briefcase', name: 'fa-briefcase' },
		React.createElement(
			SelectRow,
			{ id: 'years-experience', name: 'years-experience', label: 'Years of experience after graduation', placeholder: 'Years', registerWith: 'fa-briefcase' },
			React.createElement(
				SelectOption,
				null,
				'1'
			),
			React.createElement(
				SelectOption,
				null,
				'2'
			),
			React.createElement(
				SelectOption,
				null,
				'3'
			),
			React.createElement(
				SelectOption,
				null,
				'4'
			),
			React.createElement(
				SelectOption,
				null,
				'More'
			)
		),
		React.createElement(InputRow, { type: 'text', name: 'field', placeholder: 'Insert your current employer', label: 'My current employer is:', registerWith: 'fa-briefcase' }),
		React.createElement(InputRow, { type: 'text', name: 'do-not-show', placeholder: 'Insert companies you dont want to share data with', label: 'I don\'t want to show my CV to:', registerWith: 'fa-briefcase' }),
		React.createElement(
			MultiplyRows,
			{ max: '5' },
			React.createElement(InputRow, { type: 'text', name: 'worked-for', placeholder: 'Choose an Industry', label: 'Industries I have worked in', registerWith: 'fa-briefcase' }),
			React.createElement(InputRow, { type: 'text', name: 'worked-for-field', placeholder: 'Field', registerWith: 'fa-briefcase' }),
			React.createElement(
				SelectRow,
				{ id: 'years-experience', name: 'worked-for-years-experience', placeholder: 'Years', registerWith: 'fa-briefcase' },
				React.createElement(
					SelectOption,
					null,
					'1'
				),
				React.createElement(
					SelectOption,
					null,
					'2'
				),
				React.createElement(
					SelectOption,
					null,
					'3'
				),
				React.createElement(
					SelectOption,
					null,
					'More'
				)
			),
			React.createElement(InputRow, { type: 'text', name: 'covered-function', placeholder: 'Choose a function', label: 'Functions I have covered', registerWith: 'fa-briefcase' }),
			React.createElement(InputRow, { type: 'text', name: 'covered-field', placeholder: 'Field', registerWith: 'fa-briefcase' }),
			React.createElement(
				SelectRow,
				{ id: 'coveredyears-experience', name: 'worked-for-years-experience', placeholder: 'Years', registerWith: 'fa-briefcase' },
				React.createElement(
					SelectOption,
					null,
					'1'
				),
				React.createElement(
					SelectOption,
					null,
					'2'
				),
				React.createElement(
					SelectOption,
					null,
					'3'
				),
				React.createElement(
					SelectOption,
					null,
					'More'
				)
			)
		)
	),
	React.createElement(
		SliderForm,
		{ hidden: '1', icon: 'fa-globe', name: 'fa-globe' },
		React.createElement(
			MultiplyRows,
			{ max: '7' },
			React.createElement(
				SelectRow,
				{ id: 'language', name: 'language', placeholder: 'Choose', registerWith: 'fa-globe' },
				React.createElement(
					SelectOption,
					null,
					'French'
				),
				React.createElement(
					SelectOption,
					null,
					'Dutch'
				),
				React.createElement(
					SelectOption,
					null,
					'English'
				),
				React.createElement(
					SelectOption,
					null,
					'Another'
				)
			),
			React.createElement(InputRow, { type: 'text', name: 'lang-level', placeholder: 'Level', registerWith: 'fa-globe' })
		)
	),
	React.createElement(
		SliderForm,
		{ hidden: '1', icon: 'fa-heart', name: 'fa-heart' },
		React.createElement(
			MultiplyRows,
			null,
			React.createElement(InputRow, { type: 'text', name: 'industry-work', placeholder: 'Choose an industry', label: 'Industries I would like to work in', registerWith: 'fa-heart' }),
			React.createElement(InputRow, { type: 'text', name: 'industry-field', placeholder: 'Field', registerWith: 'fa-heart' })
		),
		React.createElement(
			MultiplyRows,
			{ max: '5' },
			React.createElement(InputRow, { type: 'text', name: 'function-work', placeholder: 'Choose an function', label: 'Functions I would like to work cover', registerWith: 'fa-heart' }),
			React.createElement(InputRow, { type: 'text', name: 'function-field', placeholder: 'Field', registerWith: 'fa-heart' })
		)
	),
	React.createElement(Save, null)
), document.getElementById('app-container'));

},{"./Container":1,"./InputRow":6,"./MultiplyRows":9,"./Progress":10,"./Radio":11,"./RadioRow":12,"./Row":13,"./Save":14,"./SelectOption":16,"./SelectRow":17,"./SliderForm":18}]},{},[19]);
