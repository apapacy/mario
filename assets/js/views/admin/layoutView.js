define(["marionette"
  , "backbone"
  , "twig!admin/layout"
  , "twig!admin/leftside"
  , "twig!admin/main"
  , "twig!admin/rightside"]
, function(Marionette
  , Backbone
  , adminLayout
  , adminLeftSide
  , adminMain
  , adminRightSide) {

  var layoutView = new (Marionette.LayoutView.extend({
    template: adminLayout,
    el: "body",
  }));

  layoutView.init = function() {
    layoutView.render();

    layoutView.addRegion( "leftside", "#leftside");
    var leftSideView = new (Marionette.LayoutView.extend({
      template: adminLeftSide,
    }));
    layoutView.getRegion("leftside").show(leftSideView);

    layoutView.addRegion( "main", "#main");
    var mainView = new (Marionette.LayoutView.extend({
      template: adminMain,
    }));
    layoutView.getRegion("main").show(mainView);

    layoutView.addRegion( "rightside", "#rightside");
    var rightSideView = new (Marionette.LayoutView.extend({
      template: adminRightSide,
    }));
    layoutView.getRegion("rightside").show(rightSideView);
  }

  return layoutView;

});
