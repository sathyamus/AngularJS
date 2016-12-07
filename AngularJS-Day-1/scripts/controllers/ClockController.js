angular.module('MyApp.controllers')
    .controller('ClockController', ['$scope','$interval',
        function ($scope, $interval) {
            'use strict';
            //$scope.model = {
            
            var model = {
                now:new Date(),
                place:'Bangalore',
                event:'SG Angular Training'
            }
            var update = function() {
                $scope.model.now = new Date()
            }
            
            // Calling JS interval which is outside Angular context, 
            // so need to $apply to notify the change
            
//            setInterval(function() {
//                // update();
//                $scope.$apply(update)
//            }, 1000);
            
            // Angular context only, so no need of $apply to notify the change
//            $interval(function () {
//                update();
//            }, 1000)
            
            $scope.$watch("model.now",
                         function(newValue, oldValue) {
                console.log("Old Value: "+oldValue+" New Value: "+newValue)
            })
            
         }]);
