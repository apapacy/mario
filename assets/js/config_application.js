requirejs.config({
  baseUrl: "/assets/js",
  urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
    jquery: "../vendor/jquery-2.1.4.min",
    json3: "../vendor/json3.min",
    underscore: "../vendor/underscore-min",
    backbone: "../vendor/backbone/backbone-min",
    marionette: "../vendor/backbone.marionette/backbone.marionette.min"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json3"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    }
  }
});
require(["jquery", "underscore", "backbone", "marionette"], function($, _, B, M){
  console.log(B);
  console.log(Backbone);
  console.log("Backbone.history: ", B.history);
  console.log("jQuery version: ", $.fn.jquery);
  console.log("underscore identity call: ", _.identity("underscore"));
  console.log("Marionette: ", M);
});
