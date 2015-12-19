define(["jquery", "underscore", "backbone", "marionette",
  "application/regions/dialog",
  "application/entities/contacts"],
  function($, _, B, M, dialogRegion, ContactsCollection ){
  console.log(B);
  console.log(Backbone);
  console.log("Backbone.history: ", B.history);
  console.log("jQuery version: ", $.fn.jquery);
  console.log("underscore identity call: ", _.identity("underscore"));
  console.log("Marionette: ", M);

  var ContactManager = new M.Application();
  console.log(ContactManager)
  ContactManager.on("befor:start", function(event){
    console.log(event);
    console.log("ContactManager try to start");
    B.history.start()
    this.contacts = new ConntactsCollection();


  });

  ContactManager.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region",
    dialogRegion: Marionette.Region.Dialog.extend({
      el: "#dialog-region"
    })
  });

  ContactManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  return ContactManager;

});
