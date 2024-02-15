interface Animal {
  voice(): string;
}

class Cat implements Animal {
  voice(): string {
    return 'meow';
  }
}

class BigCatDecorator implements Animal {
  private cat: Cat;

  constructor(cat: Cat) {
    this.cat = cat;
  }

  voice(): string {
    return `Big ${this.cat.voice()}`;
  }
}

class SmallCatDecorator implements Animal {
  private cat: Cat;

  constructor(cat: Cat) {
    this.cat = cat;
  }

  voice(): string {
    return `Small ${this.cat.voice()}`;
  }
}

const cat = new Cat();
const bigCat = new BigCatDecorator(cat);
const smallCat = new SmallCatDecorator(cat);
console.log(bigCat.voice());
console.log(smallCat.voice());
console.log(new BigCatDecorator(new SmallCatDecorator(cat)).voice());
