define(['angular', '../module'], function (ng) {
  'use strict';

  /**
   * @ngdoc directive
   * @name ngSeed.directives:navbar
   * @description
   * Sets the current navbar option in focus.
   */
  ng.module('app.directives')
    .directive('navbar', function($location) {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'modules/application/views/partials/navbar.html',
        scope: {
            heading: '@'
        },
        controller: 'NavbarCtrl',
        link: function($scope, $element, $attrs, Navbar) {

          //add the active class to the current address == item href
          $scope.activeHref = function(item) {
            return ($location.path() == item.href) ? 'active' : '';
          }

          $scope.showItem = function(item) {
            return ($scope.currentUser == item.requiresLogin) ? true : false;
          }

        }
      }
    });

});
