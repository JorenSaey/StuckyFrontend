(function(){
  'use strict';

  angular
    .module('stuckyToys')
    .directive('makeWidget', makeWidget);

  function makeWidget() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/makeWidget.html',
      link: link
    };
    function link(scope, element, attrs, controller, transcludeFn) {

    };
  }


})();
