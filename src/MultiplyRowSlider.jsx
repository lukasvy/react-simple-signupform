var $ = window.jQuery;
var ReactDOM = window.ReactDOM;
var React = window.React;


module.exports = React.createClass({
	componentWillEnter : function (callback) {
		$(ReactDOM.findDOMNode(this)).stop(true).hide().slideDown({
            duration: 500,
            complete: function() { callback(); }
        });
	},
	componentWillLeave : function (callback) {
		$(ReactDOM.findDOMNode(this)).stop(true).slideUp({
            duration: 500,
            complete: function() { callback(); }
        });
	},
	render : function() {
		var self = this;
		return (
			<div className="clearfix">
				{
					React.Children.map(self.props.children, function(child) {
						return React.cloneElement(child, {
								name : child.props.name+self.props.index,
								id : child.props.id+self.props.index
							})
					})
				}
			</div>
		)
	}
});