angular.module('MyApp.services')
    .service('HttpPlayersService',['$http',
        function ($http) {
            'use strict';
            
            return $http({
                method:'GET',
                url: 'http://localhost:8888/players',
                transformResponse:
                    transformJSONData
            })
            
            function transformJSONData (data, headers) {
                var transformData = angular.fromJson(data);
                transformData.forEach(function (currentValue, index, prop){
                    currentValue.newData = new Date();
                });
                return transformData;
            }
            
         }]);
