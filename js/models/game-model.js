/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";

  window.APP = APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Models.GameModel = Backbone.Model.extend({
	url:"/games", 
    // the default fields
    defaults: {
      score: 50,
	  guese: ""
    },
    // the constructor
    initialize: function (options) {
		//this.score=options.score;
		//this.guese = options.guese;
    }
  });
  
  // define the collection in the same file
  window.APP.Collections = window.APP.Collections || {};
  window.APP.Collections.GameCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
	url:"/games",
    model: APP.Models.GameModel
  });
}());
