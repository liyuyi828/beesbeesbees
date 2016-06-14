var Grub = function() {
	//Object.call(this);
	this.age = 0;
	this.color = 'pink'; 
	this.food = 'jelly';  
};

// Grub.prototype = Object.create(Object.prototype);
// // Grub.prototype.somethingNew = function() {
// // }
Grub.prototype.constructor = Grub;
Grub.prototype.eat = function() {

}; 