describe("Math Commands", function() {  

	// because im lazy
	function quickly(cmd, behaviour, expectations) {
		describe(cmd, function() {
			it("should return the " + behaviour, function() {
				expectations.forEach(function(e) {
					 var logo = e[0], expected = e[1];
					 expect(interpret(logo).type).toEqual("NUMBER")
					 if (typeof expected != 'function') {
						 var eq = Math.abs(interpret(logo).value - expected) < 0.00001; // compare floats to this accuracy
						 expect(eq).toEqual(true)						
					 } else {
						 expect(expected(interpret(logo).value)).toEqual(true)						
   				 } 
				})
			})
		})
	}
	
	function deg2rad(d) {
		return d * Math.PI / 180;
	}
	
  // Commands
	quickly("abs", "absolute value of a numbers", [
	 ["abs difference 3 10", 7], ["abs difference 3.87 10", 6.13]
	]);
	
	quickly("arctan", "arctan of the value in degrees", [
	 ["arctan 90", Math.atan(deg2rad(90))], ["arctan 45", Math.atan(deg2rad(45))], ["arctan 1", Math.atan(deg2rad(1))]
	]);	                                                                   

	quickly("cos", "cos of the value in degrees", [
	 ["cos 90", Math.cos(deg2rad(90))], ["cos 45", Math.cos(deg2rad(45))]
	]);	

	quickly("difference", "difference of two numbers", [
	 ["quotient 9 3", 3], ["quotient 10 3", 10 / 3], ["quotient 2.4 3", 0.8]
	]);                                                              
	
	quickly("exp", "exponetial of the number", [
	 ["exp 90", Math.exp(90)], ["exp 45.67", Math.exp(45.67)]
	]);	  
	
	quickly("int", "integer portion of the number", [
	 ["int 90", 90], ["int difference 7.6 9", -1], ["int 2.43", 2]
	]);	
	         
	quickly("ln", "naturtal logarithm of the number", [
	 ["ln 1", 0], ["ln 10", Math.log(10)], ["ln 67", Math.log(67)]
	]);	
	
	quickly("log", "logarithm of the number", [
	 ["log 100", 2], ["log 10", Math.log(10) / Math.log(10)], ["log 67", Math.log(67)  / Math.log(10)]
	]);	    
	
	quickly("minus", "additive inverse of the number", [
	 ["minus 100", -100], ["minus 1.234", -1.234], ["minus minus 5", 5]
	]);	
	
	quickly("pi", "PI", [
	 ["pi", Math.PI]
	]);	                               
	
	quickly("power", "number raised to second number", [
	 ["power 10 2", 100], ["power 2 12", Math.pow(2, 12)], ["power 3.1 minus 4", Math.pow(3.1,-4)]
	]);	                           
          
	quickly("product", "product of two numbers", [
	 ["product 9 3", 27], ["product 10 7", 70], ["product 2.4 3", 7.2]
	]);
	
	quickly("quotient", "quotient of two numbers", [
	 ["difference 3 2", 1], ["difference 2.4 3.6", -1.2], ["difference 2.4 3", -0.6]
	]);	 
	
	quickly("random", "random integer less than mumber", [
	 ["random 10", function(a) { return typeof a == 'number' && a < 10 } ]
	]);	
		  	                                  
	quickly("sum", "sum of two numbers", [
	 ["sum 2 3", 5], ["sum 2.4 3.6", 6], ["sum 2.4 3", 5.4]
	]);

});