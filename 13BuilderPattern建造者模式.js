class PersonDirector { //指揮者，決定
  fatPersonBuild() { //定義好做一個胖子的順序
    let fatPerson = new FatPerson
    fatPerson.buildBody();
    fatPerson.buildHead();
    fatPerson.buildArmLeft();
    fatPerson.buildArmRight();
    fatPerson.buildLegLeft();
    fatPerson.buildLegRight();
  }

  manyHeadThinPersonBuild(quantity) { //定義好做一個多頭瘦子的順序
    let manyHeadThinPerson = new ThinPerson
    manyHeadThinPerson.buildBody();
    for (let i = 0; i < quantity; i++){
      manyHeadThinPerson.buildHead();
    }
    manyHeadThinPerson.buildArmLeft();
    manyHeadThinPerson.buildArmRight();
    manyHeadThinPerson.buildLegLeft();
    manyHeadThinPerson.buildLegRight();
  }
}

class PersonBuilder { //建造者，定義好一定要做哪事，抽象類別
  buildHead(){}; //一定要做頭
  buildBody(){}; //一定要做身體
  buildArmLeft(){}; //一定要做左手
  buildArmRight(){}; //一定要做右手
  buildLegLeft(){}; //一定要做左腳
  buildLegRight(){}; //一定要做右腳
}

class FatPerson extends PersonBuilder {
  buildHead(){
    console.log('做了個大頭')
  }
  buildBody(){
    console.log('做了個胖身體')
  }
  buildArmLeft(){
    console.log('做了個粗左手')
  }
  buildArmRight(){
    console.log('做了個粗右手')
  }
  buildLegLeft(){
    console.log('做了個粗左腳')
  }
  buildLegRight(){
    console.log('做了個粗右腳')
  }
}

class ThinPerson extends PersonBuilder {
  buildHead(){
    console.log('做了個小頭')
  }
  buildBody(){
    console.log('做了個瘦身體')
  }
  buildArmLeft(){
    console.log('做了個細左手')
  }
  buildArmRight(){
    console.log('做了個細右手')
  }
  buildLegLeft(){
    console.log('做了個細左腳')
  }
  buildLegRight(){
    console.log('做了個細右腳')
  }
}



let fatPerson = new PersonDirector
fatPerson.fatPersonBuild()

let threeHeadThinPerson = new PersonDirector
threeHeadThinPerson.manyHeadThinPersonBuild(3)