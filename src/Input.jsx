var React = window.React;
var ValidateFormMixin = require('./Mixins/ValidateFormMixin');

module.exports = React.createClass({
	mixins: [ValidateFormMixin], // Use the mixin
	render : function (){
		var { checked, full, ...other } = this.props;
		var cl = "col-xs-form form-control row-input ";
		cl += full ? "full-length" : "";
		//cl += this.state["$error"] ? " has-error " : "";
		return (
			<input {...other} className={cl} onChange={this.handleChange} />
		)
	}
});
