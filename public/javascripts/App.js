$(function() {
	$('script[type="application/logo"]').each(function() {   
    var drawer = new Drawer(document.getElementById('paper'));
		drawer.draw(Parser.parse(this.innerHTML)); 
	});
});