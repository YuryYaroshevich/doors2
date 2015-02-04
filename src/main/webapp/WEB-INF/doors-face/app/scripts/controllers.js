'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function ($scope) {
	$scope.pageTitle = 'batman main';
  });

controllers.controller('ExampleCtrl', ['$scope', 'Example', function ($scope, Example) {
	$scope.pageTitle = 'batman example';
	$scope.examples = Example.query();
}]);


controllers.controller('InstrumentCtrl', ['$scope', 'Instrument', function ($scope, Instrument) {
    $scope.instruments = Instrument.query();
}]);

controllers.controller('RecallCtrl', ['$scope', 'Recall', function ($scope, Recall) {
    $scope.recalls = Recall.query();
    
    $scope.addRecall = function() {
      var newRecall = {};
	  newRecall.text = $scope.newRecallText;
      
      Recall.save(newRecall, function(recall) {
    	  $scope.recalls.push(recall);
    	  $scope.error = null;
      }, function(err) {
    	  $scope.error = err.data.message;
      });
      
      $scope.newRecallText = '';
    };
}]);  
  