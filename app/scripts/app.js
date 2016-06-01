'use strict';

/**
 * @ngdoc overview
 * @name bootstrapExApp
 * @description
 * # bootstrapExApp
 *
 * Main module of the application.
 */
angular
  .module('bootstrapExApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/accordion', {
        templateUrl: 'views/accordion.html',
        controller: 'AccordionCtrl',
        controllerAs: 'accordion'
      })
      .when('/alert', {
        templateUrl: 'views/alert.html',
        controller: 'AlertCtrl',
        controllerAs: 'alert'
      })
      .when('/buttons', {
        templateUrl: 'views/buttons.html',
        controller: 'ButtonsCtrl',
        controllerAs: 'buttons'
      })
      .when('/carousel', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl',
        controllerAs: 'carousel'
      })
      .when('/datepicker', {
        templateUrl: 'views/datepicker.html',
        controller: 'DatepickerCtrl',
        controllerAs: 'datepicker'
      })
      .when('/dropdown', {
        templateUrl: 'views/dropdown.html',
        controller: 'DropdownCtrl',
        controllerAs: 'dropdown'
      })
      .when('/model', {
        templateUrl: 'views/model.html',
        controller: 'ModelCtrl',
        controllerAs: 'model'
      })
      .when('/pagination', {
        templateUrl: 'views/pagination.html',
        controller: 'PaginationCtrl',
        controllerAs: 'pagination'
      })
      .when('/popover', {
        templateUrl: 'views/popover.html',
        controller: 'PopoverCtrl',
        controllerAs: 'popover'
      })
      .when('/progressbar', {
        templateUrl: 'views/progressbar.html',
        controller: 'ProgressbarCtrl',
        controllerAs: 'progressbar'
      })
      .when('/rating', {
        templateUrl: 'views/rating.html',
        controller: 'RatingCtrl',
        controllerAs: 'rating'
      })
      .when('/tab', {
        templateUrl: 'views/tab.html',
        controller: 'TabCtrl',
        controllerAs: 'tab'
      })
      .when('/timepicker', {
        templateUrl: 'views/timepicker.html',
        controller: 'TimepickerCtrl',
        controllerAs: 'timepicker'
      })
      .when('/tooltip', {
        templateUrl: 'views/tooltip.html',
        controller: 'TooltipCtrl',
        controllerAs: 'tooltip'
      })
      .when('/typeahead', {
        templateUrl: 'views/typeahead.html',
        controller: 'TypeaheadCtrl',
        controllerAs: 'typeahead'
      })
      .when('/card', {
        templateUrl: 'views/card.html',
        controller: 'CardCtrl',
        controllerAs: 'card'
      })
      .when('/project-medical-image-visualization', {
        templateUrl: 'views/project-medical-image-visualization.html',
        controller: 'MedicalImageVisualizationCtrl',
        controllerAs: 'vm'
      })
      .when('/project-bama', {
        templateUrl: 'views/project-bama.html',
        controller: 'BamaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


angular.module('bootstrapExApp')
  .directive('bsActiveLink', ['$location', function ($location) {
    return {
      restrict: 'A', //use as attribute
      replace: false,
      link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
          var hrefs = ['/#' + $location.path(),
            '#' + $location.path(), //html5: false
            $location.path()]; //html5: true
          angular.forEach(elem.find('a'), function (a) {
            a = angular.element(a);
            if (-1 !== hrefs.indexOf(a.attr('href'))) {
              a.parent().addClass('active');
            } else {
              a.parent().removeClass('active');
            }
          });
        });
      }
    };
  }]);


