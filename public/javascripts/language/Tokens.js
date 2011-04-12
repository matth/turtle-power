var Tokens = (function() {
	
	function token(type, constructor) {
		function t(value) {
			this.type  = type;
			this.value = value;
	 	}
		return (typeof constructor == 'undefined') 
             ? function(val) { return new t(val) } 
						 : function(val) { return new t(constructor(val)) };
	}      

	return {
		'FLOAT'   : token('FLOAT',   function(v) {return parseFloat(v)}),
		'INTEGER' : token('INTEGER', function(v) {return parseInt(v)}),		
		'WORD' 		: token('WORD'),
		'LIST' 		: token('LIST')
	}
	
})();
