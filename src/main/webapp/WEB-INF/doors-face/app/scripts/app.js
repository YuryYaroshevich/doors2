'use strict';

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
        controller: 'ExampleCtrl',
        resolve: {
        	examples: function(Example) {
        		return Example.query();
        	}
        }
      })
      .when('/instruments', {
        templateUrl: 'res/doors-face/app/views/instruments.html',
        controller: 'InstrumentCtrl',
        resolve: {
        	instruments: function(Instrument) {
        		return Instrument.query();
        	}
        }
      })
      .when('/recalls', {
        templateUrl: 'res/doors-face/app/views/recalls.html',
        controller: 'RecallCtrl',
        resolve: {
        	recalls: function(Recall) {
            	return Recall.query();
            }
        }
      })
      .otherwise({
    	  redirectTo: '/'
      })
  });
