(function(angular) {

	config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function config($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				controller: "widgetList",
				templateUrl: "/tpls/widget-list.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "widgetView",
				templateUrl: "/tpls/widget-view.html"
			})
			.state("edit", {
				url: "/widgets/:widgetId/edit",
				controller: "widgetEdit",
				templateUrl: "/tpls/widget-edit.html"
			})
			.state("create", {
				url: "/widgets//edit",
				controller: "widgetEdit",
				templateUrl: "/tpls/widget-edit.html"
			});

	}

	angular.module("WidgetApp.Services")
		.config(config)

})(angular);
