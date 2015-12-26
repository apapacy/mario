define(['marionette', 'twigjs', 'lodash'], function defined (Marionette, Twig, _) {

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
    parentRequire.call(defined,[ "text!" + "templates/" + resourcePath + ".twig"
      , 'helpers/same!' + resourcePath
      , 'marionette'
      , 'twigjs']
      , reqursiveRender);

    var stock = [resourcePath];

    function reqursiveRender(templateContent, templatePath, Marionette, Twig) {
      _.pull(stock, templatePath);
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
      var regexp = /{%[\s]*(include|extends)[\s+]["|']([^''""]+)['|"][\s]*%}/g;
      while (matches = regexp.exec(templateContent)) {
        if (!Marionette.Renderer.render[GUID][matches[2]]) {
          stock.push(matches[2]);
          parentRequire([ "text!" + "templates/" + matches[2] + ".twig"
            , 'helpers/same!' + matches[2]
            , 'marionette'
            , 'twigjs' ]
            , reqursiveRender);
        } else {
          _.pull(stock, matches[2]);
        }
      }
      if (!stock.length) {
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
