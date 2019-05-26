import compose from 'lodash/fp/compose';
import { EatMixin, PoopMixin, FlyMixin } from './object_mixin';

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const SuperPowerDog = compose(EatMixin, PoopMixin, FlyMixin)(Animal);

class Dog extends SuperPowerDog {
  bark() {
    console.log("Woff woff!");
  }

  haveLunch(food) {
    this.eat(food);
    this.poop();
  }
}

const jack = new Dog('jack');
jack.bark(); // Woff woff!
jack.haveLunch('Cheese and Bacon'); // Eating Cheese and Bacon. Going to 💩