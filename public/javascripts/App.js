$(function() {
	$('#code').each(function() {
	  var drawer = new Drawer(document.getElementById('paper'));	
		function drawIt() {                                         
			drawer.draw(Parser.parse(document.getElementById('actual_code').value));		
		}
		$(this).submit(function() {
			drawIt()
			return false;
		});      
		drawIt();
	});
});