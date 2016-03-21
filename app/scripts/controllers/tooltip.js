'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:TooltipCtrl
 * @description
 * # TooltipCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('TooltipCtrl', function ($scope, $sce) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
  });
