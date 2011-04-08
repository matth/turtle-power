var Lexer = (function() {
  
	// Token object
	function Token(type, value) {
		this.type  = type;
		this.value = value;
	} 	                 
	
	// Some various token types
	Token.WORD    = "WORD"
	Token.NUMBER  = "NUMBER"
	Token.COMMENT = "COMMENT"	
	Token.EOF     = "EOF" 
	Token.WS      = "WHITESPACE"
	
	// Lexer object
	function Lexer(input) {
		this.input = input
		this.max   = input.length
		this.pos   = 0
	}        

	Lexer.prototype.consume = function() {
		var c = this.lookahead()
		this.pos++
		return c
	}

	Lexer.prototype.lookahead = function() {
		return (this.pos < this.max) ? this.input[this.pos] : null
	}
    
	function createConsumer(name, type, matcher) {
		Lexer.prototype[name] = function() {
			var str = "";
			while (this.lookahead() != null && this.lookahead().match(matcher)) { str += this.consume() }
			return new Token(type, str)
		}
	}
                          
	createConsumer('comment', 	 Token.COMMENT, /[^\n]/);
	createConsumer('number',  	 Token.NUMBER,  /[0-9\.]/);	
	createConsumer('word',       Token.WORD,    /[0-9a-zA-Z_]/);		
	createConsumer('whitespace', Token.WS,      /\s/);	
	
	Lexer.prototype.nextToken = function() {
		while (this.lookahead() != null) {
			switch (this.lookahead()) {
				case  " ":
				case "\t":
				case "\n":
				case "\r":
				  this.whitespace();
					break;
				case "#":
					return this.comment();
					break; 
				default:
					if (this.lookahead().match(/[_a-zA-Z]/)) return this.word();
					if (this.lookahead().match(/[0-9]/))     return this.number();					
					throw "Unregognized character " + this.lookahead();
			}
		}
		return new Token(Token.EOF);
	}
	
	return Lexer	
	
})();
