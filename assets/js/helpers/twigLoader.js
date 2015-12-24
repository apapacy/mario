define(['marionette', 'twigjs'], function f1(Marionette, Twig) {

  var GUID = "{BA9B921C-B7C0-4313-BC13-30DC301C1D6E}";

  if (typeof Marionette.Renderer.render[GUID] !== "object") {
    Marionette.Renderer.render = function f2(template, data) {
      return template.render(data);
    }
    Marionette.Renderer.render[GUID] = {};
  }

  function loadResource(resourceName, parentRequire, callback, config) {
    var resourceConfig = parseResource(resourceName);
    var resourcePath = resourceConfig.resourcePath;
    var baseTemplate = resourceConfig.baseTemplate;
    if (Marionette.Renderer.render[GUID][resourcePath]) {
      callback(Marionette.Renderer.render[GUID][resourcePath]);
      return;
    }

    function innerRender(templateContent, baseContent, Marionette, Twig) {
      return innerFullRender(templateContent, null, Marionette, Twig);
    }

    function innerFullRender(templateContent, baseContent, Marionette, Twig) {
      if (baseContent) {
        Marionette.Renderer.render[GUID][baseTemplate] = Twig.twig(
          {
            id: baseTemplate,
            data: baseContent,
            allowInlineIncludes:true
          }
        );
      }
      Marionette.Renderer.render[GUID][resourcePath] = Twig.twig(
        {
          id: resourcePath,
          base: baseTemplate,
          data: templateContent,
          allowInlineIncludes: true
        }
      );
      //Marionette.Renderer.render[GUID][resourcePath].compile({});
      callback(Marionette.Renderer.render[GUID][resourcePath]);
    }

    /*innerFullRender(text.get("assets/js/templates/" + resourcePath + ".twig"),
                    text.get("assets/js/templates/" + baseTemplate + ".twig"),
                    Marionette, Twig);*/
    if (baseTemplate) {
      parentRequire([ "text!" + "templates/" + resourcePath + ".twig",
                      "text!" + "templates/" + baseTemplate + ".twig",
                      'marionette', 'twigjs'], innerFullRender);
    } else {
      parentRequire([ "text!" + "templates/" + resourcePath + ".twig",
                      'marionette', 'twigjs'], innerRender);
    }
  };


  function parseResource(resourceName) {
    var resourceParts = resourceName.split(":");
    var resourcePath = resourceParts[0];
    var baseTemplate = resourceParts[1];
    return {
      resourcePath: resourcePath,
      baseTemplate: baseTemplate
    };
  }

  return ({
    load: loadResource,
    normalize: function (name, normalize) {
         return name;
     }
  });

});
