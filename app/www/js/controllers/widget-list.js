(function(angular) {

	controller.$inject = ["widgetData","$scope","$log"];

	function controller(widgetData, $scope, $log) {

		widgetData.getAll().then(function(results) {
			$scope.widgets = results.data;
		}).catch(function(results) {
			$log.error(results);
		});

	}

	angular.module("WidgetApp.Controllers")
		.controller("widgetList", controller);

})(angular);
