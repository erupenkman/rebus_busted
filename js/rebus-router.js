/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

//Hash Urls should behave statelessly so back/refresh works like magic
(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.RebusRouter = Backbone.Router.extend({
    routes: {
		"rebus/:id": "view",
		"*path": "view" //default
    },

    initialize: function (options) {
		this.allRebus =  new APP.Collections.RebusCollection();
		this.allRebus.fetch({success: (function(){
			Backbone.history.start();
			this.list = new APP.Views.RebusListView({allRebus: this.allRebus});
			this.list.render();
		}).bind(this)});
    },

    view: function (id) {
		var rebus = this.allRebus.get(id);
		this.currentView = new APP.Views.RebusView({rebus: new APP.Models.RebusModel()});
		$('#primary-content').html(this.currentView.render().el);
    }
	
  });
}());