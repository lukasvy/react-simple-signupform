var React = window.React;
var $ = window.jQuery;
var ReactDOM = window.ReactDOM;
var event = require('./Event');
var _ = window._;

var children = {};

module.exports = React.createClass({
	getInitialState: function() {
	    return {rotateDown: false, hidden : false, color : false, children : {}};
	},
	registerChildren : function (payload) {		
		if (payload.name === this.props.name) {
			this.setChild(payload.childName, false);
			this.checkForIconUp();
		}
	},
	setChild : function (childName,value) {
		var children = this.state.children;
		children[childName] = value;
		this.setState(_.extend(this.state, {children : children}));
	},
	toggleColorOnIcon : function (value) {
		var self = this;		
		this.setState(_.extend(self.state,{color : value}));
	},
	checkForIconUp : function () {
		if (_.every(this.state.children, function(child){return child === true})) {
			this.toggleColorOnIcon(true);
		} else {
			this.toggleColorOnIcon(false);
		}
	},
	checkChildrenValue : function (payload) {
		if (!_.isUndefined(this.state.children[payload.name])) {	
			if (payload.value !== '') {
				this.setChild(payload.name, true);
			} else {
				this.setChild(payload.name, false);
			}
			this.checkForIconUp();		
		}
	},
	componentWillMount : function () {
		event.on(event.types.register, this.registerChildren);		
	},
	componentDidMount : function() {
		if (this.props.hidden) {
			this.handleClick();
		}		
		event.on(event.types.valueChange, this.checkChildrenValue);
	},
	handleClick : function() {
		this.setState({rotateDown: !this.state.rotateDown, hidden : !this.state.hidden});
		var $el = $(ReactDOM.findDOMNode(this));
		$el.find('.slideable').slideToggle();
	},
	render : function() {
		var leftIcon = "fa pull-left text-left left-icon ";
		leftIcon += this.props.icon ? this.props.icon : 'fa-user';
		var rightIcon = "fa fa-chevron-up pull-right text-right rotate slide-toggle right-icon ";
		rightIcon += this.state.rotateDown ? 'down' : '';
		if (this.state.color) {
			leftIcon += " form-icon-left-color";
		} else {
			leftIcon += "";
		}
		return (
			<div className="slider-form" >
				<div className="iconmenu" onClick={this.handleClick} style={{cursor:'pointer'}}>
                    <i className={leftIcon} ></i>
                    <i className={rightIcon} ></i>
                </div>
                <div className="slideable clearfix ">
                	<div className="iconmenu-active clearfix">
                		{this.props.children}
                	</div>
                </div>
			</div>
		)
	}
});