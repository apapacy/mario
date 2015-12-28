define([
 "marionette"
, "backbone"
, "twig!admin/item/regionItem"
, "model/placesCollection"
, "application/views/admin/item/placeItemView"]
, function(
  Marionette
, Backbone
, adminItemRegion
, placesCollection
, placeItemView) {
    return (
      Marionette.CompositeView.extend({
        //tagName: "li",
        childView : placeItemView,
        childViewContainer: "div",
        template: adminItemRegion,
        initialize: function() {
          this.collection= this.model.get("places");
          if(this.collection)this.collection.fetch();
        },
      }));
  });
