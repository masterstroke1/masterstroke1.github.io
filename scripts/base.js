var general_app = angular.module('masterstroke',[]);
general_app.config(['$httpProvider','$interpolateProvider',function($httpProvider,$interpolateProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
}]);
general_app.controller("base", function($scope,$http) {
	$scope.flag=1;$scope.option=1;
	console.log($scope.option);
	$scope.height = window.innerHeight;

});
