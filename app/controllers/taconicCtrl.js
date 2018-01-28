'use strict';

angular.module('highways').controller('TaconicCtrl', function ($scope) {
  console.log('hello');
  $scope.highwayName = 'Taconic State Parkway';
  $scope.highwayDescription = "The Taconic State Parkway (often called the Taconic or the TSP and known administratively" +
    "as New York State Route 987G or NY 987G), is a 104.12-mile (167.56 km) divided highway between Kensico Dam" +
    "and Chatham the longest parkway in the U.S. state of New York.It follows a generally northward route midway" +
    "between the Hudson River and the Connecticut and Massachusetts state lines, along the Taconic Mountains.";

});