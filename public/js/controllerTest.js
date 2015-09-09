"use strict";

(function() {
    var app = angular.module("controllerTest", []);

    app.controller("CartController", function(){
    	this.newItem 	= {};
    	this.item 		= [];
    	
    	this.addItem = function (){
    		this.item.push(this.newItem);
	    	this.newItem 	= {};
    	};
    });

})();