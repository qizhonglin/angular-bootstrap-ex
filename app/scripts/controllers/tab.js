'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:TabCtrl
 * @description
 * # TabCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('TabCtrl', function ($scope, $window) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'<div>Dynamic content 1</div>' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };
  });
