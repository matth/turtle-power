$(function() {
    var drawer = new Drawer(document.getElementById('paper'));	
	function drawIt() {                                         
		drawer.draw(Parser.parse(document.getElementById('actual_code').value));		
	}
	$('#code').submit(function() {
		drawIt()
		return false;
	});
});