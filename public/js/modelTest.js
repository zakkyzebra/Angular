"use strict";

(function() {
    var app = angular.module("modelTest", []);


    app.controller("UsersController", function(){
    	this.newUser 	= {};
    	this.users 		= [];
    	
    	this.addUser = function (){
    		this.users.push(this.newUser);
	    	this.newUser 	= {};
    	};
    });


})();
