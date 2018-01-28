'use strict';

angular.module('highways', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        templateUrl:'../partials/landing.html',
        controller: 'LandingCtrl'
      })
      .when("/taconic", {
        templateUrl: '../partials/taconic.html',
        controller: 'TaconicCtrl'
      })
      .when("/sawgrass", {
        templateUrl: '../partials/sawgrass.html',
        controller: 'SawgrassCtrl'

      })
      .otherwise("/");
  });