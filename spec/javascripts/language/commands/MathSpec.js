describe("Math Commands", function() {  
	  	
	describe("sum", function() {  
		it('should return the sum of two numbers as the correct type', function() {
			expect(interpret("sum 2 3").type).toEqual("INTEGER")
			expect(interpret("sum 2 3").value).toEqual(5)			  
			expect(interpret("sum 2.4 3.6").type).toEqual("FLOAT")
			expect(interpret("sum 2.4 3.6").value).toEqual(6.0)			
			expect(interpret("sum 2.4 3").type).toEqual("FLOAT")
			expect(interpret("sum 2.4 3").value).toEqual(5.4)			
		});
	});
	
	describe("difference", function() {  
		it('should return the difference of two numbers as the correct type', function() {
			expect(interpret("difference 3 2").type).toEqual("INTEGER")
			expect(interpret("difference 3 2").value).toEqual(1)			  
			expect(interpret("difference 2.4 3.6").type).toEqual("FLOAT")
			expect(interpret("difference 2.4 3.6").value.toFixed(1)).toEqual('-1.2')			
			expect(interpret("difference 2.4 3").type).toEqual("FLOAT")
			expect(interpret("difference 2.4 3").value.toFixed(1)).toEqual('-0.6')			
		});
	});	

	describe("quotient", function() {  
		it('should return the quotient of two numbers as the correct type', function() {
			expect(interpret("quotient 9 3").type).toEqual("INTEGER")
			expect(interpret("quotient 9 3").value).toEqual(3)			  
			expect(interpret("quotient 9.0 3.0").type).toEqual("FLOAT")
			expect(interpret("quotient 9.0 3.0").value).toEqual(3)			
			expect(interpret("quotient 2.4 3").type).toEqual("FLOAT")
			expect(interpret("quotient 2.4 3").value.toFixed(1)).toEqual('0.8')			
		});
	});

	describe("product", function() {  
		it('should return the product of two numbers as the correct type', function() {
			expect(interpret("product 9 3").type).toEqual("INTEGER")
			expect(interpret("product 9 3").value).toEqual(27)			  
			expect(interpret("product 9.0 3.0").type).toEqual("FLOAT")
			expect(interpret("product 9.0 3.0").value).toEqual(27)			
			expect(interpret("product 2.4 3").type).toEqual("FLOAT")
			expect(interpret("product 2.4 3").value.toFixed(1)).toEqual('7.2')			
	  });
	});
	
});