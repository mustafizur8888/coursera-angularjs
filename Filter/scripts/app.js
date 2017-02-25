var module = angular.module("myFileterApp", []);
module.controller("myFileterAppController", MsgController);
function MsgController($scope) {
    $scope.name = "Mustafizur";
}