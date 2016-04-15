(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.hello = "Stuff!";

    vm.blogs = [

      {
        title: "Title 1", 
        body: "content 1"
      },

      {
        title: "Title 2", 
        body: "content 2"
      }
    
    ];

  }
})();
