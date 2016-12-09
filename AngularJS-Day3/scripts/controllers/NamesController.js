angular.module('MyApp.controllers')
    .controller('NamesController',
                ['$scope','NamesService','DateService',
        function ($scope, NamesService, DateService) {
            'use strict';
            
            $scope.date = DateService;
            // enables the bi-directional binding
            $scope.names = NamesService.names;
            $scope.addName = function () {
                var name = prompt("Enter a Name: ")
                if (name) {
                    NamesService.addName(name);
                    $scope.name = $scope.names[0];
                }
            }
            
            $scope.removeName = function () {
                var nameList = $('#nameList');
                var index = nameList.get(0).selectedIndex;
                if (index != -1) {
                    NamesService.removeName(index);
                    $scope.name = $scope.names[0];
                }
            }
            
            
            $scope.$watchCollection("names", function(newValue, oldValue) {
                console.log("Old Value: "+oldValue+" New Value: "+newValue);
            })
            
         }]);
