const canSayHi = self ({
  sayHi: () => console.log(`Hi, I am ${self.name}`),
});

const canEat = () => ({
  eat: food => console.log(`Eating ${food}...`)
});

const canPoop = () => ({
  poop: () => console.log('Going to 💩...')
});

const socialBehaviours = self => Object.assign({}, canSayHi(self), canEat(), canPoop());

const dog = name => {
  const self = {
    name,
  };

  const dogBehaviours = self => ({
    bite: () => console.log('Yum yum!!'),
  });

  return Object.assign(self, socialBehaviours(self), dogBehaviours(self))
};

const jack = dog('jack');
jack.sayHi(); // Hi! I am jack
jack.eat("Meat"); // Eating Meat...
jack.bite(); // Yum yum!


const cat = name => {
  const self = {
    name,
  };

  const catBehaviours = self => ({
    sound: () => console.log('Mew mew!'),
    haveLunch: food => {
      self.eat(food);
      self.poop();
    },
  });

  return Object.assign(self, catBehaviours(self), canEat(), canPoop());
};
