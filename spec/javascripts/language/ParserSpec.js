function print(txt) {
//	console.log(txt)
}

describe("Logo", function() {
         
  it("should do something", function() {
		var cmds = [
			"line 1",
			"line 2",
			"line 3",						
		].join("\n"),
			 parse = logo.parse("forward 10 \n foo \n \n \ndd")
		
		console.log(parse)
	});  
	
});