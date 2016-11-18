angular.module('timeApp')
.directive('showTime', function() {
	return {
		restrict: 'AE',
		template: '<div> The current time is {{time | date: "shortTime"}} </div>',
		link: function(scope, elem, attr) {
			scope.time = new Date();

		}
	}
})