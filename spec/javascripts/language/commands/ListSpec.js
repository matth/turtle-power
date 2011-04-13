describe("List Commands", function() {  

	describe("butfirst", function() {  
		it('should return a list with all but the first element', function() {
			var res = interpret("butfirst [a b c d]")
			expect(res.type).toEqual("LIST")	
			expect(res.value.length).toEqual(3)				
			expect(res.value.map(function(item) {
				return item.value;
			})).toEqual(['b', 'c', 'd'])							
		}); 
		it('should return an empty list when given one', function() {
			var res = interpret("butfirst []")
			expect(res.type).toEqual("LIST")	
			expect(res.value.length).toEqual(0)				 		
		});		                                                       
		it('should work on a list returned by another function', function() {
			var res = interpret("butfirst butfirst [a b c]")
			expect(res.type).toEqual("LIST")	
			expect(res.value.length).toEqual(1)				 		
			expect(res.value[0].value).toEqual('c')				 					
		});		
	});	  
   
 	describe("butlast", function() {  
		// it("ggg", function() {pending()});
	});

});