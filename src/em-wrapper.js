var swe = (function() {
	var Module;
	var exports = {};
	for (var propertyName in Module) {
		if (propertyName.substring(0,3) === "_SE" || propertyName.substring(0,4) == "_SWE") {
			exports[propertyName.substring(1)] = Module[propertyName];
		}
	}
})();
