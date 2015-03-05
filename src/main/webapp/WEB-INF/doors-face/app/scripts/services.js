'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('Example', ['$resource',
	function($resource) {
		return $resource('/doors/res/doors-face/app/examples/examples.json');
	}
]);


services.factory('Instrument', ['$resource',
	function($resource) {
		return $resource('/doors/res/doors-face/app/instruments/instr.json');
	}
]);

services.factory('Recall', ['$resource',
	function($resource) {
		return $resource('/doors/recall');
	}
]);
