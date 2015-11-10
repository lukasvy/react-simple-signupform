var React = window.React;
var event = require('./Event');

module.exports = React.createClass({
	getInitialState : function () {
		return {ok:false};
	},
	onInputChange : function (payload) {
		if (payload.name === this.props.name) {
			if (payload.value !== '') {
				this.setState({ok:true});
			} else {
				this.setState({ok:false});
			}
		}
	},
	componentWillMount : function () {
		event.on(event.types.valueChange, this.onInputChange);
	},
	render : function() {
		var iconClass = "fa vcenter form-icon-left ";
		if (this.state.ok) {
			iconClass += " form-icon-left-color ";
		} else {
			iconClass += " form-icon-left ";
		}
		iconClass += this.props.icon ? this.props.icon : "";    		
		return (
			<div className="iconmenu-row clearfix">
                <span className="col-xs-1 text-center">
                	<i className={iconClass} ></i>
                </span>
                <span className="col-xs-10 form-icon-right">
                	{this.props.children}
                </span>
            </div>
		)
	}
});