(function(i) {
	
	i.command('sum', function(a, b) { return a + b });
	i.command('difference', function(a, b) { return a - b });	
	i.command('quotient', function(a, b) { return a / b });
	i.command('product', function(a, b) { return a * b });	
	i.command('print', function(a) { console.log(a) });	
		
})(Interpreter);