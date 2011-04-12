var Interpreter = (function() {

	// Utility methods
	
	function cmd_name(name) { return "__cmd_" + name }
	
	// Command object       
	
	function _c(name, method) {
		this._arity 	= method.length;     
		this._method  = method;
	}

 	_c.prototype.wants = function() { return this._arity }
 	_c.prototype.exec  = function(args) { return this._method.apply(this, args) }
             
	// Interpreter object 
	
	function _i() {
		this.__commands = {}
	} 
	
	_i.prototype.command = function(name, method) {
		if (typeof method != 'undefined') this.__commands[cmd_name(name)] = new _c(name, method);
		return this.__commands[cmd_name(name)];
	}    
	
	_i.prototype.exec = function(tokens) {      
		 var token = tokens.shift();
		 switch (token.type) {
				case 'WORD':  
					var cmd  = this.command(token.value),
							args = [];  
					for (var i = 0; i < cmd.wants(); i++) args.push(this.exec(tokens));
					return cmd.exec(args);
					break;
				case 'INTEGER':
				case 'FLOAT':
					return token.value;
				default: 
					throw "Unrecogonized token" ;
		 }
	}
	
	return new _i();

})();
