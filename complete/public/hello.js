//http://rest-service.guides.spring.io/greeting
//open on : http://localhost:8080/
angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8181/greeting?name=User').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
