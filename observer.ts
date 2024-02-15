class Channel {
  private subscribers: number = 0;
  private observers: Observer[] = [];

  public attachObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public detachObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if  (index !== -1) this.observers.splice(index, 1);
  }

  public subscibe() {
    this.subscribers += 1;
    this.notify();
  }

  public getAmountOfSubscribers(): number {
    return this.subscribers;
  }

  public notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class Observer {
  public update(channel: Channel) {
    if (channel.getAmountOfSubscribers() % 5 === 0) {
      console.log('New 5 subscribers added');
    }
  }
}

const channel = new Channel();
const observer = new Observer();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();

channel.attachObserver(observer);
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.detachObserver(observer);
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
channel.subscibe();
