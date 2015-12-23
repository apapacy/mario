requirejs.config({
  baseUrl: "/assets/js",
  urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
    jquery: "../vendor/jquery-2.1.4.min",
    "jquery-ui": "../vendor/jquery-ui-1.11.4/jquery-ui.min",
    json3: "../vendor/json3.min",
    underscore: "../vendor/underscore-min",
    backbone: "../vendor/backbone/backbone-min",
    marionette: "../vendor/backbone.marionette/backbone.marionette.min",
    twig: "../vendor/twig.js/twig.min",
    text: "../vendor/text.js",
    localstorage: "../vendor/backbone/backbone.localStorage-min",

    application: "../js"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    "jquery-ui": {
      deps: ["jquery"]
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
require(["application/application"], function(Application){
  //Application.initialize();
  Application.start();
  console.log('app.start');
});
