/* setters */
angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters'
]).config(
    function ($provide, $httpProvider) {
        'use strict';
        // :: decorator pattern
        $provide.decorator('DateService', function ($delegate) {
            return $delegate.setDate($delegate.getDate() + 2);
        })
        
        $httpProvider.interceptors.push('HttpInterceptor');
        
        
    }
).factory([ // all our services
    function () {
        'use strict';
        /*your code */
    }
]).run([ // initial state of application
    function () {
        'use strict';
        /*your code */
    }
]);

// setters
angular.module('MyApp.controllers', []);
angular.module('MyApp.services', []);
angular.module('MyApp.providers', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.filters', []);

// initiating the angular JS
// initiate like below instead of <div ng-app="MyApp">
addEventListener("DOMContentLoaded", function () {
    angular.bootstrap(document.body, ['MyApp']);
})