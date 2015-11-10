var React = window.React;
var event = require('./Event');

module.exports = React.createClass({		
	handleClick : function (e) {
		e.preventDefault();
		event.emmit(event.types.onSave, true);
	},
	render : function() {
		var label = this.props.label ? this.props.label : 'Save';
		return (
			<div className="row push-top ">
				<button type="button" onClick={this.handleClick} className="btn-primary action-button animate">{label}</button>
			</div>
		)
	}
});