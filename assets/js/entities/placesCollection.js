define(['backbone', 'model/placeModel'], function(Backbone, placeModel){
  return new (Backbone.Collection.extend({
    model: placeModel,
    url: "/ci/places/collection"
  }));
});
