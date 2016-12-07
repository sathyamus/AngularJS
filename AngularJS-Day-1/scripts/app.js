/* setters */
angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters'
]).config([
    function () {
        'use strict';
        /*your code */
    }
]).factory([ // all our services
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


addEventListener("DOMContentLoaded", function () {
    angular.bootstrap(document.body, ['MyApp']);
})