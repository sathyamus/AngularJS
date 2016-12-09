angular.module('MyApp.controllers')
    .controller('HttpPlayersController', ['HttpPlayersService',
        function (HttpPlayersService) {
            'use strict';

            var vm = this;
            var promise = HttpPlayersService;

            promise.then(function (players) {

                var time = players.config.responseTimestamp - players.config.requestTimestamp;

                console.log("responseTimestamp" + players.config.responseTimestamp);
                console.log("requestTimestamp" + players.config.requestTimestamp);

                console.log('The request took ' + (time / 1000) + ' seconds.');

                vm.players = players.data;
            }).catch(function (reason) {
                alert(reason);
            }).finally(function () {
                console.log("Inside finally")
            })


         }]);
