angular.module('MyApp.controllers')
    .controller('AsyncPlayerController', ['AsyncPlayerService',
        function (AsyncPlayerService) {
            'use strict';

            var vm = this;
            var promise = AsyncPlayerService.getPlayers();

            promise.then(function (players) {
                vm.players = players;
            }).catch(function (reason) {
                alert(reason);
            }).finally(function () {
                console.log("Inside finally")
            })

         }]);
