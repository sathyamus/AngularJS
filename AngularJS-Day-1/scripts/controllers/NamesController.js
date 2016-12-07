angular.module('MyApp.controllers')
    .controller('NamesController',
                ['$scope','NamesService',
        function ($scope, NamesService) {
            'use strict';
            
            // enables the bi-directional binding
            $scope.names = NamesService.names;
            $scope.addName = function () {
                var name = prompt("Enter a Name: ")
                if (name) {
                    NamesService.addName(name);
                }
            }
            
            $scope.removeName = function () {
                var nameList = $('#nameList');
                var index = nameList.get(0).selectedIndex;
                if (index != -1) {
                    NamesService.removeName(index);
                }
            }
         }]);
