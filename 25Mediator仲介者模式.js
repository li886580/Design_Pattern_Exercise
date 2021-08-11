class UnitedNations { //聯合國類別，抽象仲介者
  declare() {}
}
class UnitedNationsSecurityCouncil extends UnitedNations { //聯合國安理會類別，具體仲介者
  setColleague1(colleague1) { //聯合國安理會了解所有國家，所以有米國和伊拉克的物件屬性
    this.colleague1 = colleague1
  }
  setColleague2(colleague2) { //聯合國安理會了解所有國家，所以有米國和伊拉克的物件屬性
    this.colleague2 = colleague2
  }
  declare(message, colleague) { //聲明
    // if (colleague == this.colleague1){
    //   this.colleague1.setMessage(message)
    // }
    // else {
    //   this.colleague2.setMessage(message)
    // }
    switch (colleague) { //判斷是哪國的聲明內容
      case this.colleague1:
        this.colleague1.declareContent(message)
        break;
    
      case this.colleague2:
        this.colleague2.declareContent(message)
        break;
    }
  }
}

class Country { //國家抽象類別
  constructor(mediator) {
    this.mediator = mediator
  }
  declare() {} //聲明
  getMessage() {}
}
class USA extends Country {
  declare(message) { //聲明
    this.mediator.declare(message, this)
  }
  declareContent(message) { //聲明內容
    console.log("米國說：" + message)
  }
}
class Iraq extends Country {
  declare(message) { //聲明
    this.mediator.declare(message, this)
  }
  declareContent(message) { //聲明內容
    console.log("伊拉克說：" + message)
  }
}

let unsc = new UnitedNationsSecurityCouncil()
let usa = new USA(unsc)
let iraq = new Iraq(unsc)

unsc.setColleague1(usa)
unsc.setColleague2(iraq)

usa.declare("不准研製核武器，否則要發動戰爭！")
iraq.declare("我們沒有核武器")