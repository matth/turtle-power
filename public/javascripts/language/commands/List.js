(function(i) {
	
	/**
	 * New list type
	 */
	function list(value) {
		return new Tokens.LIST(value);
	}

	/**
	 * @logo
	 * @command butfirst <word-or-list>
	 * @description
	 * Returns all but the first component of a word or list
	 * @example    
	 * show butfirst [0 1 2 3]
	 * [1 2 3]
	 */
	i.command('butfirst', function(l) { 
		l.value.shift();
		return list(l.value)
	});
		
})(Interpreter);