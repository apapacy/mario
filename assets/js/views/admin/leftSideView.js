define(["marionette"
  , "backbone"
  , "twig!admin/leftside"]
, function(Marionette
  , Backbone
  , adminLeftSide) {
    return new (
      Marionette.ItemView.extend({
        template:adminLeftSide
      }));
  });
