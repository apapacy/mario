define(['backbone', 'marionette'
  , 'application/views/admin/item/placeItemView'
  , 'model/placesCollection']
, function(Backbone, Marionette, placeItemView, placesCollection) {
  //placesCollection.fetch();
  return new (
    Marionette.CollectionView.extend({
      childView: placeItemView,
      tagName: "ul",
      collection: placesCollection
    })
  );
});
