angular.module('MyApp.services')
    .factory('HttpInterceptor',[
        function () {
            'use strict';
            
            var interceptor = {
                
                request: function (config) {
                    config.requestTimestamp = new Date().getTime();
                    return config;
                },
                response: function (response) {
                    response.config.responseTimestamp = new Date().getTime();
                    return response;
                }
                
            }
            
            return interceptor;

         }]);
