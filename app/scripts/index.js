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


/////// API demonstration with SWAPI
//$.ajax('https://swapi.co/api...').done(function(data){
//
//   var planetList = data.results;
//   displayPlanets(planetList):
//
// })
//
// function displayPlanets(planetList){
//   var source = $().html();
//   var template = Handlebars.compile(source);
//
//   _.each(planetList, function(planet){
//
//     $('#planet-list').append(template(planet));
//   });
//
// }




/*
 * Ajax requests I will need to call
 */

// $.ajax('https://api.github.com/users/dylan-gregory')
// $.ajax('https://api.github.com/users/dylan-gregory/repos')
