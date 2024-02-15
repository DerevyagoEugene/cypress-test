class A {

  private obj1: B;

  constructor(obj: B) {
    this.obj1 = obj;
  }

  call() {
    this.obj1.call();
  }
}

class B {
  call() {
    console.log('call method in the B class');
  }
}

const b = new B();
const a = new A(b);
a.call();
