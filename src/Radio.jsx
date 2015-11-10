var React = window.React;

module.exports = React.createClass({		
	handleClick : function() {
		this.props.onSelect(this.props.children);
	},
	render : function () {
		var classType = this.props.selected ? 'form-icon-radio fa fa-circle' : 'form-icon-radio fa fa-circle-o';
		return (
			<label className="radio-inline" onClick={this.handleClick}>
				<i className={classType} /><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;"}}></span>
				{this.props.children}
			</label>
		)
	}
});

// <input type="radio" onClick={this.handleClick} name={this.props.name} value={this.props.children} onChange={this.handleChange} />{this.props.children}