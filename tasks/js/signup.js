"use strict";

/*
    signup.js
    Script for the signup.html page
    Handle the form submit and create a new Parse.User() for the new user account
 */

//use jQuery to register a function that is called when the document is ready for manipulation

$(function(){
    $('.form-signup').submit(function(evt){
        evt.preventDefault();

        var user = new Parse.User();
        user.set('username', $('#inputEmail').val());
        user.set('password', $('#inputPassword').val());
        user.set('firstName', $('#inputFName').val());
        user.set('lastName', $('#inputLName').val());

        var addButton = $('btn-primary').find(':submit');
        addButton.prop('disabled', true).addClass('working');

        user.signUp().then(function(){
            clearError();
            window.location = 'index.html';
            addButton.prop('disabled', false).removeClass('working');
        }, function(err){
            showError(err);
            addButton.prop('disabled', false).removeClass('working');
        });
    });
});