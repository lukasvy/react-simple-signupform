var React = window.React;
var event = require('./Event');

module.exports = React.createClass({
	componentDidMount : function () {
		event.emmit(event.types.containerDidMount, true);
	},
	render : function() {
		var action = this.props.action || '';
		var method = this.props.method || 'POST';
		return (
			<form action={action} method={method}>
				<div className="container container-table">
	                <div className="row vertical-center-row">
	                    <div className="text-center col-md-5 col-md-offset-3 push-top">
	                    	{this.props.children}
	                    </div>
	                </div>
	            </div>
            </form>
        )
	}
})