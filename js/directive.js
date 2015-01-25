parking.directive("alert", function() {
    return {
        templateUrl: "templates/alert.html",
        replace: true,
        restrict: 'E',
        scope: {
            topic: '@topic',
            description: '@description'
        }

    };


});