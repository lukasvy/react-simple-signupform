var React = window.React;
var Row = require('./Row');
var IconRow = require('./IconRow');
var Input = require('./Input');

module.exports = React.createClass({
	render : function(){
		var { icon, label, name, ...other } = this.props;
		if (label) {
			return (
				<Row>
					<p className="text-align-left ">{label}</p>
					<Input name={name} full="1" {...other} />
				</Row>
			);
		} else if (icon) {
			return (
				<IconRow icon={icon} name={name}>
					<Input name={name} {...other} />
	        	</IconRow>
	        );
		} else {
			return (
				<Row>						
					<Input name={name} full="1" {...other} />
				</Row>
			)
		}
	}
});