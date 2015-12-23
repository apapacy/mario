define(['marionette', 'twig'], function (M, Twig){
  Marionette.Renderer.render = function (template, data) {
    var twigtemplate = false;
    if (!(twigtemplate = Marionette.Renderer.render.loadedTemplates[template])) {
      twigtemplate = Twig.twig({
        href:  "assets/js/templates/" + template + ".twig",
        async: false
      });
      Marionette.Renderer.render.loadedTemplates[template] = twigtemplate;
    }
    return twigtemplate.render(data);
  };
  if (!Marionette.Renderer.render.loadedTemplates) {
    Marionette.Renderer.render.loadedTemplates = {};
  }
});
