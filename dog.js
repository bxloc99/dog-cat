function dog(name){
	this.name = name;
	this.stomach = [];
}

dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}
dog.prototype.sayHi = function(){
	console.log("hi i am a dog. My name is " + chalk.bule(this.name))
}
module.exports = dog;