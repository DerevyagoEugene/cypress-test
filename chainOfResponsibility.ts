class Chain {

  private str: string = '';

  public one(): Chain {
    this.str += "one ";
    return this;
  }

  public two(): Chain {
    this.str += "two ";
    return this;
  }

  public three(): Chain {
    this.str += "three ";
    return this;
  }

  public build() {
    console.log(this.str);
  }
}

const a = new Chain()
a.one().three().build();
