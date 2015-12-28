define(["backbone", "model/placesCollection"], function(Backbone, placesCollection){
  return Backbone.Model.extend({
    urlRoot: "/ci/regions/model",
    initialize: function(){
      this.set("places", new placesCollection())
    }
  });
});
