class TestPaper { //抽象類別
  constructor(name){
    this.name = name
    this.question1Content = '第一題'
    this.question2Content = '第二題'
  }
  question1(){
    console.log(this.question1Content + ' 答案：' + this.answer1())
  }
  question2(){
    console.log(this.question2Content + ' 答案：' + this.answer2())
  }
  answer1(){
    return ''
  }
  answer2(){
    return ''
  }
  showName(){
    console.log(this.name)
  }
}

class TestPaperA extends TestPaper {
  answer1(){
    return 'A'
  }
  answer2(){
    return 'B'
  }
}

class TestPaperB extends TestPaper {
  answer1(){
    return 'C'
  }
  answer2(){
    return 'D'
  }
}

let studentA = new TestPaperA('銅學A')
studentA.showName()
studentA.question1()
studentA.question2()

let studentB = new TestPaperB('銅學B')
studentB.showName()
studentB.question1()
studentB.question2()