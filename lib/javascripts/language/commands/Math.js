(function(i) {
	
	// Util
	function deg2rad(d) {
		return d * (Math.PI / 180);
	}
	
	/**
	 * @logo
	 * @command abs <num>
	 * @description
	 * Returns the absolute value of a number
	 * @example    
	 * show abs -33 ;=> 33
	 */
	i.command('abs', function(a) { 
		return new Tokens.NUMBER(Math.abs(a.value));
	});	          
	
	/**
	 * @logo
	 * @command arctan <num>
	 * @description
	 * Stands for arc tangent. Reports the arc tangent (the inverse function of the tangent) of its input.
	 * @example    
	 * show arctan 1 ;=> 45
	 * @see tan cos sin 
	 */
	i.command('arctan', function(a) { 
		return new Tokens.NUMBER(Math.atan(deg2rad(a.value)));
	});      
	
	/**
	 * @logo
	 * @command cos <num>
	 * @description
	 * Stands for cosine. Reports the cosine of its input.
	 * @example    
	 * show cos 60 ;=> 0.5
	 * @see tan sin 
	 */
	i.command('cos', function(a) { 
		return new Tokens.NUMBER(Math.cos(deg2rad(a.value)));
	});	 
	
	/**
	 * @logo
	 * @command difference <num> <num>
	 * @description
	 * Returns the difference of the two numbers
	 * @example  
	 * show difference 5 3 ;=> 2
	 */	
	i.command('difference', function(a, b) { 
		return new Tokens.NUMBER(a.value - b.value );
	});    
	
	/**
	 * @logo
	 * @command exp <num>
	 * @description
	 * Stands for exponential. Reports the number to the power of the constant e.
	 * @example  
	 * show exp 1 ;=> 2.71828182846 
	 * @see log ln
	 */	
	i.command('exp', function(a) { 
		return new Tokens.NUMBER(Math.exp(a.value));
	});	   
	
	/**
	 * @logo
	 * @command int <num>
	 * @description
	 * Stands for integer. Reports the integer portion of its input.
	 * @example  
	 * show int 9.9999 ;=> 9
	 * show int 2.5 ;=> 2	
	 * @see round
	 */	
	i.command('int', function(a) { 
		return new Tokens.NUMBER(parseInt(a.value));
	});                                
	        
	/**
	 * @logo
	 * @command ln <num>
	 * @description
	 * Stands for natural logarithm. Reports the natural logarithm (the logarithm in base e) of the number. Inverse of exp.
	 * @example  
	 * show ln 1 ;=> 0
	 * @see log exp
	 */	
	i.command('ln', function(a) {               
		return new Tokens.NUMBER(Math.log(a.value));
	});                                

	/**
	 * @logo
	 * @command log <num>
	 * @description
	 * Stands for logarithm. Reports the logarithm of the number
	 * @example  
	 * show log 100 ;=> 2
	 * @see ln exp
	 */	
	i.command('log', function(a) { 
		return new Tokens.NUMBER(Math.log(a.value) / Math.log(10));
	});                                

	/**
	 * @logo
	 * @command minus <num>
	 * @description
	 * Reports the additive inverse of its input. Minus must be used to report the additive inverse of a variable (minus :num instead of -:num)
	 * @example  
	 * show minus 5 ;=> -5
	 * @see difference -
	 */	
	i.command('minus', function(a) { 
		return new Tokens.NUMBER(a.value * -1);
	});	

	/**
	 * @logo
	 * @command pi
	 * @description
	 * Reports the constant PI 
	 * @example  
	 * show pi 3.14159265359 ;=> -5
	 */	
	i.command('pi', function() { 
		return new Tokens.NUMBER(Math.PI);
	});          
	
	/**
	 * @logo
	 * @command power <num> <num>
	 * @description
	 * Reports first number raised to the power of second number
	 * @example  
	 * show power 2 10 ;=> 1024
	 */	
	i.command('power', function(a, b) { 
		return new Tokens.NUMBER(Math.pow(a.value,b.value));
	});	
	
	/**
	 * @logo
	 * @command product <num> <num>
	 * @description	
	 * Returns the product of the two numbers
	 * @example 
	 * show product 3 3 ;=> 9
	 */
	i.command('product', function(a, b) { 
		return new Tokens.NUMBER(a.value * b.value );
	});	                      
	
	/**
	 * @logo
	 * @command quotient <num> <num>
	 * @description	
	 * Returns the quotient of the two numbers
	 * @example     
	 * show quotient 10 2 ;=> 5
	 */
	i.command('quotient', function(a, b) { 
		return new Tokens.NUMBER(a.value / b.value );
	});           
	
	/**
	 * @logo
	 * @command random <num>
	 * @description	
	 * Reports a random non-negative integer less than number
	 * @example     
	 * show random 10 
	 */
	i.command('random', function(a) { 
		return new Tokens.NUMBER(Math.floor(Math.random() * a.value));
	});	
	                      
	/**
	 * @logo
	 * @command sum <num> <num>
	 * @description
	 * Returns the sum of the two numbers
	 * @example    
	 * show sum 3 3 ;=> 6
	 */
	i.command('sum', function(a, b) { 
		return new Tokens.NUMBER(a.value + b.value );
	});
			
})(Interpreter);