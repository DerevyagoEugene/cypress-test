interface Animal {
  voice(): void;
}

class Cat implements Animal {
  voice(): void {
    console.log('meow');
  }
}

class Dog implements Animal {
  voice(): void {
    console.log('Woof');
  }
}

class Goat implements Animal {
  voice(): void {
    console.log('Meee');
  }
}

function getAnimal(animal: string): Animal {
  switch (animal) {
    case 'cat':
      return new Cat();
    case 'dog':
      return new Dog();
    case 'goat':
      return new Goat();
    default:
      throw new Error("No such animal");
  }
}

getAnimal('cat').voice();
getAnimal('goat').voice();
getAnimal('dog').voice();
