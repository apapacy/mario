define(["marionette","twig!admin/layout:baseLayout", "twig!admin/layout:baseLayout"], function(M, adminLayout, al) {
  var bb = (new (M.LayoutView.extend({
    template: al,
    el: '#div'
  })))
  alert(bb.render)
  bb.render({rand:16});
  console.log(adminLayout)
  console.log("+++++++++++++++")
  return new (M.LayoutView.extend({
    template: adminLayout,
    el: '#head'
  }));
});
