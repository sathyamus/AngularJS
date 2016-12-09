angular.module('MyApp.controllers')
    .controller('PlayersController', ['$scope', 'players',
        function ($scope, players) {
            'use strict';

            players.$promise.then(function(PlayerResponse) {
                $scope.players=PlayerResponse;
            })


         }]);
