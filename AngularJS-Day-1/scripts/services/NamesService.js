angular.module('MyApp.services')
    .factory('NamesService',[
        function () {
            'use strict';
            
            var names = ["SN", "LR", "DS"]

            var addName = function(name) {
                names.push(name);
            }
            
            var removeName = function(index) {
                names.splice(index, 1);
            }
            
            // called as closures
            return {
                names:names,
                addName:addName,
                removeName:removeName
            }
            
         }]);
