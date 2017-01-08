var general_app = angular.module('masterstroke',[]);
general_app.config(['$httpProvider','$interpolateProvider',function($httpProvider,$interpolateProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
}]);
general_app.controller("map", function($scope,$http) {
	$scope.height = window.innerHeight;
	$scope.search = function(){
		console.log($scope.height);
		console.log($scope.area);
		console.log($scope.city);
		console.log($scope.country);
    var u = 'undefined';
    if( $scope.area === "" || $scope.city === "" || $scope.country === "" || to($scope.area) === u || to($scope.city) === u || to($scope.country) === u ){
        alert("Fill all details correctly....");
        window.location.reload(true);
      }
    else {
      var location = $scope.area.toString() + ", " + $scope.city.toString() +", "+ $scope.country.toString();
      setcookie("location", location, 15);
      console.log(location);
      window.location.assign("/map.html");
    }
	};
});
function to(variab){
  return (typeof variab);
}
function setcookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value + expires + ";path=/"; // + and " added
}
