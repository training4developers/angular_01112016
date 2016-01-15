(function(angular) {

	controller.$inject = [
		"widgetData","$scope","$log","$stateParams","$state"
	];

	function controller(widgetData, $scope, $log, $stateParams, $state) {

		if ($stateParams.widgetId) {
			widgetData.get($stateParams.widgetId).then(function(results) {
				$scope.widget = results.data;
			}).catch(function(results) {
				$log.error(results);
			});
		} else {
			$scope.widget = {};
		}

		$scope.saveWidget = function() {
			widgetData.update($scope.widget).then(function() {
				$state.go("home");
			});

		};

		$scope.deleteWidget = function() {
			if (confirm("Are you sure you want to delete the widget?")) {
				widgetData.delete($scope.widget._id).then(function() {
					$state.go("home");
				});
			}
		};

		$scope.returnToList = function() {
			$state.go("home");
		};

	}

	angular.module("WidgetApp.Controllers")
		.controller("widgetEdit", controller);

})(angular);
