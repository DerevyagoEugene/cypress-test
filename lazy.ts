function lazyFunc(str: string) {
  return function() {
    console.log(str);
  }
}

const a = lazyFunc('Hello');
a.call(a);
