// class IGiveGift { //動作，抽象類別
//   giveDolls() {}
//   giveFlowers() {}
//   giveChocolate() {}
// }

// class Pursuit extends IGiveGift { //找代理的
//   constructor(name) {
//     super()
//     this.name = name;
//   }
//   giveDolls() {
//     console.log(this.name + "送你娃娃");
//   }
//   giveFlowers() {
//     console.log(this.name + "送你花");
//   }
//   giveChocolate() {
//     console.log(this.name + "送你巧克力");
//   }
// }

// class Proxy extends IGiveGift { //代理者
//   constructor(requester){
//     super()
//     this.requester = requester
//   }
//   giveDolls() {
//     this.requester.giveDolls();
//   }
//   giveFlowers() {
//     this.requester.giveFlowers();
//   }
//   giveChocolate() {
//     this.requester.giveChocolate();
//   }
// }

// let pursuit = new Pursuit("李嬌嬌");
// let daili = new Proxy(pursuit);
// daili.giveDolls();
//------------------------------------------------------
class IGiveGift { //動作，抽象類別
  giveDolls() {}
  giveFlowers() {}
  giveChocolate() {}
}

class Pursuit extends IGiveGift { //找代理的
  constructor(name) {
    super()
    this.name = name;
  }
  giveDolls() {
    console.log(this.name + "送你娃娃");
  }
  giveFlowers() {
    console.log(this.name + "送你花");
  }
  giveChocolate() {
    console.log(this.name + "送你巧克力");
  }
}

class Proxy extends IGiveGift { //代理者
  constructor(name){
    super()
    this.pursuit = new Pursuit(name);
  }
  giveDolls() {
    this.pursuit.giveDolls();
  }
  giveFlowers() {
    this.pursuit.giveFlowers();
  }
  giveChocolate() {
    this.pursuit.giveChocolate();
  }
}

let daili = new Proxy('李嬌嬌');
daili.giveDolls();
daili.giveFlowers();
daili.giveChocolate();