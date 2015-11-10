var ReactDOM = window.ReactDOM;
var $ = window.jQuery;

var Container = require('./Container');
var Save = require('./Save');
var InputRow = require('./InputRow');
var DropzoneDrop = require('./DropzoneDrop');
var IconRow = require('./IconRow');
var Input = require('./Input');
var Row = require('./Row');

module.exports = ReactDOM.render(
	<Container>
		<h1>Create your Career Profile!</h1>
		<hr className="hrClass" />			
		<p></p>
		<InputRow placeholder="E-mail" name="email"/>
		<p></p>
		<div className="row clearfix">
			<span className="col-xs-6">
	          <input type="password" name="first-name" className="form-control row-input" placeholder="First name" />
	        </span>
	        <span className="col-xs-6">
	          <input type="password" name="surname" className="form-control row-input" placeholder="Surname" />
	        </span>
	    </div>
		<InputRow placeholder="Password" type="password" name="password"/>
		<br/>
		<DropzoneDrop name="cvs" upload="cvupload.html"/>
		<p></p>
		<p className="tips NB">NB: a CV is required, but you can also add it later. </p><p className="tips">Questions? Contact us at <a href="mailto:info@careersinternational.com" title="support" >info@careersinternational.com</a></p>
		<p></p>
		<iframe frameBorder="0" hspace="0" marginHeight="0" marginWidth="0" scrolling="no" tabIndex="0" vspace="0" width="304" title="recaptcha widget" role="presentation" height="78" id="I0_1445946779032" name="I0_1445946779032" src="https://www.google.com/recaptcha/api2/anchor?k=6Le1dQ4TAAAAALZWsH56beyZ8KcJPRL_-aUW1ItA&amp;co=ZmlsZTo.&amp;hl=en&amp;v=r20151013164303&amp;size=normal&amp;usegapi=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.n0nwg5Ns4n8.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Ft%3Dzcms%2Frs%3DAGLTcCM0sL1N3pOv6TdlcJPARJC2zeCz_A#id=I0_1445946779032&amp;parent=file%3A%2F%2F&amp;pfname=&amp;rpctoken=20708956"></iframe>
		<Save label="Create"/>
		<p className="tips">By clicking "create" you agree to our <a href="http://www.careersinternational.com/disclaimer.html" target="_blank" title="disclaimer">General Terms and Conditions</a>.</p>
    </Container>,
    document.getElementById('app-container')
  );