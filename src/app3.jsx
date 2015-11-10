var ReactDOM = window.ReactDOM;
var $ = window.jQuery;

var Container = require('./Container');

module.exports = ReactDOM.render(
	<div className="container container-table" style={{'margin-top':'200px'}}>
  <div className="row vertical-center-row">
    <div className="text-center col-md-5 col-md-offset-3">
      <h1>Thank you!</h1>
      <p>You can edit your profile anytime from <a href="#">here</a></p>
        <div className="row push-top ">
          <button type="button" className="btn-primary action-button animate">Thanks, I'm done for now</button>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById('app-container')
);