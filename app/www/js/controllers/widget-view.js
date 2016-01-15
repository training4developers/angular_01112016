(function(angular) {

	controller.$inject = [
		"widgetData","$scope","$log","$stateParams","$state"
	];

	function controller(widgetData, $scope, $log, $stateParams, $state) {

		widgetData.get($stateParams.widgetId).then(function(results) {
			$scope.widget = results.data;
		}).catch(function(results) {
			$log.error(results);
		});

		$scope.editWidget = function() {
			$state.go("edit", { widgetId: $scope.widget._id });
		};

		$scope.returnToList = function() {
			$state.go("home");
		};

	}

	angular.module("WidgetApp.Controllers")
		.controller("widgetView", controller);

})(angular);
