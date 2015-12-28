define(['backbone', 'model/regionModel'], function(Backbone, regionModel){
  return new (Backbone.Collection.extend({
    model: regionModel,
    url: "/ci/regions/collection"
  }));
});
