var $ = window.$ = window.Jquery = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');
require('bootstrap-sass');

// Send auth token to github if token is provided
//put it in gitIgnore file! ***************************
if (githubtoken !== undefined) {
  $.ajaxSetup({
    headers: {
      'Authorization': 'token' + githubtoken.token
    }
  });
}
