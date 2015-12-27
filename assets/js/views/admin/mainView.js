define(["marionette"
  , "backbone"
  , "twig!admin/main"]
, function(Marionette
  , Backbone
  , adminMain) {
    return new (
      Marionette.ItemView.extend({
        template:adminMain
      }));
  });
