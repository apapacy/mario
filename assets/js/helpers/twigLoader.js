define(['marionette', 'twigjs'], function (Marionette, Twig) {

  var GUID = "{BA9B921C-B7C0-4313-BC13-30DC301C1D6E}";

  if (typeof Marionette.Renderer.render[GUID] !== "object") {
    Marionette.Renderer.render = function f2(template, data) {
      return template.render(data);
    }
    Marionette.Renderer.render[GUID] = {};
  }

  function loadResource(resourcePath, parentRequire, callback, config) {

    if (Marionette.Renderer.render[GUID][resourcePath]) {
      callback(Marionette.Renderer.render[GUID][resourcePath]);
      return;
    }

    parentRequire([ "text!" + "templates/" + resourcePath + ".twig"
      , 'marionette'
      , 'twigjs']
      , innerRender);

    function innerRender(templateContent, Marionette, Twig) {
      var matches;
      if (matches=/{%[\s]*extends[\s+]["|']([\S]+)['|"][\s]*%}/.exec(templateContent)) {
        alert('*'+matches[1]+'*');
        require(["twig!" + matches[1]], function(parentContent) {
          Marionette.Renderer.render[GUID][resourcePath] = Twig.twig(
            {
              id: resourcePath,
              //base: baseTemplate,
              data: templateContent,
              allowInlineIncludes: true
            }
          );
          //Marionette.Renderer.render[GUID][resourcePath].compile({});
          callback(Marionette.Renderer.render[GUID][resourcePath]);
        });
      } else {
        Marionette.Renderer.render[GUID][resourcePath] = Twig.twig(
          {
            id: resourcePath,
            //base: baseTemplate,
            data: templateContent,
            allowInlineIncludes: true
          }
        );
        //Marionette.Renderer.render[GUID][resourcePath].compile({});
        callback(Marionette.Renderer.render[GUID][resourcePath]);
      }
    }
  };


  return ({
    load: loadResource,
    normalize: function (name, normalize) {
         return name;
     }
  });

});
