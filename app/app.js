var myNinjaApp = angular.module('myNinjaApp', []);


myNinjaApp.config(function() {

});


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
        },
        { name: 'shimon',
          belt: 'yellow',
          rate: 30,
          available: true,
        },
        { name: 'jade',
          belt: 'black',
          rate: 40,
          available: true,
        },
        { name: 'hiroki',
          belt: 'orange',
          rate: 70,
          available: false,
        },
        { name: 'john',
          belt: 'orange',
          rate: 50,
          available: true,
        }
    ];

}]);