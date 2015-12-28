define (["marionette"], function(){

  function test(id){
    alert(id);
  }

  return new Marionette.AppRouter({
    appRoutes: {
      "test/:id": "test"
    },
    routes: {
      "rest/:id": test
    },
    controller: {
      test: test
    }
  });

});
