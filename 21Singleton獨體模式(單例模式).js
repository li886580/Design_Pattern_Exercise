//----------------------------------------第1種方法
// class Singleton {
//   constructor(name) {
//     this.name = name
//   }
//   static getInstance(name) {
//     //先判斷this.instance是否建立過，因為建立過一次後，this.instance就變成了return new Singleton，所以不管在呼叫多少次這個函式，建立的實體其實都是同一個
//     if (this.instance === undefined) {
//       this.instance = new Singleton(name)
//     }
//     return this.instance
//   }
// }

// let s1 = Singleton.getInstance('aaa')
// let s2 = Singleton.getInstance('bbb')
// if (s1 === s2) {
//   console.log('兩個物件的實體是相同的', s1, s2)
// }

//----------------------------------------第2種方法
class Singleton {
  constructor(name) {
    this.name = name
    if (Singleton.getInstance === undefined) {
      Singleton.getInstance = this
    }
    return Singleton.getInstance
  }
}

let singleton1 = new Singleton('aaa')
let singleton2 = new Singleton('bbb')
if (singleton1 === singleton2) {
  console.log('兩個物件的實體是相同的', singleton1, singleton2) //singleton1和singleton2是相同的實體，singleton2建立時傳的'bbb'是傳辛酸的
}