class Strategty {  //策略
  constructor(product) {
    this.product = product;
    this.totalPrice = function(){
      for(let i = 0 ; i < this.totalPrice ; i++){

      }
    }
  }
  selectStrategty(strategty) {
    switch (strategty) {
      case "normal":
        return new NormalStrategty();
        break;
      case "discount":

      case "rebate":
    }
  }
}

class NormalStrategty extends Strategty { //無折扣
}

class DiscountStrategty extends Strategty { //打折
  discount(number){
    let totalPrice
  }
}

class RebateStrategty extends Strategty { //滿?送
}

let aaa = new Strategty([
  { productName: "洗面乳", price: 30 },
  { productName: "洗髮精", price: 40 },
  { productName: "沐浴乳", price: 50 },
]);
