var React = window.React;

module.exports = React.createClass({
	render : function(){ 
		return (
			<div className="iconmenu-row clearfix">
				{this.props.children}                                
            </div>
		)
	}
});