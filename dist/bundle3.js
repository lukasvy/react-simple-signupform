(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var React = window.React;

module.exports = React.createClass({
	displayName: "exports",

	componentDidMount: function componentDidMount() {},
	render: function render() {
		return React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "container container-table" },
				React.createElement(
					"div",
					{ className: "row vertical-center-row" },
					React.createElement(
						"div",
						{ className: "text-center col-md-5 col-md-offset-3 push-top" },
						this.props.children
					)
				)
			)
		);
	}
});

},{}],2:[function(require,module,exports){
'use strict';

var ReactDOM = window.ReactDOM;
var $ = window.jQuery;

var Container = require('./Container');

module.exports = ReactDOM.render(React.createElement(
  'div',
  { className: 'container container-table', style: { 'margin-top': '200px' } },
  React.createElement(
    'div',
    { className: 'row vertical-center-row' },
    React.createElement(
      'div',
      { className: 'text-center col-md-5 col-md-offset-3' },
      React.createElement(
        'h1',
        null,
        'Thank you!'
      ),
      React.createElement(
        'p',
        null,
        'You can edit your profile anytime from ',
        React.createElement(
          'a',
          { href: '#' },
          'here'
        )
      ),
      React.createElement(
        'div',
        { className: 'row push-top ' },
        React.createElement(
          'button',
          { type: 'button', className: 'btn-primary action-button animate' },
          'Thanks, I\'m done for now'
        )
      )
    )
  )
), document.getElementById('app-container'));

},{"./Container":1}]},{},[2]);
