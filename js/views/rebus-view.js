/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.RebusView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click #check-answer": "checkAnswer"
    },

    // the constructor
    initialize: function (options) {
      this.rebus  = options.rebus;
    },
	
	checkAnswer: function (event) {
      event.stopPropagation();
      event.preventDefault();
	  
      // update our model with values from the form
      this.rebus.set({
        guese: $('#guese').val()
      });
      // we would save to the server here with 
      this.rebus.save();
      // redirect back to the index
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(Mustache.to_html($('#view-tpl').html(), this.rebus.toJSON()));
      return this;
    }
  });
}());
