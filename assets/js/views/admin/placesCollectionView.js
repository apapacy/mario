define(['backbone', 'marionette'
  , 'application/views/admin/item/placeItemView'
  , 'model/placesCollection']
, function(Backbone, Marionette, placeItemView, placesCollection) {
  //placesCollection.fetch();
  return  (
    Marionette.CollectionView.extend({
      childView: placeItemView,
      tagName: "ul",
      collection: placesCollection
    })
  );
});
