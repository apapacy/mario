define(['marionette', 'twigjs'], function(M, Twig) {

  var GUID = "{BA9B921C-B7C0-4313-BC13-30DC301C1D6E}";

  if (typeof M.Renderer.render[GUID] !== "object") {
    M.Renderer.render = function(template, data) {
      console.log(arguments)
      console.log('+++++++++++++++++++++++++++++++++')
     return template.render(template,data);
    }
    M.Renderer.render[GUID] = {};
  }

  function loadResource(resourceName, parentRequire, callback, config) {
    var resourceConfig = parseResource( resourceName );
    var resourcePath = resourceConfig.resourcePath;
    var baseTemplate = resourceConfig.baseTemplate;
    if (M.Renderer.render[GUID][resourcePath]) {
      callback(M.Renderer.render[GUID][resourcePath]);
      return;
    }

    if (baseTemplate) {
      parentRequire(
        [
          "text!" + "templates/" + resourcePath + ".twig",
          "text!" + "templates/" + baseTemplate + ".twig",
        ],
        function(templateContent, baseContent) {
          M.Renderer.render[GUID][baseTemplate] = Twig.twig(
            {
              id: baseTemplate,
              data: baseContent,
              //allowInlineIncludes:true
            }
          );
          M.Renderer.render[GUID][resourcePath] = Twig.twig(
            {
              id:resourcePath,
              //base: baseTemplate,
              data: templateContent,
              allowInlineIncludes:true
            }
          );
          callback(M.Renderer.render[GUID][resourcePath])
        });
    } else {
      parentRequire(
        ["text!" + "templates/" + resourcePath + ".twig"],
        function(templateContent) {
          callback(M.Renderer.render[GUID][resourcePath] = Twig.twig({data: templateContent}));
        }
      );
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
  };

  return {
    load: loadResource
  };

});
