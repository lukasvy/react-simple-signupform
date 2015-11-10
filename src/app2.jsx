var ReactDOM = window.ReactDOM;
var $ = window.jQuery;

var Container = require('./Container');
var Progress = require('./Progress');
var SliderForm = require('./SliderForm');
var InputRow = require('./InputRow');
var SelectRow = require('./SelectRow');
var SelectOption = require('./SelectOption');
var RadioRow = require('./RadioRow');
var Radio = require('./Radio');
var Row = require('./Row');
var MultiplyRows = require('./MultiplyRows');
var Save = require('./Save');

module.exports = ReactDOM.render(
	<Container>
		<h1>Your profile has been created!</h1>
		<hr className="hrClass" />
		<Progress />
			<p>Please take a moment to complete your profile to receive invitations to events or job interviews that maches your interests and skills</p>
		<SliderForm icon="fa-user" name="fa-user">
        	<InputRow icon="fa-user" type="text" name="name" placeholder="Name" pattern="^[a-zA-Z0-9\'-\s']+$" error="Please type correct name" registerWith="fa-user" value={Data.name || ''}/>	        	
        	<InputRow icon="fa-phone" type="text" name="phone" placeholder="Country code + phone number" registerWith="fa-user"/>	        	
        	<SelectRow id="nationality" name="nationality" icon="fa-flag" placeholder="Nationality" registerWith="fa-user">
        		<SelectOption>Slovak</SelectOption>
        		<SelectOption>Dutch</SelectOption>
        		<SelectOption>Another</SelectOption>
        	</SelectRow>
        	<InputRow icon="fa-venus-mars" type="text" name="gender" placeholder="Gender" registerWith="fa-user"/>
        	<InputRow icon="fa-map-marker" type="text" name="residence" placeholder="Residence" registerWith="fa-user"/>	        	
        	<InputRow icon="fa-star" type="number" name="year-birth" placeholder="Year of birth" min="1960" max="2015" registerWith="fa-user"/>

        	<RadioRow label="Subscribe" name="subscribe" label="Subscribe me to the Newletter?" >
	        		<Radio selected="1">Yes</Radio>
	        		<Radio >No</Radio>
	        </RadioRow>  	
        	<Row></Row>
        </SliderForm>
        <SliderForm hidden="1" icon="fa-file-text">
			<p className="text-align-left">Uploaded CVs</p>
			<MultiplyRows max="2" >
				<InputRow icon="fa-check" type="file" accept="application/pdf" name="cv" placeholder="filename1.pdf" />
			</MultiplyRows>
		</SliderForm >
		<SliderForm hidden="1" icon="fa-graduation-cap" name="fa-graduation-cap">				
			<MultiplyRows max="3">
				<InputRow type="text" label="Degree" name="degree-type" placeholder="Type" registerWith="fa-graduation-cap"/>
				<InputRow type="text" name="school" placeholder="Insert school" registerWith="fa-graduation-cap" />
				<InputRow type="number" name="graduation-year" placeholder="Graduation Year" min="1980" max="2015" registerWith="fa-graduation-cap" />
				<InputRow type="text" name="degree-type" placeholder="Degree Type" registerWith="fa-graduation-cap"/>
				<InputRow type="text" name="field" placeholder="Field" registerWith="fa-graduation-cap"/>
			</MultiplyRows>
		</SliderForm>
		<SliderForm hidden="1" icon="fa-briefcase" name="fa-briefcase">				
			<SelectRow id="years-experience" name="years-experience" label="Years of experience after graduation" placeholder="Years" registerWith="fa-briefcase">
        		<SelectOption>1</SelectOption>
        		<SelectOption>2</SelectOption>
        		<SelectOption>3</SelectOption>
        		<SelectOption>4</SelectOption>
        		<SelectOption>More</SelectOption>
        	</SelectRow>
			<InputRow type="text" name="field" placeholder="Insert your current employer" label="My current employer is:" registerWith="fa-briefcase"/>
			<InputRow type="text" name="do-not-show" placeholder="Insert companies you dont want to share data with" label="I don't want to show my CV to:" registerWith="fa-briefcase"/>
	        <MultiplyRows max="5">
	        	<InputRow type="text" name="worked-for" placeholder="Choose an Industry" label="Industries I have worked in" registerWith="fa-briefcase" />
	        	<InputRow type="text" name="worked-for-field" placeholder="Field" registerWith="fa-briefcase" />
	        	<SelectRow id="years-experience" name="worked-for-years-experience" placeholder="Years" registerWith="fa-briefcase">
	        		<SelectOption>1</SelectOption>
	        		<SelectOption>2</SelectOption>
	        		<SelectOption>3</SelectOption>
	        		<SelectOption>More</SelectOption>
	        	</SelectRow>
	        	<InputRow type="text" name="covered-function" placeholder="Choose a function" label="Functions I have covered" registerWith="fa-briefcase"/>
	        	<InputRow type="text" name="covered-field" placeholder="Field" registerWith="fa-briefcase"/>
	        	<SelectRow id="coveredyears-experience" name="worked-for-years-experience" placeholder="Years" registerWith="fa-briefcase">
	        		<SelectOption>1</SelectOption>
	        		<SelectOption>2</SelectOption>
	        		<SelectOption>3</SelectOption>
	        		<SelectOption>More</SelectOption>
	        	</SelectRow>
        	</MultiplyRows>
		</SliderForm>
		<SliderForm hidden="1" icon="fa-globe" name="fa-globe">
			<MultiplyRows max="7">
				<SelectRow id="language" name="language" placeholder="Choose" registerWith="fa-globe">
	        		<SelectOption>French</SelectOption>
	        		<SelectOption>Dutch</SelectOption>
	        		<SelectOption>English</SelectOption>
	        		<SelectOption>Another</SelectOption>
	        	</SelectRow>
	        	<InputRow type="text" name="lang-level" placeholder="Level" registerWith="fa-globe" />
	        </MultiplyRows>
		</SliderForm>
		<SliderForm hidden="1" icon="fa-heart" name="fa-heart">
			<MultiplyRows>
				<InputRow type="text" name="industry-work" placeholder="Choose an industry" label="Industries I would like to work in" registerWith="fa-heart"/>
	        	<InputRow type="text" name="industry-field" placeholder="Field" registerWith="fa-heart"/>
	        </MultiplyRows>
	        <MultiplyRows max="5">
				<InputRow type="text" name="function-work" placeholder="Choose an function" label="Functions I would like to work cover" registerWith="fa-heart"/>
	        	<InputRow type="text" name="function-field" placeholder="Field" registerWith="fa-heart" />
	        </MultiplyRows>
		</SliderForm>
		<Save />
	</Container>,
	document.getElementById('app-container')
);