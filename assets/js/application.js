define(["marionette", "backbone",
  "application/views/admin/layoutView"
  ],
  function(Marionette, Backbone, adminLayoutView) {

  var Application = new Marionette.Application();
  Application.on("before:start", function(event){
    console.log("start")
    Backbone.history.start()
    /*this.contacts = new ContactsCollection();
    this.contacts.add({id:16, naem:'Joe-16'});
    this.contacts.models[0].save();
    this.contacts.fetch();*/
  });

  /*ContactManager.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region",
    dialogRegion: Marionette.Region.Dialog.extend({
      el: "#dialog-region"
    })
  });*/

  Application.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  };
  Application.start();
  adminLayoutView.init();
  return Application;

});
