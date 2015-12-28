requirejs.config({
  "baseUrl": "./assets/js",
  "urlArgs": "bust=" +  (new Date()).getTime(),
  "optimize": 'none',
  "paths": {
    "jquery": "../vendor/jquery-2.1.4.min",
    "jquery-ui": "../vendor/jquery-ui-1.11.4/jquery-ui.min",
    "json3": "../vendor/json3.min",
    "underscore": "../vendor/underscore-min",
    "backbone": "../vendor/backbone/backbone-dev",
    "marionette": "../vendor/backbone.marionette/backbone.marionette",
    "twigjs": "../vendor/twig.js/twig.min",
    "lodash": "../vendor/lodash.min",
    "twig": "../js/helpers/twigLoader",
    "text": "../vendor/text",
    "templates": "./templates",
    "localstorage": "../vendor/backbone/backbone.localStorage-min",
    "application": "./",
    "model": "./entities"
  },

    shim: {
    //underscore: {
      //exports: "_"
    //},
    //"jquery-ui": {
  //    deps: ["jquery"]
  //  },
  twig: {
    deps: ["backbone", "marionette"]
  },
    backbone: {
      deps: ["underscore", "jquery"],
      //exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      //exports: "Marionette"
    }
    //twigjs: {
  //    exports: "Twig"
  //  }
  }

});
require(["application/application"], function(Application){
  //Application.start();
});
