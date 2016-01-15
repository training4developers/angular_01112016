(function(angular) {

	"use strict";

	angular.module("WidgetApp.Services", []);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);

	angular.module("WidgetApp", [
		"ui.router", "WidgetApp.Services","WidgetApp.Controllers"
	]);

})(angular);
