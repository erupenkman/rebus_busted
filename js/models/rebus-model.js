/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";

  window.APP = APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Models.RebusModel = Backbone.RelationalModel.extend({
	url:"/rebuses", 
    // the default fields
    defaults: {
      imgSrc: "",
	  _id: 1,
    },
	relations: [{
		type: Backbone.HasOne,
		key: 'latestGuese',
		relatedModel: 'APP.Models.GueseModel',
		reverseRelation: {
			type: Backbone.HasOne,
			key: 'rebus',
			includeInJSON: '_id',
		},
	}],
    // the constructor
    initialize: function (options) {
    }
  });
  
  // define the collection in the same file
  window.APP.Collections = window.APP.Collections || {};
  window.APP.Collections.RebusCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
	url:"/rebuses",
    model: APP.Models.RebusModel
  });
}());
