(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);
},{}],2:[function(require,module,exports){
'use strict';

var React = window.React;

module.exports = React.createClass({
	displayName: 'exports',

	componentDidMount: function componentDidMount() {},
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

},{}],3:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var accept = require('attr-accept');

var Dropzone = (function (_React$Component) {
	_inherits(Dropzone, _React$Component);

	function Dropzone(props, context) {
		_classCallCheck(this, Dropzone);

		_get(Object.getPrototypeOf(Dropzone.prototype), 'constructor', this).call(this, props, context);
		this.onClick = this.onClick.bind(this);
		this.onDragEnter = this.onDragEnter.bind(this);
		this.onDragLeave = this.onDragLeave.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.onDrop = this.onDrop.bind(this);

		this.state = {
			isDragActive: false
		};
	}

	_createClass(Dropzone, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.enterCounter = 0;
		}
	}, {
		key: 'allFilesAccepted',
		value: function allFilesAccepted(files) {
			var _this = this;

			return files.every(function (file) {
				return accept(file, _this.props.accept);
			});
		}
	}, {
		key: 'onDragEnter',
		value: function onDragEnter(e) {
			e.preventDefault();

			// Count the dropzone and any children that are entered.
			++this.enterCounter;

			// This is tricky. During the drag even the dataTransfer.files is null
			// But Chrome implements some drag store, which is accesible via dataTransfer.items
			var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

			// Now we need to convert the DataTransferList to Array
			var itemsArray = Array.prototype.slice.call(dataTransferItems);
			var allFilesAccepted = this.allFilesAccepted(itemsArray);

			this.setState({
				isDragActive: allFilesAccepted,
				isDragReject: !allFilesAccepted
			});

			if (this.props.onDragEnter) {
				this.props.onDragEnter(e);
			}
		}
	}, {
		key: 'onDragOver',
		value: function onDragOver(e) {
			e.preventDefault();
		}
	}, {
		key: 'onDragLeave',
		value: function onDragLeave(e) {
			e.preventDefault();

			// Only deactivate once the dropzone and all children was left.
			if (--this.enterCounter > 0) {
				return;
			}

			this.setState({
				isDragActive: false,
				isDragReject: false
			});

			if (this.props.onDragLeave) {
				this.props.onDragLeave(e);
			}
		}
	}, {
		key: 'onDrop',
		value: function onDrop(e) {
			e.preventDefault();

			// Reset the counter along with the drag on a drop.
			this.enterCounter = 0;

			this.setState({
				isDragActive: false,
				isDragReject: false
			});

			var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
			var max = this.props.multiple ? droppedFiles.length : 1;
			var files = [];

			for (var i = 0; i < max; i++) {
				var file = droppedFiles[i];
				file.preview = window.URL.createObjectURL(file);
				files.push(file);
			}

			if (this.props.onDrop) {
				this.props.onDrop(files, e);
			}

			if (this.allFilesAccepted(files)) {
				if (this.props.onDropAccepted) {
					this.props.onDropAccepted(files, e);
				}
			} else {
				if (this.props.onDropRejected) {
					this.props.onDropRejected(files, e);
				}
			}
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			if (!this.props.disableClick) {
				//this.open();
				if (this.props.onClick) {
					this.props.onClick(files, e);
				} else {
					this.open();
				}
			}
		}
	}, {
		key: 'open',
		value: function open() {
			// var fileInput = this.refs.fileInput;
			// fileInput.value = null;
			// fileInput.click();
		}
	}, {
		key: 'render',
		value: function render() {
			var className, style, activeStyle;

			if (this.props.className) {
				className = this.props.className;
				if (this.state.isDragActive && this.props.activeClassName) {
					className += ' ' + this.props.activeClassName;
				}
				if (this.state.isDragReject && this.props.rejectClassName) {
					className += ' ' + this.props.rejectClassName;
				}
			}

			if (this.props.style || this.props.activeStyle) {
				if (this.props.style) {
					style = this.props.style;
				}
				if (this.props.activeStyle) {
					activeStyle = this.props.activeStyle;
				}
			} else if (!className) {}

			var appliedStyle;
			if (activeStyle && this.state.isDragActive) {
				appliedStyle = _extends({}, style, activeStyle);
			} else {
				appliedStyle = _extends({}, style);
			}

			return React.createElement(
				'div',
				{
					className: className,
					style: appliedStyle,
					onClick: this.onClick,
					onDragEnter: this.onDragEnter,
					onDragOver: this.onDragOver,
					onDragLeave: this.onDragLeave,
					onDrop: this.onDrop
				},
				this.props.children,
				React.createElement('input', {
					type: 'file',
					ref: 'fileInput',
					style: { display: 'none' },
					multiple: this.props.multiple,
					accept: this.props.accept,
					onChange: this.onDrop
				})
			);
		}
	}]);

	return Dropzone;
})(React.Component);

Dropzone.defaultProps = {
	disableClick: false,
	multiple: true
};

