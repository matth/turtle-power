describe("Parser", function() {
 
  it("should return an emtpy array when given an empty string", function() {
    expect(Parser.parse("")).toEqual([]);		
	});  
	
  it("should parse program correctly", function() {

		var programme = [		
			"  forward 50  ", 
			"right 90",
			"forward 50",
			"left 90",
			"penup", 
			"back 25", 
			"pendown", 
		].join(' ');
     
		var cmds_p = Parser.parse(programme),
				cmds_e = [["forward", "50"], ["right", "90"], ["forward", "50"], ["left", "90"], ["penup"], ["back", "25"], ["pendown"]];

    expect(cmds_p).toEqual(cmds_e);				

  });
   
  it("should parse repeats correctly", function() {
		var programme = [		
			"repeat 2",
			"forward 50", 
			"right 90", 
			"end", 
		].join(' ');	                
    expect(Parser.parse(programme)).toEqual([["repeat", ["2", [["forward", "50"], ["right", "90"]]]]]);				
	});

});