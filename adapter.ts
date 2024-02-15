class Default {
  execute() {
    return 'Default text';
  }
}

class Crap {
  work() {
    return 'jdhsdgksgjfh';
  }
}

class Adapter extends Default {

  private df: Crap;

  constructor(df: Crap) {
    super();
    this.df = df;
  }

  public override execute(): string {
    return this.df.work();
  }
}

function apply(df: Default) {
  console.log(df.execute());
}

const a = new Default();
apply(a);
const b = new Adapter(new Crap());
apply(b);
