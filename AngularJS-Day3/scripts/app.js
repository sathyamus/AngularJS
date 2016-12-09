/* setters */
angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters',
    'ui.router'

]).config(['$httpProvider', '$stateProvider', '$provide',
          function ($httpProvider, $stateProvider, $provide) {
        'use strict';
        // :: decorator pattern
        $provide.decorator('DateService', function ($delegate) {
            console.log($delegate)
            return $delegate.setDate($delegate.getDate() + 2);
            // return $delegate.toLocaleDateString()
        })

        $httpProvider.interceptors.push('HttpInterceptor');

        $stateProvider.state('players', {
            url: '/players',
            templateUrl: '/scripts/views/players.html',
            controller: 'PlayersController',
            resolve: {
                Player: "Player",
                players: function (Player) {
                    return Player.query().$promise
                }
            }
        }).state('playerDetails', {
            url: '/players/:id/view',
            templateUrl: '/scripts/views/player-details.html',
            controller: 'PlayersDetailController',
            resolve: {
                player: ['$stateParams', 'Player',
                function ($stateParams, Player) {
                    return Player.get({
                        id: $stateParams.id
                    })
                }]
            }
        }).state('updatePlayer', {
            url: '/players/:id/update',
            templateUrl: '/scripts/views/player-update.html',
            controller: 'PlayersUpdateController',
            resolve: {
                player: ['$stateParams', 'Player', function ($stateParams, Player) {
                    return Player.get({
                        id: $stateParams.id
                    })
                }]
            }
        })

}]).run( // initial state of application
    function ($state) {
        'use strict';
        $state.go('players')
    }
);

// setters
angular.module('MyApp.controllers', []);
angular.module('MyApp.services', ['ngResource']);
angular.module('MyApp.providers', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.filters', []);

// initiating the angular JS
// initiate like below instead of <div ng-app="MyApp">
addEventListener("DOMContentLoaded", function () {
    angular.bootstrap(document.body, ['MyApp']);
})
