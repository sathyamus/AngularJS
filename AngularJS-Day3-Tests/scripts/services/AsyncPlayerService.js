angular.module('MyApp.services')
    .factory('AsyncPlayerService',['$q','$timeout',
        function ($q, $timeout) {
            'use strict';
            
            var players = [
                {
                    name:"Kohli",
                    debutYear:"2010",
                    mentor:"Sachin",
                    type:"Batman",
                    friends: ["Anushka", "MS", "Yuvraj"]
                },
                {
                    name:"MS Dhoni",
                    debutYear:"2006",
                    mentor:"Gawasker",
                    type:"WicketKeeper",
                    friends: ["Ashwin", "Jadeja"]
                }
            
            ]
            
            var getPlayers = function () {
                var defered = $q.defer();
                var flag = true;
                // var flag = false;
                $timeout(function() {
                    if (flag) {
                        defered.resolve(players);    
                    } else {
                        defered.reject("Unable to process");
                    }
                }, 3000);
                return defered.promise;
            }
            
            // as this is a factory service, we are using below closure(returns) 
            // to expose the values
            return {
                getPlayers:getPlayers
            };
         }]);
