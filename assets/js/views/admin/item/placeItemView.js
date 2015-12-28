define(["marionette", "backbone", "twig!admin/item/placeItem"]
, function(Marionette, Backbone, adminItemPlace) {
  var view =  Marionette.ItemView.extend({
          tagName: "li",
          template: adminItemPlace,
        });

  alert(view)
    return view;
});
