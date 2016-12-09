angular.module('MyApp.controllers')
    .controller('PlayersDetailController', ['$scope', 'player',
        function ($scope, player) {
            'use strict';

            $scope.player = player;

         }]);
