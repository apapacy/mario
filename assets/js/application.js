define(["jquery", "underscore", "backbone", "marionette",
  "application/views/admin/layoutView",
  "application/regions/dialog",
/*"application/entities/contacts",*/],
  function($, _, Backbone, Marionette, adminLayoutView, dialogRegion, ContactsCollection ){

  var ContactManager = new Marionette.Application();
  ContactManager.on("before:start", function(event){
    Backbone.history.start()
    this.contacts = new ContactsCollection();
    this.contacts.add({id:16, naem:'Joe-16'});
    this.contacts.models[0].save();
    this.contacts.fetch();
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
  adminLayoutView.render();
  return ContactManager;

});
