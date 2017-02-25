var module = angular.module("myFileterApp", []);
module.controller("myFileterAppController", MsgController).filter("Loves", LovesFilter);

function MsgController($scope, $filter, LovesFilter) {
    var name = "Mustafizur";
    var output = name;//$filter('lowercase')(name);
    $scope.name = output;
    $scope.LoveMSSS = function () {
        return LovesFilter("Mustafizur likes hhhhhh");
    }

}


function LovesFilter() {
    return function (input) {
        input = input || "";
        input = input.replace("likes", "love");
        return input;
    }
}