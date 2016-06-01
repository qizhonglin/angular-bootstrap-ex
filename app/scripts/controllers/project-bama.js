/**
 * Created by 310031267 on 2016/6/1.
 */

(function(){
  'use strict';

  angular.module('bootstrapExApp')
    .controller('BamaCtrl', BamaCtrl);

  BamaCtrl.$inject = [];

  function BamaCtrl() {
    var vm = this;

    vm.myInterval = 0;
    vm.noWrapSlides = false;
    vm.scenarioSlides = getScenarioSlides();
    vm.uiwireframeSlides = getUiwireframeSlides();


    vm.keywords = "<br/>Cardiac, software architecture, micro-service, spring boot, Android, RESTful API";
    vm.abstract = "<br/>There are some key benefits of connection between physician, pa-tient and CHC. Patient gets continual care with personalized intervention tool, physician gets a better overview of patients’ status for better quality of care, meawhile physician collects more data for clinical research, the resource of CHC can be fully leveraged to release overburnden of level 3 hospital. <br/>The project focus on integrated health management solution which targets to cardiac care and this technical note describes in detail  software design and implementation including the back-end server and android native app.";

    function getScenarioSlides(){
      var slides = [] ;
      for (var i = 0 ; i < 27; ++ i) {
        slides.push({
          image: 'images/bama/scenario/Slide' + (i+1) + '.jpg',
          text: 'Slide' + (i+1) + '.jpg'
        });
      }

      return slides ;
    }

    function getUiwireframeSlides() {
      var slides = [] ;
      for (var i = 0 ; i < 27; ++ i) {
        slides.push({
          image: 'images/bama/scenario/Slide' + (i+1) + '.jpg',
          text: 'Slide' + (i+1) + '.jpg'
        });
      }

      return slides ;
    }
  }
})();
