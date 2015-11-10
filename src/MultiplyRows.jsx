var React = window.React;
var ReactTransitionGroup = window.React.addons.TransitionGroup;
var MultiplyRowSlider = require('./MultiplyRowSlider');

module.exports = React.createClass({
	getInitialState : function () {
		return {times : 1, adding : false, animate : false}
	},
	add : function () {
		if (this.props.max) {
			if (this.state.times < this.props.max) {
				this.setState({times: ++this.state.times, adding : true, animate:true})
			}
		} else {
			this.setState({times: ++this.state.times, adding : true, animate:true})
		}
	},
	remove : function () {
		if (this.state.times > 1) {
			this.setState({times: --this.state.times, adding : false, animate:true})
		}
	},
	componentDidMount : function() {
		var state = this.state;
		state['animate'] = true;
		this.setState(state);
	},
	renderChildren : function (times) {
		var array = [];
		for (var i = 0 ; i < times; i++) {
			array.push(
				<MultiplyRowSlider key={i} index={i}>
					{this.props.children}
				</MultiplyRowSlider>
			);
		}
		return array;
	},
	render : function () {
		var minusClass = "fa fa-minus pull-right text-left add-sign";
		minusClass += this.state.times < 2 ?  " hidden" : "";
		var plusClass = "fa fa-plus pull-left text-left add-sign";
		if (this.props.max) {
			if (this.props.max <= this.state.times) {
				plusClass += ' hidden';
			}
		}
		return (
			<ReactTransitionGroup transitionName="transition" className="clearfix">
      			{this.renderChildren(this.state.times)}
				<i className={plusClass} onClick={this.add}></i>
				<i className={minusClass} onClick={this.remove}></i>
			</ReactTransitionGroup>
		)
	}
});
