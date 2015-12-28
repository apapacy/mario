define(['backbone', 'model/regionModel'], function(Backbone, regionModel){
  return (Backbone.Collection.extend({
    model: regionModel,
    url: "/ci/regions/collection"
  }));
});
