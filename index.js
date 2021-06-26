var dog = require("./dog")
var cat = require("./Cat")


var cat = new cat('meomeo')
var dog = new dog('tom')	

dog.sayHi();
dog.eat(cat);

console.log(dog.stomach)