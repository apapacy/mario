{
baseUrl: "./assets/js",
name: "config_application",
mainConfigFile: "./assets/js/config_application.js",
out: "./assets/js/require_main.built.js",
wrapShim: true,
findNestedDependencies: true,
optimize: 'none',
optimizeAllPluginResources: false,
stubModules : ['text', 'twig','jquery','backbone','marionette','underscore']
}
