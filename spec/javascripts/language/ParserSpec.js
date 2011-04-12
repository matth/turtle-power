describe("Logo", function() {
         
  it("should do something", function() {
		var cmds = [
			// 2 + 2 + 5 - 2
			// "print sum 2 sum 2 difference 5 2"       
			"10 + 3 * 5"
		].join("\n"),
			 parse = logo.parse(cmds);

		// console.log(parse)		                          
		// console.log(parse.map(function(x) {return x.value;}))
		console.log(Interpreter.exec(parse))           
		
	});  
	
});