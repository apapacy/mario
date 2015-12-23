define(["marionette"], function(M) {
  return new (M.LayoutView.extend({
    template: "admin/layout",
    el: 'body'
  }));
});
