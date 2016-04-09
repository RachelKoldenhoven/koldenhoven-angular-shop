/**
 * Created by rachelkoldenhoven on 4/8/16.
 */
app.controller('MainController', ['$scope', "$location", function($scope, $location) {
  $scope.view = {};


}]);


app.controller('searchController', ['$scope', "$location", "TeaDataService", function($scope, $location, TeaDataService) {
  $scope.view = {};
  $scope.view.products = TeaDataService.getTeas();





}]);

app.controller('checkoutController', ['$scope', "$location", function($scope, $location) {
  $scope.view = {};
}]);

