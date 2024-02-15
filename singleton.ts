class Singleton {

  private static it: number | undefined = undefined;

  private constructor(data: number) {
    Singleton.it = data;
  }

  public static getInstance(): Singleton {
    return new Singleton(Singleton.it ?? 69);
  }

  public getIt() {
    return Singleton.it;
  }
}

const a = Singleton.getInstance().getIt()
console.log(a);
