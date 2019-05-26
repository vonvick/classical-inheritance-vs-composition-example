export const EatMixin = superclass => class extends superclass {
  eat(food) {
    console.log(`Eating ${food}`);
  }
};

export const PoopMixin = superclass => class extends superclass {
  poop() {
    console.log("Going to 💩");
  }
};

export const FlyMixin = superclass => class extends superclass {
  fly() {
    console.log("Flying for real!");
  }
};
