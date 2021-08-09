class Player { //抽象類別
  constructor(name) {
    this.name = name
  }
  attack() {} //進攻
  defense() {} //防守
}

class Forwards extends Player {
  attack() {
    console.log('前鋒 ' + this.name + ' 進攻')
  }
  defense() {
    console.log('前鋒 ' + this.name + ' 防守')
  }
}

class Center extends Player {
  attack() {
    console.log('中鋒 ' + this.name + ' 進攻')
  }
  defense() {
    console.log('中鋒 ' + this.name + ' 防守')
  }
}

class Guards extends Player {
  attack() {
    console.log('後衛 ' + this.name + ' 進攻')
  }
  defense() {
    console.log('後衛 ' + this.name + ' 防守')
  }
}

class ForeignCenter { //外籍中鋒
  constructor(name) {
    this.name = name
  }
  attackChinese() {
    console.log('外籍中鋒 ' + this.name + ' 進攻')
  }
  defenseChinese() {
    console.log('外籍中鋒 ' + this.name + ' 防守')
  }
}

class Translator extends Player { //翻譯，轉接器，轉接Player和外籍球員
  translationToCenter() { //翻譯給外國人中鋒
    this.centerChinese = new ForeignCenter(this.name)
  }
  attack() {
    this.centerChinese.attackChinese()
  }
  defense() {
    this.centerChinese.defenseChinese()
  }
}



let forwardsA = new Forwards('A君')
forwardsA.attack()

let centerB = new Center('B君')
centerB.defense()

let translator = new Translator('外國人C君')
translator.translationToCenter() //翻譯給外國人中鋒
translator.attack()