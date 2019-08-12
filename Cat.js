function Cat(name) {
	this.name = name;
	this.stomach = [];
}
Cat.prototype.die = function(cat){
	this.stomach.push(cat);
};
module.exports= Cat;