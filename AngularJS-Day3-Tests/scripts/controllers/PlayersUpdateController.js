angular.module('MyApp.controllers')
    .controller('PlayersUpdateController', ['$scope', '$state', 'player',
        function ($scope, $state, player) {
            'use strict';
            $scope.player = player;
            $scope.updatePlayer = function () {
                $scope.player.$update(function () {
                    $state.go('players')
                })

            }
         }]);
