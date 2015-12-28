define(["marionette"
  , "backbone"
  , "twig!admin/leftside"]
, function(Marionette
  , Backbone
  , adminLeftSide) {
    return  (
      Marionette.ItemView.extend({
        template:adminLeftSide
      }));
  });
