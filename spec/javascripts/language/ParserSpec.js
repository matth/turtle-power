describe("Logo", function() {  
  
	/************************************
	 * MATCHERS
   ************************************/

	beforeEach(function() {
	
	  this.addMatchers({
			toHaveType		 : function(v) { return this.actual.type == v },
			toHaveValue		 : function(v) { return this.actual.value == v },
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
	it('should parse integers into NUMBER tokens', function() {
		tokenTest(['2', '2', '3'], 
			function(integer, token) {
				expect(token).toHaveType('NUMBER')			
				expect(token).toHaveValue(parseFloat(integer))				
		 	});
	});	
	
	// Float tokens
	it('should parse floats into NUMBER tokens', function() {
		tokenTest(['2.3', '1.32', '3.87987'], 
			function(f, token) {
				expect(token).toHaveType('NUMBER')			
				expect(token).toHaveValue(parseFloat(f))				
		 	});
	});	    
	
	// List tokens
	it('should parse empty lists into list tokens', function() { 
		tokenTest(["[ ]"], 
			function(f, token) {
				expect(token).toHaveType('LIST')			
				expect(token.value.length).toEqual(0)
		 	});		
	});
	
	it('should parse lists into list tokens', function() {
		tokenTest(["[ foo 1  + 2 * 5 ]"], 
			function(f, token) {
				expect(token).toHaveType('LIST')			
				expect(token.value.map(function(v) { 
					return v.value 
				})).toEqual(['foo', 'sum', 1, 'product', 2, 5])				
		 	});
	});	      
	                
	it('should parse lists recursively', function() {
		var tokens = parse("[ foo [ bar [ baz ] ] ]")    

		// 1st level
		expect(tokens[0].type).toEqual('LIST')
		expect(tokens[0].value[0].value).toEqual('foo')		
		 
	 	// 2nd level
		expect(tokens[0].value[1].type).toEqual('LIST')
		expect(tokens[0].value[1].value[0].value).toEqual('bar')
		
		// 3rd level
		expect(tokens[0].value[1].value[1].type).toEqual('LIST')
		expect(tokens[0].value[1].value[1].value[0].value).toEqual('baz')
						
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

		[['+', 'sum'], ['-', 'difference'], ['*', 'product'], ['/', 'quotient']]
			.forEach(function(vals) {
		 			
		 			var opr = vals[0],
		 					cmd = vals[1];
		 			
		 			it('should parse ' + opr + ' operators into ' + cmd, 
		 					operatorTest("2 " + opr + " 5", [cmd, 2, 5])) 
		 			
		 			it('should parse ' + opr + ' operators into ' + cmd + ' when preceded by a cmd', 
		 					operatorTest("cos 2 " + opr + " 5 foo", ['cos', cmd, 2, 5, 'foo']))					 				
		 					 
		 		});            
				
		it('should give * precendence to product over +', 
				operatorTest("1 + 2 * 5", ["sum", 1, "product", 2, 5]))
				
		it('should give * precendence to product over + when preceded by a cmd', 
				operatorTest("cos 1 + 2 * 5", ["cos", "sum", 1, "product", 2, 5]))				
				
		it('should give * precendence to product over -', 
				operatorTest("1 - 2 * 5", ["difference", 1, "product", 2, 5]))				
				
		it('should give / precendence to product over +', 
				operatorTest("1 + 2 / 5", ["sum", 1, "quotient", 2, 5]))

		it('should give / precendence to product over -', 
				operatorTest("1 - 2 / 5", ["difference", 1, "quotient", 2, 5]))				
		
	});
         
});