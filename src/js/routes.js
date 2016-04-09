/**
 * Created by rachelkoldenhoven on 4/8/16.
 */
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      controller: "MainController"
    })
    .when('/checkout', {
      templateUrl: "templates/checkout.html",
      controller: "checkoutController"
    })
    .when('/search', {
      templateUrl: "templates/search.html",
      controller: "searchController"
    })
    .otherwise({
      redirectTo: '/search'
    });
  $locationProvider.html5Mode(true);
});