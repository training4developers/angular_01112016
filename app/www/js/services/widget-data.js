(function(angular) {

	factory.$inject = ["$http","RESTURL"];

	function factory($http, RESTURL) {

		return {
			getAll: function() {
				return $http.get(RESTURL + "/widgets");
			},
			get: function(widgetId) {
				return $http.get(RESTURL + "/widgets/" +
					encodeURIComponent(widgetId));
			},
			insert: function(widget) {
				return $http.post(RESTURL + "/widgets", widget);
			},
			update: function(widget) {
				return $http.put(RESTURL + "/widgets/" +
					encodeURIComponent(widget._id), widget);
			},
			delete: function(widgetId) {
				return $http.delete(RESTURL + "/widgets/" +
					encodeURIComponent(widgetId));

			}
		}

	}

	angular.module("WidgetApp.Services")
		.factory("widgetData", factory);

})(angular)
