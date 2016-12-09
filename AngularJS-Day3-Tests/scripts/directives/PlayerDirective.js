angular.module('MyApp.directives')
    .directive('playerInfoCard',[
        function () {
            'use strict';
            return{
                restrict: 'E',
                templateUrl:'scripts/views/PlayerInfoCard.html',
                scope: {
                    player : '='
                },
                 link: function (scope, element, attrs) {
                     element.hover(function () {
                         $(this).transition({
                             scale: 1.1
                         })
                     }, function () {
                         $(this).transition({
                             scale: 1.0
                         })
                     })
                },
                controller: function ($scope) {
                    $scope.clickMe = function (player) {
                        alert(player.type);
                    }
                }
            };
         }]);
