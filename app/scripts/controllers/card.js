/**
 * Created by 310031267 on 2016/6/1.
 */

(function(){
  'use strict';

  angular.module('bootstrapExApp')
    .controller('CardCtrl', CardCtrl);

  CardCtrl.$inject = ['$scope'];

  function CardCtrl($scope) {
    var vm = this;

    vm.projects = transformFormat(mockData_ch(), 3);

    function mockData_ch() {
      var projects = [
        {
          'image': 'images/medication-image-visualization/Slide13.jpg',
          'title': 'Thumbnail label',
          'description': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
          'href': '#/project-medical-image-visualization'
        },
        {
          'image': 'images/okwu.jpg',
          'title': 'Thumbnail label',
          'description': "There are some key benefits of connection between physician, pa-tient and CHC. Patient gets continual care with personalized intervention tool, physician gets a better overview of patients’ status for better quality of care, meawhile physician collects more data for clinical research, the resource of CHC can be fully leveraged to release overburnden of level 3 hospital.",
          'href': '#/project-bama'
        },
        {
          'image': 'images/okwu.jpg',
          'title': 'Thumbnail label',
          'description': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
          'href': '#/project-medical-image-visualization'
        },
        {
          'image': 'images/okwu.jpg',
          'title': 'Thumbnail label',
          'description': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
          'href': '#'
        },
        {
          'image': 'images/okwu.jpg',
          'title': 'Thumbnail label',
          'description': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
          'href': '#'
        },
        {
          'image': 'images/okwu.jpg',
          'title': 'Thumbnail label',
          'description': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
          'href': '#'
        }
      ];

      return projects;
    }

    function transformFormat(projects, colNum) {
      var result = [];
      var rowNum = projects.length / colNum + 1 ;
      for (var i = 0 ; i < rowNum; ++ i) {
        var projectRow = [];
        for (var j = 0 ; j < colNum; ++ j) {
          projectRow.push(projects[i*colNum+j]);
        }
        result.push(projectRow);
      }
      return result;
    }
  }
})();
