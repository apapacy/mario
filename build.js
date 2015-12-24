({
baseUrl: "./assets/js",
name: "config_application",
mainConfigFile: "./assets/js/config_application.js",
out: "./assets/js/require_main.built.js",
wrapShim: true,
findNestedDependencies: true,
optimize: 'none',
optimizeAllPluginResources: false,
exclude: ["jquery","jquery-ui","backbone","underscore","text"],
"paths": {
       // Don't attempt to include dependencies whose path begins with webapp/

       // Ditto for the following 3rd-party libraries
       //"jquery": "empty:",
       //"twig": "empty:",
       //"backbone": "empty:",
       //"underscore": "empty:"
   }
})
