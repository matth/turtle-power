var Parser = (function() {

	function tokenize(string) {                       
		return string.toLowerCase().replace(/\s+/g, ':').replace(/^:|:$/, '').split(':');
	}
  
	function parse(tokens) {
		var cmd, token = tokens.shift();
		switch(token) {
			case "forward": 
			case "back": 			
			case "left": 			
			case "right": 			
			case "color": 						
				cmd = [token, tokens.shift()]
				break;  
			case "penup": 
			case "pendown": 			
				cmd = [token]
				break;  
			case "repeat":
				cmd = [token, [tokens.shift(), parse(tokens)]]
				break;
			case "end":
			  return [];
				break;
			default:   
				if (tokens.length == 0) {
					return [];
				}	else {
					throw "Unrecognised token " + token;					
				}		
		}              
		return [cmd].concat(parse(tokens));
	}
	          
	return {
		parse : function(text) { return parse(tokenize(text)); }
	}
	
})();