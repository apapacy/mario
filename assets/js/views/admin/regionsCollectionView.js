define(['backbone', 'marionette'
  , 'application/views/admin/item/regionItemView'
  , 'model/regionsCollection']
, function(Backbone, Marionette, regionItemView, regionsCollection) {
  var regions = new regionsCollection()
  regions.fetch();
  return (
    Marionette.CollectionView.extend({
      childView: regionItemView,
      tagName: "ul",
      collection: regions
    })
  );
});
