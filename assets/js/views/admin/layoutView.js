define(["marionette", "backbone", "twig!admin/layout", "twig!admin/leftside"]
  , function(Marionette, Backbone, adminLayout, adminLeftside) {
  var layoutView = new (Marionette.LayoutView.extend({
    template: adminLayout,
    el: "body",
  }));
  layoutView.init = function() {
    layoutView.render();
    layoutView.addRegion( "leftside", "#leftside");
    var leftSideView = new (Marionette.LayoutView.extend({
      template: adminLeftside,
    }));
    layoutView.getRegion("leftside").show(leftSideView, {});
  }
  return layoutView;
});
