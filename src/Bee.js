var Bee = function() {
	//call Grub superclass
	Grub.call(this);
	//set constructor
	//set prototype
	this.age = 5; 
	this.color = 'yellow';
	this.job = 'keep on growing'; 
 
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee; 