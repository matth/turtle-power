var AST = (function() {
  
	function value_type(type, constructor) {

		var t = function(value) { this.value = value };        
		
		t.prototype.type = type;
		
		if (typeof constructor != 'undefined') {
			return function(val) {
				return new t(constructor(val));
			}
		} else {
			return t;
		}
		
  }
			
	return {
		T_IDENTIFIER : value_type('IDENTIFIER'),
		T_INTEGER    : value_type('INTEGER', function(v) {return parseInt(v)}),
		T_FLOAT      : value_type('FLOAT', function(v) {return parseFloat(v)}),
		T_EXPRESSION : value_type('EXPRESSION'),
	}
	  	
})();