/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";

  window.APP = APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Models.GueseModel = Backbone.RelationalModel.extend({
	urlRoot:"/guese/", 
    // the default fields
    defaults: {
		correct: false,
		guese: ""
    },
    // the constructor
    initialize: function (options) {
    }
  });
}());
