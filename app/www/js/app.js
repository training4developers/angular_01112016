(function() {

	"use strict";

	angular.module("WidgetApp", [])
		.run(function($rootScope) {
			$rootScope.message = "Widgets App!";
		});

})(angular);
