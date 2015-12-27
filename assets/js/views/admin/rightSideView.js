define(["marionette"
  , "backbone"
  , "twig!admin/rightside"]
, function(Marionette
  , Backbone
  , adminRightSide) {
    return new (
      Marionette.ItemView.extend({
        template:adminRightSide
      }));
  });
