/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

//Hash Urls should behave statelessly so back/refresh works like magic
(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.RebusRouter = Backbone.Router.extend({
    routes: {
		'rebus/:id': 'view',
		'*path' : 'index'
    },

    initialize: function (options) {
		this.allRebus =  new APP.Collections.RebusCollection();
		this.allRebus.fetch({success: (function(){
			Backbone.history.start();
		}).bind(this)});
    },
    view: function (id) {
		var currentRebus = this.allRebus.get(id);
		var game =  new APP.Models.GameModel();
		
		this.currentView = new APP.Views.RebusView({rebus: currentRebus});
		this.gueseView = new APP.Views.GueseView({game: game});
		this.scoreView = new APP.Views.ScoreView({game: game});
		
		$('#rebus-content').html(this.currentView.render().el);
		$('#guese-content').html(this.gueseView.render().el);
		$('#score-content').html(this.scoreView.render().el);
    },
	index: function(){
		this.view(1);
	}
	
  });
}());