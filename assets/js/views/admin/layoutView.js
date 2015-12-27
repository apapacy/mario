define(["marionette"
  , "backbone"
  , "twig!admin/layout"
  , "application/views/admin/leftSideView"
  , "application/views/admin/mainView"
  , "application/views/admin/rightSideView"]
, function(Marionette
  , Backbone
  , adminLayout
  , adminLeftSideView
  , adminMainView
  , adminRightSideView) {

  var layoutView = new (Marionette.LayoutView.extend({
    template: adminLayout,
    el: "body",
  }));

  layoutView.init = function() {
    layoutView.render();

    layoutView.addRegion( "leftside", "#leftside");
    layoutView.getRegion("leftside").show(adminLeftSideView);

    layoutView.addRegion( "main", "#main");
    layoutView.getRegion("main").show(adminMainView);

    layoutView.addRegion( "rightside", "#rightside");
    layoutView.getRegion("rightside").show(adminRightSideView);
  }

  return layoutView;

});
