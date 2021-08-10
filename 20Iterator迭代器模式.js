class Iterator { //抽象迭代器類別
  first() {} //得到第1個物件
  next() {} //得到下1個物件
  isDone() {} //是否完成
  currentItem() {} //return目前物件
}

class Aggregate { //抽象聚集類別
  createIterator() {} //建議迭代器
}

class ConcreteIterator extends Iterator {
  constructor(aggregate) {
    super()
    this.current = 0 //當前指標，在哪個位置
    this.aggregate = aggregate
  }
  first() {
    console.log(this.aggregate.arr[0])
    return this.aggregate.arr[0]
  }
  next() {
    let ret = null
    this.current ++
    if (this.current < this.aggregate.arrLength()) {
      ret = this.aggregate.arr[this.current]
    }
    return ret
  }
  isDone() {
    return this.current >= this.aggregate.arrLength() ? true : false //==true就停止
  }
  currentItem() {
    return this.aggregate.arr[this.current]
  }
}

class ConcreteAggregaate extends Aggregate {
  constructor() {
    super()
    this.arr = []
  }
  // createIterator() {
  //   return new ConcreteIterator(this)
  // }
  setArr(arr) {
    this.arr = arr
  }
  arrLength() { //取得Arr總數
    return this.arr.length
  }
}

let passenger = new ConcreteAggregaate
passenger.setArr(['同學A', '同學B', '同學C'])

let i = new ConcreteIterator(passenger)
while (!i.isDone()) {
  console.log(i.currentItem() + ' 請買車票')
  i.next()
}