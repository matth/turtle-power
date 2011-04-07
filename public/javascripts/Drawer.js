function Drawer(canvas) {
	 canvas.innerHTML = "";
	 this.d = Math.PI / 2 * -1;
	 this.x = 300;
	 this.y = 200;   
	 this.drawing = true;
	 this.attrs = {
		'stroke' : '#fff',
		'stroke-width' : 2
	 }
	 this.paper = Raphael(document.getElementById('paper'), 600, 600);     	
}                                                                         

Drawer.prototype.draw = function(instructions) {
	this.paper.clear();
	this.paper.rect(0, 0, 600, 400, 10).attr('fill', '#000');	
	this.run(instructions)                       
}          

Drawer.prototype.run = function(instructions) {
	instructions.forEach(function(instruction) {
		this[instruction[0]](instruction[1])
	}, this)
}

Drawer.prototype.repeat = function(args) {
	var num = args[0];
	for (var i = 0; i < num; i++) {         
		this.run(args[1]);
	}
}

Drawer.prototype.color = function(color) {
	this.attrs["stroke"] = color
}

Drawer.prototype.penup = function(dist) {
	this.drawing = false
}                                                      

Drawer.prototype.pendown = function(dist) {
	this.drawing = true
}                                                      

Drawer.prototype.rotate = function(angle) {
	this.d += angle * (Math.PI / 180)
}

Drawer.prototype.left = function(angle) {
	this.rotate(angle * -1)
}

Drawer.prototype.right = function(angle) {
	this.rotate(angle)
}
                         
Drawer.prototype.forward = function(dist) {
	this.move(dist)   
}

Drawer.prototype.back = function(dist) {
	this.move(dist * -1)
}
  
Drawer.prototype.move = function(dist) {    
	var dist = parseInt(dist),
			x 	 = this.x + Math.cos(this.d) * dist,
      y    = this.y + Math.sin(this.d) * dist,
			str  = ["M", this.x, " ", this.y, "L", x, " ", y].join("");
	if (this.drawing) this.paper.path(str).attr(this.attrs)
	this.x = x
	this.y = y
}