define(['backbone', 'marionette'
  , 'application/views/admin/item/regionItemView'
  , 'model/regionsCollection']
, function(Backbone, Marionette, regionItemView, regionsCollection) {
  regionsCollection.fetch();
  return new (
    Marionette.CollectionView.extend({
      childView: regionItemView,
      tagName: "ul",
      collection: regionsCollection
    })
  );
});
