var React = window.React;

module.exports = React.createClass({
	handleClick : function(e) {
		e.preventDefault();
		this.props.onSelect(this.props.children);
	},
	render : function(){
		return (
			<li><a href="#" onClick={this.handleClick}>{this.props.children}</a></li>
		)
	}
});