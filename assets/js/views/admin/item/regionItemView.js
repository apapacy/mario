define(["marionette", "backbone"
, "twig!admin/item/regionItem"
, "model/placesCollection",
, "application/views/admin/item/placeItemView"]
, function(Marionette, Backbone
, adminItemRegion
, placesCollection
, placeItemView) {
  //placesCollection.fetch();
    return (
      Marionette.CompositeView.extend({
        tagName: "li",
        template: adminItemRegion,
        initialize: function() {
          console.log(this.model.get("places"))
          this.collection= this.model.get("places");
          if(this.collection)this.collection.fetch();
        },
        childView: placeItemView
      }));
  });
