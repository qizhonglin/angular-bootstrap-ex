'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('MainCtrl', function ($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.slides = getSlides();

    function getSlides(){
      var slides = [] ;
      slides.push({
        image: 'images/bartlesvillecf.jpg',
        text: 'bartlesvillecf.jpg'
      });
      slides.push({
        image: 'images/emancipation.jpg',
        text: 'emancipation.jpg'
      });
      slides.push({
        image: 'images/okwu.jpg',
        text: 'okwu.jpg'
      });
      slides.push({
        image: 'images/okwu-athletics.jpg',
        text: 'okwu-athletics.jpg'
      });

      return slides ;
    }
  });
