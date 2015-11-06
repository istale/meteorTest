angular.module("socially").controller("PartiesListCtrl", function ($scope, $meteor) {
  $scope.parties = $meteor.collection(Parties);

  $scope.vm = {};

  $scope.vm.save = function(){

    var obj = {
      name: 'aa',
      description: 'bb'
    };

    $scope.parties.push(obj);
    $scope.newParty = '';
  };

  $scope.remove = function (party) {
    $scope.parties.splice($scope.parties.indexOf(party), 1);
  };

  $scope.removeAll = function () {
    $scope.parties.remove();
  };
});