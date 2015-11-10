var React = window.React;
var Select = require('./Select');
var IconRow = require('./IconRow');
var Row = require('./Row');

module.exports = React.createClass({
	render : function () {
		var { icon, label, name, ...other } = this.props;
		if (label) {
			return (
				<span>
					<p className="text-align-left ">{label}</p>
					<Select name={name} {...other} full="1">{this.props.children}</Select>
				</span>
			);
		} else if (icon) {
			return (
				<IconRow icon={icon} name={name}>
					<Select name={name} {...other} >{this.props.children}</Select>
	        	</IconRow>
	        );
		} else {
			return (
				<Row name={name}><Select name={name} {...other} full="1">{this.props.children}</Select></Row>
			)
		}
	}
});