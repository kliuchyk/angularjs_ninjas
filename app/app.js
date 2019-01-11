var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);

myNinjaApp.run(function() {



});

myNinjaApp.controller('NinjaController', ['$scope', function($scope) {

    $scope.removeNinja = function(ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function() {
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true,
        });

        $scope.newninja.name = '';
        $scope.newninja.belt = '';
        $scope.newninja.rate = '';
    }

    $scope.ninjas = [
        { name: 'mike',
          belt: 'green',
          rate: 50,
          available: true,
          thumb: './content/images/ninja_head.png'         
        },
        { name: 'shimon',
          belt: 'yellow',
          rate: 30,
          available: true,
          thumb: 'content/images/ninja_head.png'         
        },
        { name: 'jade',
          belt: 'black',
          rate: 40,
          available: true,
          thumb: 'content/images/ninja_head.png' 
        },
        { name: 'hiroki',
          belt: 'orange',
          rate: 70,
          available: false,
          thumb: 'content/images/ninja_head.png'          
        },
        { name: 'john',
          belt: 'orange',
          rate: 50,
          available: true,
          thumb: 'content/images/ninja_head.png'
        }
    ];

}]);