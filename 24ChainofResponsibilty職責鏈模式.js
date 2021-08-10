class Handler { //處理請示介面，抽象類別
  setSuccessor(successor) { //設定繼任者
    this.successor = successor
  }
  handleRequest(request) {} //處理請求的抽象方法
}

class ConerteHandler1 extends Handler { //具體處理者類別
  handleRequest(request) {
    if (request >= 0 && request < 10) {
      console.log('Handler1處理' + request + '的請求')
    }
    else if (this.successor != null){
      this.successor.handleRequest(request)
    }
  }
}
class ConerteHandler2 extends Handler { //具體處理者類別
  handleRequest(request) {
    if (request >= 10 && request < 20) {
      console.log('Handler2處理' + request + '的請求')
    }
    else if (this.successor != null){
      this.successor.handleRequest(request)
    }
  }
}
class ConerteHandler3 extends Handler { //具體處理者類別
  handleRequest(request) {
    if (request >= 20 && request < 30) {
      console.log('Handler3處理' + request + '的請求')
    }
    else if (this.successor != null){
      this.successor.handleRequest(request)
    }
  }
}

let handler1 = new ConerteHandler1()
let handler2 = new ConerteHandler2()
let handler3 = new ConerteHandler3()

handler1.setSuccessor(handler2) //設定handler2是handler1的繼任者
handler2.setSuccessor(handler3) //設定handler3是handler2的繼任者

let requests = [2, 5, 14, 22, 18, 35, 27, 20]

requests.forEach(item => {
  handler1.handleRequest(item)
});