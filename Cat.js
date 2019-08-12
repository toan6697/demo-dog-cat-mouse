var chalk = require('chalk');

function Cat(name) {
	this.name = name;
	this.stomach = [];
}
Cat.prototype.die = function(cat){
	this.stomach.push(cat);
};
Cat.prototype.sayHi = function(){
	console.log('i am ' + chalk.blue(this.name));
}
module.exports= Cat;