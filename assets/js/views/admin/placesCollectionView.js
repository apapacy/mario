define(['backbone', 'marionette'
  , 'twig!admin/placesCollection'
  , 'application/views/admin/item/placeItemView'
  , 'model/placesCollection']
, function(Backbone, Marionette, placesCollection_twig, placeItemView, placesCollection) {
  placesCollection.fetch();
  return new (
    Marionette.CollectionView.extend({
      childView: placeItemView,
      tagName: "ul",
      //template: placesCollection_twig,
      collection: placesCollection
    })
  );
});
