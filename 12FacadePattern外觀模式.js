class Fund { //基金
  FundCombination() { //基金組合
    this.stock1 = new Stock1
    this.stock2 = new Stock2
    this.nationalDebt1 = new NationalDebt1
    this.realty1 = new Realty1
  }

  buyFund() { //買進基金
    this.stock1.buy()
    this.stock2.buy()
    this.nationalDebt1.buy()
    this.realty1.buy()
  }
  sellFund() { //賣出基金
    this.stock1.sell()
    this.stock2.sell()
    this.nationalDebt1.sell()
    this.realty1.sell()
  }
}

class Stock1 { //股票1
  buy() {
    console.log("買進股票1");
  }
  sell() {
    console.log("賣出股票1");
  }
}

class Stock2 { //股票2
  buy() {
    console.log("買進股票2");
  }
  sell() {
    console.log("賣出股票2");
  }
}

class NationalDebt1 { //公債1
  buy() {
    console.log("買進公債1");
  }
  sell() {
    console.log("賣出公債1");
  }
}

class Realty1 { //房地產1
  buy() {
    console.log("買進房地產1");
  }
  sell() {
    console.log("賣出房地產1");
  }
}

let fund = new Fund
fund.FundCombination()
fund.buyFund()
fund.sellFund()