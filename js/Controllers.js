var goodsControllers = angular.module('goodsControllers', ['uiSlider']);

goodsControllers.controller('GoodsListCtrl', function ($scope, $http) {
    $http.get('goods/data.json').success(function (data) {
        $scope.goods = data;
    });

    $scope.newGoods ={
        title: '',
        price: '',
        brand: '',
        resolution:''
    }
    $scope.remove = function (oneGoods) {
        var index = $scope.goods.indexOf(oneGoods);
        $scope.goods.splice(index, 1);
    };

    $scope.add = function (goods) {
        console.log(goods);
        console.log($scope);
        $scope.goods.push(goods);
        $scope.goods = new newGoods();
    };
});



goodsControllers.controller('PriceCtrl', function ($scope){
    $scope.lower_price_bound = 100;
    $scope.upper_price_bound = 5000;
});

goodsControllers.controller('DetailCTRL', function ($scope, $http, $routeParams) {
    console.log($routeParams);
    var self = this;
    $http.get('goods/data.json').success(function (data) {
        self.original = data;
        $scope.goods = new Object(self.original);
    });

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.goods);
    };

    $scope.destroy = function() {
        console.log($scope);
        var index = $scope.goods.indexOf(oneGoods);
        $scope.goods.splice(index, 1);

    };

    $scope.save = function() {
        $scope.project.update(function() {
            $location.path('/');
        });
    };
});

