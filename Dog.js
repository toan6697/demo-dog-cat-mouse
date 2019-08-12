function Dog() {
	this.stomach = [];
}

Dog.prototype.die = function(cat){
	this.stomach.push(cat);
};
module.exports= Dog;