var $ = window.jQuery;
var ReactDOM = window.ReactDOM;
var _ = window._;
var event = require('../Event');


var validatables = {};
var required = {};

var registerValidatable = function (v, name) {
	validatables[name] = v;
	
}
var registerRequired = function(v, name) {
	required[name] = v;
}

module.exports = {		
	propTypes : {
		name : React.PropTypes.string.isRequired
	},
	checkForChildrenErrors : function (payload) {
		// save pressed
		_.each(validatables, function (child) {
			var child = validatables[i];
			if (child && child.props.pattern) {
				child.checkForError()					
			}
		});
	}, 
	componentDidMount : function () {		
		var self = this;

		event.emmit(event.types.register, { name:this.props.registerWith || false, childName : this.props.name, child:this });

		registerValidatable(this, this.props.name);
		if (this.props.required) {
			registerRequired(this, this.props.name);
		}
		event.on(event.types.onSave, this.checkForChildrenErrors);
		event.on(event.types.containerDidMount, function(){
			if (self.props.value) {
				self.handleChange();
			}
		})		
	},
	handleChange : function(e) {
		event.emmit(event.types.valueChange, {name:this.props.name, value : this.getValue()});				
	},
	getValue : function() {
		var $el = $(ReactDOM.findDOMNode(this));
		var input = $el.find('input');
		return $(input).context.value;
	},
	checkForError : function () {
		var $el = $(ReactDOM.findDOMNode(this));
		var input = $el.find('input');
		var select = $el.find('input');
		if (input) {
			var regex = new RegExp(this.props.pattern);
			if(!input.context.value.match(regex)) {
				var state = this.state;
				state["$error"] = true;
				this.setState(state);
			} else {
				var state = this.state;
				state["$error"] = false;
				this.setState(state);
			}
		} else if (select) {

		}
	}
}