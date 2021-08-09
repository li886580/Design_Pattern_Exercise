class GameRole { //遊戲角色，發起人
  constructor() { //需要保存的資料
    this.vit = 0 //生命力
    this.atk = 0 //攻擊力
    this.def = 0 //防禦力
  }
  getInitState() { //取得初始化狀態，資料通常來自本機硬碟或遠端資料庫
    this.vit = 100 //生命力
    this.atk = 100 //攻擊力
    this.def = 100 //防禦力
  }
  createState() { //建立一個狀態儲存箱儲存角色狀態，建立備忘錄
    return new RoleStateMemento(this.vit, this.atk, this.def)
  }
  fight() { //戰鬥
    this.vit = 0
    this.atk = 0
    this.def = 0
  }
  recoveryState(memento) { //恢復角色狀態，從角色狀態管理者內拿出對應的儲存箱並將資料寫入
    this.vit = memento.vit
    this.atk = memento.atk
    this.def = memento.def
  }
  showState() { //顯示狀態
    console.log('目前狀態')
    console.log('生命力： ' + this.vit)
    console.log('攻擊力： ' + this.atk)
    console.log('防禦力： ' + this.def)
  }
}

class RoleStateMemento { //角色狀態儲存箱，備忘錄
  constructor(vit, atk, def) { //保存的資料
    this.vit = vit //生命力
    this.atk = atk //攻擊力
    this.def = def //防禦力
  }
}

class RoleStateAdmin { //角色狀態管理者，管理者，負責保存備忘錄
  constructor() {
    this.mementoList = []
    this.mementoListIndex = -1 //目前應該要拿列表的哪一個儲存箱，指標
  }
  setMementoList(memento) { //放入儲存箱
    this.mementoList.push(memento)
    this.mementoListIndex += 1
  }
}


let player = new GameRole
player.getInitState() //取得初始化狀態
player.showState()

let roleStateAdmin = new RoleStateAdmin
roleStateAdmin.setMementoList(player.createState()) //將目前狀態存到一個角色狀態儲存箱，再把這個儲存箱新增到角色狀態管理者的列表

player.fight() //發生戰鬥死掉
player.showState()

player.recoveryState(roleStateAdmin.mementoList[roleStateAdmin.mementoListIndex]) //恢復角色狀態，從角色狀態管理者內取出對應的狀態儲存箱並將資料寫入
player.showState()
