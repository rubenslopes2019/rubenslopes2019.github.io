var app = angular.module('app', []);
app.controller("myCtrl", function ($http, $scope) {
    $http.get('https://rubenslopes2019.github.io/lancamento-conta-legado.json').then(function (response) {
        $scope.myData = response.data;
    });
});
