'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function ($scope) {
  });

controllers.controller('ExampleCtrl', ['$scope', 'examples', function ($scope, examples) {
	$scope.examples = examples;
}]);


controllers.controller('InstrumentCtrl', ['$scope', 'instruments', function ($scope, instruments) {
    $scope.instruments = instruments;
}]);

controllers.controller('RecallCtrl', ['$scope', 'recalls', 'Recall', function ($scope, recalls, Recall) {
    $scope.recalls = recalls;
    
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
  