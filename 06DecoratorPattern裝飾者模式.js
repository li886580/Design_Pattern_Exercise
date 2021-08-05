class Person {
  constructor(name) {
    this.name = name
  }

  show() {
    console.log(this.name)
  }
}

class Finery extends Person { //裝飾(服飾)繼承本體(人)，此裝飾類為抽象
  decorate(component) { //包裝本體
    this.component = component
  }
}

class TShirts extends Finery { //具體裝飾類(衣服)繼承抽象裝飾(服飾)
  show() {
    this.component.show()
    console.log('穿上T-Shirts')
  }
}

class BigTrouser extends Finery { //具體裝飾類(垮褲)繼承抽象裝飾(服飾)
  show() {
    this.component.show()
    console.log('穿上垮褲')
  }
}

class Sneakers extends Finery{ //具體裝飾類(球鞋)繼承抽象裝飾(服飾)
  show() {
    this.component.show()
    console.log('穿上球鞋')
  }
}

function one(){ //第一種裝扮，裝飾者最重要的原則就是把各種裝飾封裝起來
  let person = new Person('小明')
  let tShirts = new TShirts('tShirts')
  let bigTrouser = new BigTrouser('bigTrouser')
  let sneakers = new Sneakers('sneakers')

  tShirts.decorate(person)
  bigTrouser.decorate(tShirts)
  sneakers.decorate(bigTrouser)

  sneakers.show()
}
one()