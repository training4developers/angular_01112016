describe("Directives Test", function() {

	var compileService, mockScope;

	beforeEach(angular.mock.module('App'));

	beforeEach(angular.mock.inject(function($compile, $rootScope) {

		mockScope = $rootScope;

		mockScope.person = {
			firstName: "Bob",
			lastName: "Smith"
		};

		compileService = $compile;

	}));

	it("check the scope", function() {

		var
			linkingFn = compileService("<form name='form'><input ng-model='person.firstName' required-input name='firstName'></form>"),
			element = linkingFn(mockScope);

		mockScope.$digest();
		expect(element.find("input").hasClass("ng-vaflid-required-input")).toEqual(true);

		mockScope.form.firstName.$setViewValue("");
		expect(element.find("input").hasClass("ng-invalid-required-input")).toEqual(true);
	});

});
