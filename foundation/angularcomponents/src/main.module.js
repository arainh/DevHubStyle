(function() {
  'use strict';

  // we are using ngMockE2E for $httpBackend service
  // make sure you load the angular-mocks library as well
  // httpBackend allows us to intercept http calls
  // which we'll use for mocking data, remove this
  // dependency when you're ready to wire the app to
  // an actual backend
  angular.module('mainmod', ['myapps', 'ngMockE2E'])
    .run(function($httpBackend){
      var apps = {
        "inprogress" : [
          {
            "name" : "Short Name",
            "description" : " At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non",
            "percentage" : 10,
            "suites" : [ "Restaurant bundle"]
          },
          {
            "name" : "Longer App Name That Is Longer",
            "description" : " At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum ",
            "percentage" : 20,
            "suites" : [ "Gift", "Ecommerce bundle (ODP)", "New"]
          },
                    {
            "name" : "App Name 1",
            "description" : " At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum ",
            "percentage" : 20,
            "suites" : [ "Gift", "Ecommerce bundle (ODP)", "Retail bundle", "New"]
          },
          {
            "name" : "App Name 2",
            "description" : " At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum",
            "percentage" : 20,
            "suites" : [ "Gift"]
          }
        ],
        "completed" : [
          {
            "name" : "Lots Of Icons",
            "description" : " At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque ",
            "percentage" : 100,
            "suites" : [ "Retail bundle", "Retail Element", "Gift", "Ecommerce DevHub", "ODP Ecommerce"]
          }, 
          {

            "name" : "Completed App",
            "description" : " At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores ",
            "percentage" : 100,
            "suites" : [ "Restaurant bundle", "Retail bundle"]
          }
        ]
      };

      $httpBackend.whenGET('/myapps').respond(apps);
      $httpBackend.whenGET(/.*/).passThrough();

    });
})();
