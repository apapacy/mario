define(["marionette"
  , "backbone"
  , "twig!admin/main"]
, function(Marionette
  , Backbone
  , adminMain) {
    return (
      Marionette.ItemView.extend({
        template:adminMain
      }));
  });
