describe("Lexer", function() {
      
	describe(".lookahead", function() {	
		var lexer = new Lexer("abc")
  	it("should return the next character in the sequence", function() {
    	expect(lexer.lookahead()).toEqual("a")		
		})
  	it("should use the pos property to determin character in the sequence", function() {
			lexer.pos = 2
    	expect(lexer.lookahead()).toEqual("c")		
		})		
  	it("should return null when there are no characters left in the sequence", function() {
			lexer.pos = 3
    	expect(lexer.lookahead()).toEqual(null)			
    	expect(new Lexer("").lookahead()).toEqual(null)		
		});		
	});
	 
	describe(".consume", function() {	
		var lexer = new Lexer("abc")
  	it("should return the next character in the sequence and increment position", function() {
			['a','b','c'].forEach(function(character, index) {
    		expect(lexer.consume()).toEqual(character)						
    		expect(lexer.pos).toEqual(index + 1)
			})
		})
  	it("should return null when there are no characters left in the sequence", function() {
    	expect(lexer.consume()).toEqual(null)			
		});		
	});    
	
	describe(".whitespace", function() {
  	it("should consume all whitespace", function() {
			var lexer = new Lexer("   ")
			lexer.whitespace()
    	expect(lexer.pos).toEqual(3)			
		});		   
  	it("should not consume non whitespace", function() {
			var lexer = new Lexer(" a")
			lexer.whitespace()
    	expect(lexer.pos).toEqual(1)			
		});		
	});
	
	describe(".comment", function() {
		it("should consume all text after a comment character up to a newline", function() {
			var lexer = new Lexer("# This is a comment \n command"),
					token = lexer.comment()
			expect(token.type).toEqual("COMMENT")			
			expect(token.value).toEqual("# This is a comment ")						
			expect(lexer.pos).toEqual(20)						
		});		   
	});   
	
	describe(".number", function() {
		it("should consume numerical characters", function() {
			["1", "12.3", "10000"].forEach(function(num_str) {
				var lexer = new Lexer(num_str + " foo bar"),
						token = lexer.number()
				expect(token.type).toEqual("NUMBER")			
				expect(token.value).toEqual(num_str)						
				expect(lexer.pos).toEqual(num_str.length)				
			})	
		});		                                                		
	});	                                                    
	
	describe(".word", function() {
		it("should consume word characters", function() {
				["x", "abc", "abc_123"].forEach(function(word) {
					var lexer = new Lexer(word + " foo bar"),
							token = lexer.word();
					expect(token.type).toEqual("WORD")			
					expect(token.value).toEqual(word)						
					expect(lexer.pos).toEqual(word.length)				
				})	                                            
		});		                                                		
	});	
	
	describe(".nextToken", function() {                 
		var things = [
				["my_function", "WORD"],
				["12", "NUMBER"],			
				["1.232", "NUMBER"],									
				["# My comment", "COMMENT"],								
				["x", "WORD"]
			],
			txt = things.map(function(t) {return t[0]}).join("\n"),
			lex = new Lexer(txt);		
		it("should return the correct token", function() {
			things.forEach(function(thing) {
				 var token = lex.nextToken();
				 expect(token.value).toEqual(thing[0])								
				 expect(token.type).toEqual(thing[1])								
			});
		});
		it("should return EOF token at end", function() {		
			expect(lex.nextToken().type).toEqual("EOF")											
		});
	});

});