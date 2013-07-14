/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ScoreView = Backbone.View.extend({
    events: {
    },
    initialize: function (options) {
      this.game = options.game;
      this.listenTo(this.game, 'change', this.render);
    },
    // populate the html to the dom
    render: function () {
      this.$el.html(Mustache.to_html($('#score-tpl').html(), this.game.toJSON()));
      return this;
    }
  });
}());
