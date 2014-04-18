var goodsApp = angular.module('goodsApp', [
    'goodsControllers',
    'goodsFilters',
    'ngRoute'
]);

goodsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/Task-for-certification', {
                templateUrl: 'partials/list.html',
                controller: 'GoodsListCtrl'
            })
            .when('/Task-for-certification/:goodName', {
                templateUrl: 'partials/detail.html',
                controller: 'DetailCTRL'
            })
            .otherwise({
                redirectTo: '/Task-for-certification'
            });
    }]);
