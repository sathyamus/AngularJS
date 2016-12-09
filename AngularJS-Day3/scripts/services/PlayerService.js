angular.module('MyApp.services')
    .factory('PlayerService',[
        function () {
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
            
            // as this is a factory service, we are using below closure(returns) 
            // to expose the values
            return {
                players:players
            };
         }]);
