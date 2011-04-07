describe("Parser", function() {


  it("should return an emtpy array when given an empty string", function() {
    expect(Parser.parse("")).toEqual([]);		
	});  
	
  it("should parse program correctly", function() {

		var programme = [		
			"  forward 50  ", 
			"right 90",
			"forward 50",
			"right 90",
			"penup", 
			"forward 25", 
			"pendown", 
			"forward 25",
			"right 90", 
			"forward 50"
		].join(' ');
     
		console.log(Parser.parse(programme));

  });
  
});