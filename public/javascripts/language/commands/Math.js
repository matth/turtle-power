(function(i) {
	
	/**
	 * Get number type
	 */
	function numbertype() {
		var type = 'INTEGER';
		for (var i = 0, l = arguments.length; i < l; i++) {
			if (arguments[i].type == 'FLOAT') return 'FLOAT'
		}
		return type;
	}

	/**
	 * @logo
	 * @command sum <num> <num>
	 * @description
	 * Returns the sum of the two numbers
	 * @example    
	 * show sum 3 3
	 * 6
	 */
	i.command('sum', function(a, b) { 
		return new Tokens[numbertype(a,b)](a.value + b.value );
	});

	/**
	 * @logo
	 * @command difference <num> <num>
	 * @description
	 * Returns the difference of the two numbers
	 * @example  
	 * show difference 5 3
	 * 2   	
	 */	
	i.command('difference', function(a, b) { 
		return new Tokens[numbertype(a,b)](a.value - b.value );
	});
	    
	/**
	 * @logo
	 * @command quotient <num> <num>
	 * @description	
	 * Returns the quotient of the two numbers
	 * @example     
	 * show quotient 10 2
	 * 5	
	 */
	i.command('quotient', function(a, b) { 
		return new Tokens[numbertype(a,b)](a.value / b.value );
	});
	                      
	/**
	 * @logo
	 * @command product <num> <num>
	 * @description	
	 * Returns the product of the two numbers
	 * @example 
	 * show product 3 3 
	 * 9    	
	 */
	i.command('product', function(a, b) { 
		return new Tokens[numbertype(a,b)](a.value * b.value );
	});
	
		
})(Interpreter);