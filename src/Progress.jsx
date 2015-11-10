var React = window.React;
var event = require('./Event');
var _ = window._;

var progressable = {};

module.exports = React.createClass({
	getInitialState : function () {
		return {value:0, containerDidMount : false}
	},
	componentWillMount : function () {
		event.on(event.types.register, function(payload){
			progressable[payload.childName] = false;			
		});
	},
	componentDidMount : function () {
		var self = this;

		event.on(event.types.valueChange, function(payload) {
			var index = 0;
			var all = 0;
			if (payload.value !== '') {
				progressable[payload.name] = true;
			} else {
				progressable[payload.name] = false;
			}
			$.each(progressable, function(i,o){
				if (o === true) {
					index++;
				}
				all++;
			});
			self.updateProgress (Math.floor((index/ all) * 100));
		});
	},
	updateProgress : function  (value) {
		if (value >= 0 && value <= 100) {
			this.setState({value:value})
		}
	},
	render : function () {
		var divStyle = {
			width: this.state.value+"%"
		};
		return (
			<span>
				<p>Your profile is {this.state.value}% complete</p>
				<div className="progress">
					<div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={divStyle}>					 		
					</div>
				</div>
			</span>
		)
	}
});