Dropzone.propTypes = {
	onDrop: React.PropTypes.func,
	onDropAccepted: React.PropTypes.func,
	onDropRejected: React.PropTypes.func,
	onDragEnter: React.PropTypes.func,
	onDragLeave: React.PropTypes.func,

	style: React.PropTypes.object,
	activeStyle: React.PropTypes.object,
	className: React.PropTypes.string,
	activeClassName: React.PropTypes.string,
	rejectClassName: React.PropTypes.string,

	disableClick: React.PropTypes.bool,
	multiple: React.PropTypes.bool,
	accept: React.PropTypes.string
};

module.exports = Dropzone;

},{"attr-accept":1}],4:[function(require,module,exports){
'use strict';

var React = window.React;
var ReactDOM = window.ReactDOM;
var Dropzone = require('./Dropzone');
var $ = window.jQuery;

module.exports = React.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return { files: [], fileAdded: false, wrongFile: false };
  },
  acceptFile: function acceptFile(file) {
    var fileInput = this.refs.fileInput;
    if (file.type === "application/pdf" && file.size < 800000) {
      return true;
    } else {
      fileInput.value = '';
      return false;
    }
  },
  sendFiles: function sendFiles(files, callback) {
    var data = new FormData();
    $.each(files, function (key, value) {
      data.append(key, value);
    });
    return $.ajax({
      url: this.props.upload,
      type: "POST",
      data: data,
      processData: false,
      contentType: false,
      success: function success() {
        callback();
      }

    });
  },
  onDrop: function onDrop(files) {
    if (this.acceptFile(files[0]) && this.props.upload) {
      var req = this.sendFiles(files, function () {
        this.setState({ files: [file], fileAdded: true, wrongFile: false });
      });
      if (req && req.statusText == "error") {
        this.setState({ files: [], fileAdded: false, wrongFile: true });
      }
    } else {
      this.setState({ files: [], fileAdded: false, wrongFile: true });
    }
  },
  onClick: function onClick(e) {
    e.preventDefault();
    var fileInput = this.refs.fileInput;
    fileInput.value = null;
    fileInput.click();
  },
  getNameOfDocument: function getNameOfDocument() {
    if (this.state.files.length) {
      return React.createElement(
        'p',
        null,
        this.state.files[0].name
      );
    } else {
      return React.createElement('p', null);
    }
  },
  componentDidMount: function componentDidMount() {
    var $el = $(ReactDOM.findDOMNode(this));
    var input = $el.find('input');
    var self = this;
    $(input).bind('change', function () {
      if (self.acceptFile(this.files[0])) {
        self.setState({ files: this.files, fileAdded: true, wrongFile: false });
      }
    });
  },
  render: function render() {
    var dropText = 'Drop your CV here or click to upload';
    if (this.state.fileAdded) {
      dropText = '';
    };
    var iconClass = "fa fa-cloud-upload fa-5x";
    if (this.state.wrongFile) {
      iconClass += " wobble animated";
    } else if (this.state.uploading) {
      iconClass = "fa fa-spinner fa-spin fa-5x ";
    } else if (this.state.fileAdded) {
      iconClass = "fa fa-check fa-5x bounceIn animated";
    }
    var fileInput = this.refs.fileInput;
    return React.createElement(
      'span',
      null,
      React.createElement('input', { type: 'file', style: { display: 'none' }, name: this.props.name, ref: 'fileInput', accept: 'application/pdf' }),
      React.createElement(
        'div',
        { onClick: this.onClick },
        React.createElement(
          Dropzone,
          { onDrop: this.onDrop, multiple: false },
          React.createElement(
            'div',
            { className: 'row img-thumbnail upload sortable', style: { width: '100%', cursor: 'pointer' } },
            React.createElement('i', { className: iconClass }),
            ' ',
            React.createElement(
              'h3',
              { className: 'upload-button' },
              dropText
            ),
            React.createElement(
              'p',
              { className: 'cvformat' },
              'PDF format - max. 800KB'
            ),
            this.getNameOfDocument()
          )
        )
      )
    );
  }
});

},{"./Dropzone":3}],5:[function(require,module,exports){
'use strict';

var $ = window.jQuery;
var eventTypes = require('./EventTypes');

(function (module, $) {
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
})(module, $);

},{"./EventTypes":6}],6:[function(require,module,exports){
'use strict';

var eventTypes = ['progressChange', 'onSave', 'register'];

var object = {};
for (var i = 0; i < eventTypes.length; i++) {
	object[eventTypes[i]] = eventTypes[i];
}

module.exports = object;

},{}],7:[function(require,module,exports){
"use strict";

var React = window.React;

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    var iconClass = "fa vcenter form-icon-left ";
    iconClass += this.props.icon ? this.props.icon : "";
    return React.createElement(
      "div",
      { className: "iconmenu-row clearfix" },
      React.createElement(
        "span",
        { className: "col-xs-1 text-center" },
        React.createElement("i", { className: iconClass })
      ),
      React.createElement(
        "span",
        { className: "col-xs-10 form-icon-right" },
        this.props.children
      )
    );
  }
});

},{}],8:[function(require,module,exports){
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

},{"./Mixins/ValidateFormMixin":10}],9:[function(require,module,exports){
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

		var other = _objectWithoutProperties(_props, ['icon', 'label']);

		if (label) {
			return React.createElement(
				Row,
				null,
				React.createElement(
					'p',
					{ className: 'text-align-left ' },
					label
				),
				React.createElement(Input, _extends({ full: '1' }, other))
			);
		} else if (icon) {
			return React.createElement(
				IconRow,
				{ icon: icon },
				React.createElement(Input, other)
			);
		} else {
			return React.createElement(
				Row,
				null,
				React.createElement(Input, _extends({ full: '1' }, other))
			);
		}
	}
});

},{"./IconRow":7,"./Input":8,"./Row":11}],10:[function(require,module,exports){
'use strict';

var $ = window.jQuery;
var event = require('../Event');
var ReactDOM = window.ReactDOM;
var _ = window._;

(function (module, $, event, _, React, ReactDOM) {
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
		componentDidMount: function componentDidMount() {
			if (this.props.registerWith) {
				event.emmit(event.types.register, { name: this.props.registerWith, childName: this.props.name, child: this });
			}
			registerValidatable(this, this.props.name);
			if (this.props.required) {
				registerRequired(this, this.props.name);
			}
			event.on(event.types.onSave, function (payload) {
				// save pressed
				_.each(validatables, function (child) {
					var child = validatables[i];
					if (child && child.props.pattern) {
						child.checkForError();
					}
				});
			});
		},
		handleChange: function handleChange(e) {
			if (e.target.value) {
				required[e.target.name] = true;
			} else {
				required[e.target.name] = false;
			}
			var index = 0;
			var all = 0;
			$.each(required, function (i, o) {
				if (o === true) {
					index++;
				}
				all++;
			});
			event.emmit(event.types.progressChange, Math.floor(index / all * 100));
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
})(module, $, event, _, React, ReactDOM);

},{"../Event":5}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"./Event":5}],13:[function(require,module,exports){
'use strict';

var ReactDOM = window.ReactDOM;
var $ = window.jQuery;

var Container = require('./Container');
var Save = require('./Save');
var InputRow = require('./InputRow');
var DropzoneDrop = require('./DropzoneDrop');
var IconRow = require('./IconRow');
var Input = require('./Input');
var Row = require('./Row');

module.exports = ReactDOM.render(React.createElement(
	Container,
	null,
	React.createElement(
		'h1',
		null,
		'Create your Career Profile!'
	),
	React.createElement('hr', { className: 'hrClass' }),
	React.createElement('p', null),
	React.createElement(InputRow, { placeholder: 'E-mail', name: 'email' }),
	React.createElement('p', null),
	React.createElement(
		'div',
		{ className: 'row clearfix' },
		React.createElement(
			'span',
			{ className: 'col-xs-6' },
			React.createElement('input', { type: 'password', name: 'first-name', className: 'form-control row-input', placeholder: 'First name' })
		),
		React.createElement(
			'span',
			{ className: 'col-xs-6' },
			React.createElement('input', { type: 'password', name: 'surname', className: 'form-control row-input', placeholder: 'Surname' })
		)
	),
	React.createElement(InputRow, { placeholder: 'Password', type: 'password', name: 'password' }),
	React.createElement('br', null),
	React.createElement(DropzoneDrop, { name: 'cvs', upload: 'cvupload.html' }),
	React.createElement('p', null),
	React.createElement(
		'p',
		{ className: 'tips NB' },
		'NB: a CV is required, but you can also add it later. '
	),
	React.createElement(
		'p',
		{ className: 'tips' },
		'Questions? Contact us at ',
		React.createElement(
			'a',
			{ href: 'mailto:info@careersinternational.com', title: 'support' },
			'info@careersinternational.com'
		)
	),
	React.createElement('p', null),
	React.createElement('iframe', { frameBorder: '0', hspace: '0', marginHeight: '0', marginWidth: '0', scrolling: 'no', tabIndex: '0', vspace: '0', width: '304', title: 'recaptcha widget', role: 'presentation', height: '78', id: 'I0_1445946779032', name: 'I0_1445946779032', src: 'https://www.google.com/recaptcha/api2/anchor?k=6Le1dQ4TAAAAALZWsH56beyZ8KcJPRL_-aUW1ItA&co=ZmlsZTo.&hl=en&v=r20151013164303&size=normal&usegapi=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.n0nwg5Ns4n8.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Ft%3Dzcms%2Frs%3DAGLTcCM0sL1N3pOv6TdlcJPARJC2zeCz_A#id=I0_1445946779032&parent=file%3A%2F%2F&pfname=&rpctoken=20708956' }),
	React.createElement(Save, { label: 'Create' }),
	React.createElement(
		'p',
		{ className: 'tips' },
		'By clicking "create" you agree to our ',
		React.createElement(
			'a',
			{ href: 'http://www.careersinternational.com/disclaimer.html', target: '_blank', title: 'disclaimer' },
			'General Terms and Conditions'
		),
		'.'
	)
), document.getElementById('app-container'));

},{"./Container":2,"./DropzoneDrop":4,"./IconRow":7,"./Input":8,"./InputRow":9,"./Row":11,"./Save":12}]},{},[13]);
