class Subject { //目標對象，抽象通知者
  constructor() {
    this.colleagues = []
    this.state = false //false還沒回來，true回來了
  }
  addObserver(person) { //增加觀察者對象
    this.colleagues.push(person)
  }
  deleteObserver(person) { //刪除觀察者對象
    for (let i=0; i<this.colleagues.length; i++) {
      if (this.colleagues[i] === person) {
        this.colleagues.splice(i ,1)
        break;
      }
    }
  }
  changeState() { //切換狀態
    this.state = !this.state
  }
  notifyObserver() { //通知觀察者對象
    if (this.state === true) {
      for (let i = 0;i<this.colleagues.length;i++) {
        this.colleagues[i].update(whoCall)
      }
    }
  }
}

class Boss extends Subject { //老闆，目標對象(Subject)，具體通知者
  notifyObserver() { //通知觀察者對象
    if (this.state === true) {
      for (let i = 0;i<this.colleagues.length;i++) {
        this.colleagues[i].update('我是老闆我回來啦 ')
      }
    }
  }
}
class Secretary extends Subject { //秘書，目標對象(Subject)，具體通知者
  notifyObserver() { //通知觀察者對象
    if (this.state === true) {
      for (let i = 0;i<this.colleagues.length;i++) {
        this.colleagues[i].update('我是秘書老闆回來啦 ')
      }
    }
  }
}

class Observer { //觀察者對象，抽象被通知者
  update(whoCall) {
  }
}

class ColleagueA extends Observer { //同事A，觀者對象(Observer)，具體被通知者
  update(whoCall) {
    console.log(whoCall + '同事A！')
  }
}
class ColleagueB extends Observer { //同事B，觀者對象(Observer)，具體被通知者
  update(whoCall) {
    console.log(whoCall + '同事B！')
  }
}

let boss = new Boss //老闆
let secretary = new Secretary //秘書
let colleagueA = new ColleagueA //同事A
let colleagueB = new ColleagueB //同事B

boss.addObserver(colleagueA) //增加同事A到待通知列表
boss.addObserver(colleagueB) //增加同事B到待通知列表
boss.deleteObserver(colleagueA) //將同事A在待通知列表刪除
boss.changeState() //修改狀態
boss.notifyObserver()

secretary.addObserver(colleagueA) //增加同事A到待通知列表
secretary.addObserver(colleagueB) //增加同事B到待通知列表
secretary.deleteObserver(colleagueB) //將同事B在待通知列表刪除
secretary.changeState() //修改狀態
secretary.notifyObserver()