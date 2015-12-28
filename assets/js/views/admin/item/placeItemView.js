define(["marionette", "backbone", "twig!admin/item/placeItem"]
, function(Marionette, Backbone, adminItemPlace) {
    return (
      Marionette.ItemView.extend({
        template: adminItemPlace,
      }));
  });
