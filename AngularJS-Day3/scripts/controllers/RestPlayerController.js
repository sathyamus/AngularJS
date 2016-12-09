angular.module('MyApp.controllers')
    .controller('RestPlayerController',['$scope','Player',
        function ($scope, Player) {
            'use strict';
            
            Player.query().$promise.then(function(players) {
                $scope.players = players;
            })
            
         }]);
