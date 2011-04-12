/************************************
 * UTILITIES
 ************************************/

function parse(text) {
	return logo.parse(text);
}

function interpret(expr) {
	return Interpreter.exec(logo.parse(expr));
}
