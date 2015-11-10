var React = window.React;
var ValidateFormMixin = require('./Mixins/ValidateFormMixin');
var event = require('./Event');

module.exports = React.createClass({
	mixins: [ValidateFormMixin], // Use the mixin
	getInitialState : function () {
		return {value : ''}
	},
	getDefaultProps: function() {
	    return {
	      placeholder: 'Please select'
	    };
	},
	propTypes: {
		name : React.PropTypes.string.isRequired,
		id 	 : React.PropTypes.string.isRequired
	},
	onSelectHandle : function(child) {
		if (child !== this.props.placeholder) {
			this.setState({value:child});
			event.emmit(event.types.valueChange, {name:this.props.name, value : child});
		}
	},
	renderChildren : function () {
		var self = this;
		return React.Children.map(this.props.children, function(child) {
			return React.cloneElement(child, {
	          	onSelect : self.onSelectHandle
	        });
		});
	},
	render : function() {			
		var cl = "btn btn-default dropdown-toggle newdropdown row-input ";
		cl += this.props.full ? "full-length" : "";
		var cl2 = "dropdown-menu ";
		cl2 += this.props.full ? "full-length" : "";
		var value = this.state.value ? this.state.value : this.props.placeholder;
		return (
			<div className="dropdown ">
                <button className={cl} type="button" id={this.props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="dropdownlabel pull-left">{value}</span>
                    <input type="hidden" name={this.props.name} value={this.state.value} />
                    <span className="pull-right"><i className="fa fa-caret-down"></i></span>
                </button>
                <ul className={cl2} aria-labelledby={this.props.id}>
                    {this.renderChildren()}
                </ul>
            </div>
		)
	}
});