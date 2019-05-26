const Animal = function(name) {
  this.name =  name;
};

const Alligator = function(name) {
  Animal.apply(this, arguments);
}


Alligator.prototype = Object.create(Animal.prototype);
Alligator.prototype.constructor = Alligator;

var jack = new Alligator('jack');

