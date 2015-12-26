define(['marionette', 'twigjs'], function (Marionette, Twig) {

  var GUID = "{BA9B921C-B7C0-4313-BC13-30DC301C1D6E}";

  if (typeof Marionette.Renderer.render[GUID] !== "object") {
    Marionette.Renderer.render = function(template, data) {
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
      , 'helpers/same!' + resourcePath
      , 'marionette'
      , 'twigjs']
      , reqursiveRender);

    function reqursiveRender(templateContent, templatePath, Marionette, Twig) {
      if (!Marionette.Renderer.render[GUID][templatePath]) {
        Marionette.Renderer.render[GUID][templatePath] = Twig.twig(
         {
           id: templatePath,
           //base: baseTemplate,
           data: templateContent,
           allowInlineIncludes: true
         }
        );
      }
      var matches = /{%[\s]*extends[\s+]["|']([\S]+)['|"][\s]*%}/.exec(templateContent);
      if (matches) {
        if (!Marionette.Renderer.render[GUID][matches[1]]) {
          parentRequire([ "text!" + "templates/" + matches[1] + ".twig"
            , 'helpers/same!' + matches[1]
            , 'marionette'
            , 'twigjs' ]
            , reqursiveRender);
        }
      } else {
        callback(Marionette.Renderer.render[GUID][resourcePath]);
      }
    }

  }

  return ({
    load: loadResource,
    normalize: function (name, normalize) {
         return name;
     }
  });
});
