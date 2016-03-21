'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:PopoverCtrl
 * @description
 * # PopoverCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('PopoverCtrl', function ($scope) {
    $scope.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'myPopoverTemplate.html',
      title: 'Title'
    };
  });
