/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.GueseView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click #check-answer": "checkAnswer"
    },

    // the constructor
    initialize: function (options) {
      this.game = options.game;
    },
	
	checkAnswer: function (event) {
	event.stopPropagation();
	event.preventDefault();
	
	var newGuese = new APP.Models.GueseModel({
		rebus: this.game.getRelation('currentLevel'),
		guese: $('#guese').val(),
	});
	// update our model with values from the form
	var self= this;
	newGuese.save({}, {
		success: function(model, response){
			self.game.set({score : response.score});
		}
	});
      // redirect back to the index
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(Mustache.to_html($('#guese-tpl').html(), this.game.toJSON()));
      return this;
    }
  });
}());
