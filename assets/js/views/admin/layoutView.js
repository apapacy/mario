define(["marionette","twig!admin/layout:baseLayout", "twig!admin/layout:baseLayout"], function(Marionette, adminLayout, al) {
//  var bb = (new (Marionette.LayoutView.extend({
  //  template: al,
  //  el: '#div'
  //})))
  //bb.model=new Backbone.Model({rand: Math.random()});
  bb.render();
  return new (Marionette.LayoutView.extend({
    template: adminLayout,
    el: '#head'
  }));
});
