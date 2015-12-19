define("ContactsCollection", ["backbone", "localstorage"], function(B) {

  var ContactsCollectionClass = B.Extend({
     localStorage: new Backbone.LocalStorage("contacts:entities")
  });

  return ContactsCollectionClass;

});
