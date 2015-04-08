'use strict';

var ctrls = angular.module('dabbble.controllers', []);

ctrls.controller('AppCtrl', function ($scope, $http) {
});


// Controls the list

ctrls.controller('ShotListCtrl', function ($scope, PagedResult, $routeParams) {
  var list = $routeParams.list;

  $scope.list = new PagedResult('shots', list, 'shots').loadNextPage();

});


ctrls.controller('ShotCtrl', function ($scope, $http, $routeParams, dribbble, PagedResult) {
  var id = $routeParams.id;

  $scope.shot = dribbble.shot(id)
  $scope.comments = new PagedResult('comments', id, 'comments').loadNextPage();
});
