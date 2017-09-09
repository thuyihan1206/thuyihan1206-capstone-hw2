(function() {
    "use strict";

    angular
        .module("spa-demo.types")
        .component("sdCurrentTypes", {
            templateUrl: typesTemplateUrl,
            controller: CurrentTypesController
        })
    ;

    typesTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
    function typesTemplateUrl(APP_CONFIG) {
        return APP_CONFIG.current_types_html;
    }

    CurrentTypesController.$inject = ["$scope",
        "spa-demo.types.currentTypeSubjects"];
    function CurrentTypesController($scope,currentSubjects) {
        var vm=this;
        vm.typeClicked = typeClicked;
        vm.isCurrentType = currentSubjects.isCurrentTypeIndex;

        vm.$onInit = function() {
            console.log("CurrentTypesController",$scope);
        }
        vm.$postLink = function() {
            $scope.$watch(
                function() { return currentSubjects.getTypes(); },
                function(types) { vm.types = types; }
            );
        }
        return;
        //////////////
        function typeClicked(index) {
            currentSubjects.setCurrentType(index);
        }
    }
})();
