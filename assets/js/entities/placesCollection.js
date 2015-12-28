define(['backbone', 'model/placeModel'], function(Backbone, placeModel){
  return (Backbone.Collection.extend({
    model: placeModel,
    url: "/ci/places/collection"
  }));
});
