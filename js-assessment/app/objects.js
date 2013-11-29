if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		alterContext : function(fn, obj) {

		},

		alterObjects : function(constructor, greeting) {

				constructor.prototype.greeting = greeting;
			

		},

		iterate : function(obj) {
			
		}
	};
});
