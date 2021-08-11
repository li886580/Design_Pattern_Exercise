class Pokemon { //抽象類別
  constructor(name) {
    this.name = name
  }
  attack() {} //進攻
  defense() {} //防禦
}

class GrassPokemon extends Pokemon { //草系神奇寶貝
  attack() {
    console.log(this.name + ' 使出飛葉快刀')
  }
  defense() {
    console.log(this.name + ' 防禦')
  }
}

class FirePokemon extends Pokemon { //火系神奇寶貝
  attack() {
    console.log(this.name + ' 使出噴射火焰')
  }
  defense() {
    console.log(this.name + ' 防禦')
  }
}

class UnderstandGrassPokemon { //聽不懂人類語言的草系神奇寶貝，轉接器
  constructor(name) {
    this.name = name
  }
  attack() {
    console.log(this.name + ' 使出藤蔓')
  }
  defense() {
    console.log(+ this.name + ' 防禦')
  }
}

class Meowth extends Pokemon { //喵喵，轉接器，轉接Pokemon和聽不懂人類語言的神奇寶貝
  translationToGrassPokemon() { //翻譯給草系神奇寶貝
    this.grassPokemon = new UnderstandGrassPokemon(this.name)
  }
  attack() {
    this.grassPokemon.attack()
  }
  defense() {
    this.grassPokemon.defense()
  }
}



let bulbasaur = new GrassPokemon('妙蛙種子')
bulbasaur.attack()

let charizard = new FirePokemon('噴火龍')
charizard.defense()

let meowthTranslation = new Meowth('妙蛙花') //喵喵翻譯
meowth.translationToGrassPokemon() //翻譯給草系神奇寶貝
meowth.attack() //叫草系神起寶貝攻擊