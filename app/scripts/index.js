var $ = window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');
require('bootstrap-sass');
var moment = require('moment');
moment().format();

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
        bio: info.bio,
        updated_at: info.updated_at

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
  // this puts them all in reverse order, sorted by date, so that you see the newest ones first
    var repoList = _.sortBy(data, function(o){ return o.created_at }).reverse();
    displayRepos(repoList);

    // console.log(data);
});

// console.log(data);

function displayRepos(repoList){
  var source = $('#repo-template').html();
  var template = Handlebars.compile(source);

  _.each(repoList, function(repo){
    repo.updated_at = moment(new Date(repo.updated_at)).fromNow();

    $('#repo-list').append(template(repo));
    // $('#email-box').append(template(email));

  })

};

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
});

// Will have to ajax call
$.ajax('https://api.github.com/users/dylan-gregory/orgs').done(function(data){
  console.log(data);
    var orgInfo = {
      avatar: data[0].avatar_url
    }
    console.log(data[0].avatar_url);
    displayOrgs(orgInfo);
    // console.log(data);
})

function displayOrgs(orgInfo){
  var source = $('#org-temp').html();
  var template = Handlebars.compile(source);



    $('#org-list').append(template(orgInfo));

};

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.avatar').tooltip('show');

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

// To use Moment.js for getting "time update" on each repo
//var time = moment(new Date(info.updated_at)).fromNow();
