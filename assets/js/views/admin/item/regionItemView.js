define(["marionette", "backbone", "twig!admin/item/regionItem"]
, function(Marionette, Backbone, adminItemRegion) {
    return (
      Marionette.ItemView.extend({
        tagName: "li",
        template: adminItemRegion,
      }));
  });
