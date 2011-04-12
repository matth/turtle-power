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
	});	  

});