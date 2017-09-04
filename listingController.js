angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.fcode = "";
    $scope.fname = "";
    $scope.flat = "";
    $scope.flong = "";
    $scope.faddr = "";

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({'code':$scope.fcode, 'name':$scope.fname, 'latitude':$scope.flat, 'longitude':$scope.flong, 'address':$scope.faddr});
      $scope.fcode = "";
      $scope.fname = "";
      $scope.flat = "";
      $scope.flong = "";
      $scope.faddr = "";

    };
    $scope.deleteListing = function(index) {
      var del = $scope.listings.indexOf(index);
      $scope.listings.splice(del, 1);
    };
    $scope.showDetails = function(index) {
      var info = $scope.listings.indexOf(index);
      $scope.detailedInfo = $scope.listings[info];
    };
  }
]);
