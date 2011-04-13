describe("Tokens", function() {  
	
	function token(type) {
		return Tokens[type];
	}
  
	function tokenTest(type, value, expected) {
		describe(type + " token", function() {  	
			it('should have the correct type and value', function() {
				var t = new token(type)(value) 
				expect(t.type).toEqual(type)
				expect(t.value).toEqual(expected)				
			});
		});	
	}
	
	// Test atom type tokens
	tokenTest('WORD', 'sum', 'sum')   
	tokenTest('NUMBER', '10', 10)	
	tokenTest('NUMBER', '10.89', 10.89)		
	tokenTest('LIST', 'foo', 'foo')			
	
});

