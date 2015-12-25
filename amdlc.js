require("requirejs");
var amdlc=require("amdlc");
amdlc.compile({
    from: "config_application.js",
    baseDir: "assets/js",
    compress: true,
    expose: "public",
    excludeRootNamespaceFromPath: true,
    verbose: true,
    outputSource: "lib.js",
    outputMinified: "lib.min.js",
    outputDev: "lib.dev.js"
});
