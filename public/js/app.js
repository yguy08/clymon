var app = angular.module('app',[]);

app.controller('appController', function ($scope, $http) {

console.log("Hello world from controller");

$http.get('/public').success(function(response){
console.log("I got the data I requested");

});

});
