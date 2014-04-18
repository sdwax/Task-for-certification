var goodsControllers = angular.module('goodsControllers', ['uiSlider']);

goodsControllers.controller('GoodsListCtrl', function ($scope, $http) {
    $http.get('goods/data.json').success(function (data) {
        $scope.goods = data;
    });
});

goodsControllers.controller('PriceCtrl', function ($scope){

    $scope.lower_price_bound = 100;
    $scope.upper_price_bound = 5000;

    $scope.priceRange = function(item) {
        return (parseInt(item['min-acceptable-price']) >= $scope.lower_price_bound && parseInt(item['max-acceptable-price']) <= $scope.upper_price_bound);
    };
});

