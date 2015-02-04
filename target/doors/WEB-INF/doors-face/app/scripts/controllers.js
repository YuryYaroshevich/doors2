'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function ($scope) {
  });

controllers.controller('ExampleCtrl', ['$scope', 'Example', function ($scope, Example) {
    $scope.examples = Example.query();
    console.log($scope.examples);
}]);


controllers.controller('InstrumentCtrl', ['$scope', 'Instrument', function ($scope, Instrument) {
    $scope.instruments = Instrument.query();
}]);

controllers.controller('RecallCtrl', ['$scope', 'Recall', function ($scope, Recall) {
    $scope.recalls = Recall.query();
    
    console.log($scope.recalls);

    $scope.addRecall = function() {
      var newRecall = {};
	  newRecall.text = $scope.newRecallText;
      
      Recall.save(newRecall, function(recall) {
    	  $scope.recalls.push(recall);
    	  $scope.error = null;
      }, function(err) {
    	  console.log(err);
    	  $scope.error = err.data.message;
      });
      
      $scope.newRecallText = '';
    };
}]);  
  