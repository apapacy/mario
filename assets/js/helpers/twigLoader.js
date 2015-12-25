define(['marionette', 'twigjs'], function (Marionette, Twig) {

  var GUID = "{BA9B921C-B7C0-4313-BC13-30DC301C1D6E}";

  if (typeof Marionette.Renderer.render[GUID] !== "object") {
    Marionette.Renderer.render = function(template, data) {
      return template.render(data);
    }
    Marionette.Renderer.render[GUID] = {};
  }

  function loadResource(resourcePath, parentRequire, callback, config) {

    /*if (Marionette.Renderer.render[GUID][resourcePath]) {
      callback(Marionette.Renderer.render[GUID][resourcePath]);
      return;
    }*/

    parentRequire([ "text!" + resourcePath + ".twig"
      , 'helpers/same!' + resourcePath
      , 'marionette'
      , 'twigjs']
      , innerRender);

    function innerRender(templateContent, templatePath, Marionette, Twig) {
      alert(templatePath + '\n' +templateContent)

      Marionette.Renderer.render[GUID][templatePath] = Twig.twig(
         {
           id: templatePath,
           //base: baseTemplate,
           data: templateContent,
           allowInlineIncludes: true
         }
       );
       Marionette.Renderer.render[GUID][templatePath].sourceText = templateContent;

     var matches = /{%[\s]*extends[\s+]["|']([\S]+)['|"][\s]*%}/.exec(templateContent);
     //alert(matches)

      if (matches) {
        parentRequire([ "text!" + matches[1] + ".twig"
          , 'helpers/same!' + matches[1]
          , 'marionette'
          , 'twigjs' ]
          , innerRender);


      } else {
        Marionette.Renderer.render[GUID][resourcePath] = Twig.twig(
           {
             id: resourcePath,
             //base: baseTemplate,
             data: Marionette.Renderer.render[GUID][resourcePath].sourceText,
             allowInlineIncludes: true
           }
         );

        alert(resourcePath)
        alert(Marionette.Renderer.render[GUID][resourcePath].compile({}));
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
