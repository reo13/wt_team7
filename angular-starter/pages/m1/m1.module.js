/**
 * Created by Omkar Dusane on 27-Oct-16.
 */
var m1 = angular.module('m1',
    [
        'ngRoute'
    ]).config(function ($routeProvider) {

    });

m1.controller('m1SampleCtrl',
    function ($scope) {
        $scope.sample = "M1  module ctrl loaded";

    });