requirejs.config({
  baseUrl: "./assets/js",
  //urlArgs: "bust=" +  (new Date()).getTime(),
  optimize: 'none',
  paths: {
    jquery: "../vendor/jquery-1.11.3.min",
    "jquery-ui": "../vendor/jquery-ui-1.11.4/jquery-ui.min",
    json3: "../vendor/json3.min",
    underscore: "../vendor/underscore-min",
    backbone: "../vendor/backbone/backbone-min",
    marionette: "../vendor/backbone.marionette/backbone.marionette.min",
    twigjs: "../vendor/twig.js/twig.min",
    twig: "../js/helpers/twigLoader",
    text: "../vendor/text",
    templates: "./templates",
    //localstorage: "../vendor/backbone/backbone.localStorage-min",

    application: "../js",
    templates: "../js/templates"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    "jquery-ui": {
      deps: ["jquery"]
    },
    backbone: {
      deps: ["underscore", "json3"],
      //exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      //exports: "Marionette"
    },
    twigjs: {
      exports: "Twig"
    }
  }
});
require(["application/application"], function(Application){
  //Application.initialize();
  Application.start();
});
