"use strict";

/*
    signin.js
    Script for the signin.html page
    Handle the form submit and use Parse.User.logIn() to start an authenticated session
*/

//use jQuery to register a function that is called when the document is ready for manipulation

$(function(){
   $('.form-signin').submit(function(evt){
       evt.preventDefault();

       var email = $('#inputEmail').val();
       var password = $('#inputPassword').val();

       var addButton = $('btn-primary').find(':submit');
       addButton.prop('disabled', true).addClass('working');

       Parse.User.logIn(email, password).then(function(){
           clearError();
           window.location = 'index.html';
           addButton.prop('disabled', false).removeClass('working');
       }, function(err){
           showError(err);
           addButton.prop('disabled', false).removeClass('working');
       });
   });
});

