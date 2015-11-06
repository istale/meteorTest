angular.module("socially").controller("PartyDetailsCtrl", function ($scope, $stateParams, $meteor) {
  $scope.party = $meteor.object(Partiesssss, $stateParams.partyId);
});
