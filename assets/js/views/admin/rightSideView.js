define(["marionette"
  , "backbone"
  , "twig!admin/rightside"]
, function(Marionette
  , Backbone
  , adminRightSide) {
    //var view = 
    return (
      Marionette.ItemView.extend({
        template:adminRightSide
      }));
  });
