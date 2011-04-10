function print(txt) {
//	console.log(txt)
}

describe("Logo", function() {
         
  it("should do something", function() {
		var cmds = [
			"to 10",        
			"to",
			"forward 16.7 ",
			"end",
			"end",
			"forward 10"
		].join(" \n") + "\n",
			 parse = logo.parse(cmds);
		
		parse[1].forEach(function(line) {
			console.log(line)
		})                               
		
	});  
	
});