class DinBenDonSystem { //訂便當系統
  constructor() {
    this.orders = [] //請求佇列
  }
  setOrder(order) { //設定訂單
    this.orders.push(order)
  }
  notify() { //通知執行
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].executeCommand()
    }
  }
}



class Command { //命令，抽象類別
  constructor(store) {
    this.store = store
  }
  executeCommand() {} //執行命令，叫便當店做事
}

class DrinkCommand extends Command {
  executeCommand() {
    this.store.makeDrink() //做一杯飲料
  }
}

class BenDonCommand extends Command {
  executeCommand() {
    this.store.makeBenDon() //做一份便當
  }
}

class Store {
  makeDrink() {
    console.log('一杯飲料')
  }
  makeBenDon() {
    console.log('一份便當')
  }
}

//訂便當前準備
let benDonStore = new Store
let drinkCommand = new DrinkCommand(benDonStore)
let benDonCommand = new BenDonCommand(benDonStore)
let dinBenDonSystem = new DinBenDonSystem()

//訂便當
dinBenDonSystem.setOrder(drinkCommand)
dinBenDonSystem.setOrder(benDonCommand)
dinBenDonSystem.notify()