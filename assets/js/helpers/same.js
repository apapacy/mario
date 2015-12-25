define([], function () {

  function load (resourcePath, parentRequire, callback, config) {
    callback(resourcePath);
  }

  return ({
      load: load
    });

});
