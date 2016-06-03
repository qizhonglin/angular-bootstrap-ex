'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('AccordionCtrl', function ($scope) {
    $scope.oneAtATime = false;

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  });
