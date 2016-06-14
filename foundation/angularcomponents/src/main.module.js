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
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "percentage" : 10,
            "suites" : [ "Restaurant bundle", "Retail bundle"]
          },
          {
            "name" : "Longer App Name That Is Longer",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "percentage" : 20,
            "suites" : [ "Gift", "Ecommerce bundle (ODP)"]
          }
        ],
        "completed" : [
          {
            "name" : "Lots Of Icons",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "percentage" : 100,
            "suites" : [ "Retail bundle", "Retail Element", "Gift", "Ecommerce bundle", "ODP Ecommerce", "Ecommerce DevHub"]
          }, {

            "name" : "Completed App",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "percentage" : 100,
            "suites" : [ "Restaurant bundle"]
          }
        ]
      };

      $httpBackend.whenGET('/myapps').respond(apps);
      $httpBackend.whenGET(/.*/).passThrough();

    });
})();
