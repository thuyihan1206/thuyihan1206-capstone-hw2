(function() {
    "use strict";

    angular
        .module("spa-demo.types")
        .component("sdCurrentTypeThings", {
            templateUrl: thingsTemplateUrl,
            controller: CurrentThingsController
        })
    ;

    thingsTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
    function thingsTemplateUrl(APP_CONFIG) {
        return APP_CONFIG.current_type_things_html;
    }

    CurrentThingsController.$inject = ["$scope",
        "spa-demo.types.currentTypeSubjects"];
    function CurrentThingsController($scope,currentSubjects) {
        var vm=this;
        vm.thingClicked = thingClicked;
        vm.isCurrentThing = currentSubjects.isCurrentThingIndex;

        vm.$onInit = function() {
            console.log("CurrentThingsController",$scope);
        }
        vm.$postLink = function() {
            $scope.$watch(
                function() { return currentSubjects.getThings(); },
                function(things) { vm.things = things; }
            );
        }
        return;
        //////////////
        function thingClicked(index) {
            currentSubjects.setCurrentThing(index);
        }



    }
})();
