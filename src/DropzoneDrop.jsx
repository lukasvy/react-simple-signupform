var React = window.React;
var ReactDOM = window.ReactDOM;
var Dropzone = require('./Dropzone');
var $ = window.jQuery;

module.exports = React.createClass({
	getInitialState : function () {
		return {files:[],fileAdded : false, wrongFile : false};
	},
	acceptFile : function (file) {
		var fileInput = this.refs.fileInput;
		if (file.type === "application/pdf" && file.size < 800000) {
    		return true;
    	} else {
    		fileInput.value = '';
    		return false;
    	}
	},
	sendFiles : function (files, callback) {
		var data = new FormData();
    	$.each(files, function(key, value)
	    {
	        data.append(key, value);
	    });
	    return $.ajax({
	        url: this.props.upload,
	        type: "POST",
	        data: data,
	        processData: false,
	        contentType: false,
	        success: function() {
	        	callback()
	        }

	    });
	},
    onDrop: function (files) {    	
    	if (this.acceptFile(files[0]) && this.props.upload) {
    		var req = this.sendFiles(files, function(){
    			this.setState({files:[file],fileAdded : true, wrongFile : false});    			
    		});	      
    		if (req && req.statusText == "error") {
    			this.setState({files:[], fileAdded : false, wrongFile : true});
    		} 
    	} else {
    		this.setState({files:[], fileAdded : false, wrongFile : true});
    	}
    },
    onClick : function (e) {
    	e.preventDefault();
    	var fileInput = this.refs.fileInput;
    	fileInput.value = null;
	    fileInput.click();
    },
    getNameOfDocument : function () {    	
    	if (this.state.files.length) {
    		return (<p>{this.state.files[0].name}</p>);
    	} else {
    		return (<p></p>);
    	}
    },
    componentDidMount : function () {
    	var $el = $(ReactDOM.findDOMNode(this));
		var input = $el.find('input');
		var self = this;
		$(input).bind('change', function() {
			if (self.acceptFile(this.files[0])) {
				self.setState({files:this.files, fileAdded : true, wrongFile : false});
			}
		});
    },
    render: function () {
    	var dropText = 'Drop your CV here or click to upload';
    	if (this.state.fileAdded) {
    		dropText = '';
    	};	
    	var iconClass = "fa fa-cloud-upload fa-5x";
     	if (this.state.wrongFile) {
     		iconClass += " wobble animated";
     	} else if (this.state.uploading) {
     		iconClass = "fa fa-spinner fa-spin fa-5x ";     		
     	} else if (this.state.fileAdded) {
     		iconClass = "fa fa-check fa-5x bounceIn animated";
     	}
     	var fileInput = this.refs.fileInput;
      	return (
      	  <span>
          <input type="file" style={{display:'none'}} name={this.props.name} ref="fileInput" accept="application/pdf"/>
          <div onClick={this.onClick}>
            <Dropzone onDrop={this.onDrop} multiple={false} >
              <div className="row img-thumbnail upload sortable" style={{width:'100%', cursor:'pointer'}}>        
	                <i className={iconClass}></i> <h3 className="upload-button">{dropText}</h3>  
	          		<p className="cvformat">PDF format - max. 800KB</p>
	          		{this.getNameOfDocument()}
	          </div>
            </Dropzone>
          </div>
          </span>
      );
    }
});