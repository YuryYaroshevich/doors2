'use strict';

/**
 * @ngdoc overview
 * @name vovadoorsApp
 * @description
 * # vovadoorsApp
 *
 * Main module of the application.
 */
angular
  .module('vovadoorsApp', [
    'ngResource',
    'ngRoute',
    'controllers',
    'services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'res/doors-face/app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/examples', {
        templateUrl: 'res/doors-face/app/views/examples.html',
        controller: 'ExampleCtrl'/*,
        resolve: {
              examples: function(Examples) {
                  return Examples();
              }
        }*/
      })
      .when('/instruments', {
        templateUrl: 'res/doors-face/app/views/instruments.html',
        controller: 'InstrumentCtrl'
      })
      .when('/recalls', {
        templateUrl: 'res/doors-face/app/views/recalls.html',
        controller: 'RecallCtrl'
      })
      .otherwise({
    	  redirectTo: '/'
      })
  });
