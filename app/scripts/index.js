var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');
// require('bootstrap-sass');

// Send auth token to github if token is provided
//put it in gitIgnore file! ***************************
if (githubtoken !== undefined) {
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
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


$.ajax('https://api.github.com/users/dylan-gregory').done(function(info){
  console.log(info);
    var bioInfo = {
        avatar: info.avatar_url,
        email: info.email,
        login: info.login,
        location: info.location,
        name: info.name,
        bio: info.bio


      }

    displayBio(bioInfo);
    // console.log(data);
});

function displayBio(bioInfo){
  var source = $('#bio-temp').html();
  var template = Handlebars.compile(source);

  $('#left-bar').append(template(bioInfo));

};



// accessing repo API
$.ajax('https://api.github.com/users/dylan-gregory/repos').done(function(data){
  console.log(data);
    var repoList = data;
    displayRepos(repoList);
    // console.log(data);
});

// console.log(data);

function displayRepos(repoList){
  var source = $('#repo-template').html();
  var template = Handlebars.compile(source);

  _.each(repoList, function(repo){

    $('#repo-list').append(template(repo));
    // $('#email-box').append(template(email));

  })

};

//
// $.ajax('https://api.github.com/users/dylan-gregory/').done(function(data){
//   console.log(data);
//     var bioInfo = data;
//     displayRepos(bioInfo);
//     // console.log(data);
// })
//
// function displayRepos(bioInfo){
//   var source = $('#email-temp').html();
//   var template = Handlebars.compile(source);
//
//   _.each(bioInfo, function(context){
//
//       var context = {
//
//
//       }
//
//     // $('#email-box').append(template(email));
//
//   })
//
// }
