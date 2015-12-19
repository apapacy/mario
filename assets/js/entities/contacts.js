define(["backbone", "localstorage"], function(B) {

  var ContactsCollectionClass = Backbone.Collection.extend({
     localStorage: new Backbone.LocalStorage("contacts:entities")
  });

  return ContactsCollectionClass;

});
