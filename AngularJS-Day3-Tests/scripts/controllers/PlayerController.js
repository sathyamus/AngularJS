angular.module('MyApp.controllers')
    .controller('PlayerController',['PlayerService',
        function (PlayerService) {
            'use strict';
            
            var vm = this;
            vm.players = PlayerService.players;
            
         }]);
