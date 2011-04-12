describe("Logo", function() {  

	/************************************
	 * UTILITIES
   ************************************/
	
	function parse(text) {
		return logo.parse(text);
	}
	           
	/************************************
	 * MATCHERS
   ************************************/

	beforeEach(function() {
	
	  this.addMatchers({
			toHaveType		 : function(v) { return this.actual.type == v },
			toHaveValue		 : function(v) { return this.actual.value == v }
	  });
	
	});

	/************************************
	 * TEST TOKENISATION
   ************************************/  

	function tokenTest(words, test) {
		
		// Test individually
		words.forEach(function(word) {
			var tokens = parse(word);
			expect(tokens.length).toEqual(1);			
			test(word, tokens[0])
		});
		
		// Test as a group  
		var tokens = parse(words.join(' '))
		expect(tokens.length).toEqual(words.length)
		words.forEach(function(word, i) { test(word, tokens[i]) })
		
	}
	      
	// Word tokens
	it('should parse words into word tokens', function() {
		tokenTest(['foo', 'bar', 'baz'], 
			function(word, token) {
				expect(token).toHaveType('WORD')			
				expect(token).toHaveValue(word)				
		 	});
	});
	
	// Integer tokens
	it('should parse integers into integer tokens', function() {
		tokenTest(['2', '2', '3'], 
			function(integer, token) {
				expect(token).toHaveType('INTEGER')			
				expect(token).toHaveValue(parseInt(integer))				
		 	});
	});	
	
	// Float tokens
	it('should parse floats into float tokens', function() {
		tokenTest(['2.3', '1.32', '3.87987'], 
			function(f, token) {
				expect(token).toHaveType('FLOAT')			
				expect(token).toHaveValue(parseFloat(f))				
		 	});
	});	
	 
	/************************************
	 * TEST OPERATORS + PRECEDENCE
   ************************************/
   
	describe("operators", function() {  
		
		function operatorTest(expr, values) {
			return function() {
				parse(expr).forEach(function(token, i) { 
					expect(token.value).toEqual(values[i])
				})
			}
		}

		it('should parse + operators into sum', 
				operatorTest("2 + 5", ["sum", 2, 5]))
				
		it('should parse - operators into difference', 
				operatorTest("2 - 5", ["difference", 2, 5]))
				
		it('should parse / operators into quotient', 
				operatorTest("2 / 5", ["quotient", 2, 5]))
				
		it('should parse * operators into product', 
				operatorTest("2 * 5", ["product", 2, 5]))
		
		it('should give * precendence to product over +', 
				operatorTest("1 + 2 * 5", ["sum", 1, "product", 2, 5]))
				
		it('should give * precendence to product over -', 
				operatorTest("1 - 2 * 5", ["difference", 1, "product", 2, 5]))				
				
		it('should give / precendence to product over +', 
				operatorTest("1 + 2 / 5", ["sum", 1, "quotient", 2, 5]))

		it('should give / precendence to product over -', 
				operatorTest("1 - 2 / 5", ["difference", 1, "quotient", 2, 5]))				
		
	});

	        
});