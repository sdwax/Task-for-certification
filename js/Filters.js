angular.module('goodsFilters', [])
    .filter('selectedGoods', function ($filter) {
        return function (input) {
            var i, len;
            var checkedCustomers = $filter('filter')(input, {checked: true});
            if (checkedCustomers.length === 0) {
                return input;
            }
            var brands = {};
            for (i = 0, len = checkedCustomers.length; i < len; ++i) {
                if (!brands.hasOwnProperty(checkedCustomers[i].brand)) {
                    brands[checkedCustomers[i].brand] = true;
                }
            }
            var ret = [];
            for (i = 0, len = input.length; i < len; ++i) {
                if (brands[input[i].brand]) {
                    ret.push(input[i]);
                }
            }
            return ret;
        };
    });

