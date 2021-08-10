class HandsetSoft { //手機軟體，抽象類別
  runSoft() {}
}
class Game extends HandsetSoft {
  runSoft() {
    console.log('執行手機遊戲')
  }
}
class AddressList extends HandsetSoft {
  runSoft() {
    console.log('執行手機通訊錄')
  }
}

class HandsetBrand { //手機品牌，抽象類別
  constructor(brand) {
    this.brand = brand
    this.soft = null
  }
  setHandsetSoft(soft) { //安裝手機軟體，因品牌須關注軟體，所以可以在機器中安裝軟體已備執行
    this.soft = soft
  }
  run() {}
}
class HandsetBrandSONY extends HandsetBrand {
  run() {
    console.log(this.brand)
    this.soft.runSoft()
  }
}
class HandsetBrandAPPLE extends HandsetBrand {
  run() {
    console.log('APPLE' + this.soft.runSoft())
  }
}

let xperia10 = new HandsetBrandSONY('Xperia 10')
xperia10.setHandsetSoft(new Game())
xperia10.run()

let xperia11 = new HandsetBrandSONY('Xperia 11')
xperia11.setHandsetSoft(new AddressList())
xperia11.run()

let iphone10 = new HandsetBrandSONY('Iphone 10')
iphone10.setHandsetSoft(new Game())
iphone10.run()

let iphone11 = new HandsetBrandSONY('Iphone 11')
iphone11.setHandsetSoft(new AddressList())
iphone11.run()