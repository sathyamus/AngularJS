//angular.module('MyApp.services')
//    .factory('NamesService',[
//        function () {
//            'use strict';
//            
//            var names = ["SN", "LR", "DS"]
//
//            var addName = function(name) {
//                names.push(name);
//            }
//            
//            var removeName = function(index) {
//                names.splice(index, 1);
//            }
//            
//            // called as closures
//            return {
//                names:names,
//                addName:addName,
//                removeName:removeName
//            }
//            
//         }]);

//angular.module('MyApp.services')
//    .provider('NamesService',[
//        function () {
//            'use strict';
//            
//            this.$get = function () {
//                
//            
//            var names = ["SN", "LR", "DS"]
//
//            var addName = function(name) {
//                names.push(name);
//            }
//            
//            var removeName = function(index) {
//                names.splice(index, 1);
//            }
//            
//            // called as closures
//            return {
//                names:names,
//                addName:addName,
//                removeName:removeName
//            }
//            }
//            
//         }]);


angular.module('MyApp.services')
    .service('NamesService',[
        function () {
            'use strict';
            
            this.names = ["SN", "LR", "DS"]

            this.addName = function(name) {
                this.names.push(name);
            }
            
            this.removeName = function(index) {
                this.names.splice(index, 1);
            }
            
         }]);

