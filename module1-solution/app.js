
(function () {
 "use strict";
angular.module("LunchCheck",[]).
controller("LunchCheckController",LunchCheckController);

  function LunchCheckController($scope)
  {

      $scope.message="";
      $scope.items="";

      $scope.check=function () {
        var itemsList=[];
          var temp=$scope.items.trim();
          if (temp.length>0) {

            temp =temp+",";

            for (var i = 0; i < temp.length; i++) {

             itemsList.push(temp.substring(0, temp.indexOf(",")));
              temp = temp.substring(temp.indexOf(",")+1,temp.length);
              console.log("temp "+temp);
              //console.log(itemsList[i].length);
            }
            console.log('size '+itemsList.length);
            if (itemsList.length>2) {
              $scope.color="green";
              $scope.message="Too much!";
            }else if (itemsList.length<=2) {
              $scope.message="Enjoy!";
                $scope.color="green";
            }
          }else {
            $scope.color="red";
            $scope.message="Please enter data first";
          }
      }
  }
})()
