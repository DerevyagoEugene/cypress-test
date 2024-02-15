class Npc {
  do() {
    console.log('AAAAAA');
  }
}

class Pool {
  private objects: Npc[] = [];

  constructor(size: number) {
    for (let i = 0; i < size; ++i) {
      this.objects.push(new Npc());
    }
  }

  getNpc(): Npc {
    if (this.objects.length > 0) {
      const obj = this.objects[0];
      this.objects.splice(0, 1);
      console.log('npc from pool used');
      return obj;
    }
    console.log('New npc created');
    return new Npc();
  }
}

const pool = new Pool(3);
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
pool.getNpc().do();
