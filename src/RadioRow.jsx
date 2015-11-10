var React = window.React;
var ValidateFormMixin = require('./Mixins/ValidateFormMixin');
var $ = window.jQuery;

module.exports = React.createClass({
	mixins: [ValidateFormMixin], // Use the mixin
	getInitialSelectedValue : function () {
		var value = '';
		React.Children.forEach(this.props.children, function(child){
			if (child.props.selected) {
				value = child.props.children;
				return true;
			}
		});
		return value;
	},
	getInitialState : function () {
		return {selectedValue : this.getInitialSelectedValue()}
	},
	onSelect : function (value) {
		this.setState({selectedValue:value});
	},	
	renderChildren : function () {
		var self = this;
		return React.Children.map(this.props.children, function(child) {
			return React.cloneElement(child, {
	          	name : self.props.name,
	          	selected : (child.props.children === self.state.selectedValue) ? true : false,
	          	onSelect : self.onSelect
	        });
		});
	},
	render : function () {
		var selectedValue = this.state.selectedValue;
		return (
			<span>
				<p>{this.props.label}</p>
				<input type="hidden" name={this.props.name} value={selectedValue}/>
				<span className="form-group radio-group" >
					{this.renderChildren()}
				</span>
			</span>
		)
	}
});