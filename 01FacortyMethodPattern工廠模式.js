//-----------------------------------------簡單工廠模式
class Calculator {
  enterValue(numberA, operator, numberB) {
    switch (operator) {
      case "+":
        return new Add(numberA, numberB);
        break;

      case "-":
        return new Subtract(numberA, numberB);
        break;

      case "*":
        return new Multiply(numberA, numberB);
        break;

      case "/":
        return new Divide(numberA, numberB);
        break;
    }
  }
}

class Operator {
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
  calculation() {}
}

class Add extends Operator {
  calculation() {
    console.log(this.numberA + this.numberB);
  }
}

class Subtract extends Operator {
  calculation() {
    console.log(this.numberA - this.numberB);
  }
}

class Multiply extends Operator {
  calculation() {
    console.log(this.numberA * this.numberB);
  }
}

class Divide extends Operator {
  calculation() {
    console.log(this.numberA / this.numberB);
  }
}

let facorty = new Calculator(); //建立工廠
let operator = facorty.enterValue(8, "*", 2); //使用工廠的方法建立一個物件
operator.calculation();

//-----------------------------------------工廠方法模式

class Calculator {
  constructor(numberA, numberB){
    this.numberA = numberA
    this.numberB = numberB
  }
  enterValue(numberA, numberB){
  }
}

class AddCalculator extends Calculator {
  enterValue(numberA, numberB){
    return new Add(numberA, numberB)
  }
}

class SubtractCalculator extends Calculator {
  enterValue(numberA, numberB){
    return new Subtract(numberA, numberB)
  }
}

class MultiplyCalculator extends Calculator {
  enterValue(numberA, numberB){
    return new Multiply(numberA, numberB)
  }
}

class DivideCalculator extends Calculator {
  enterValue(numberA, numberB){
    return new Divide(numberA, numberB)
  }
}




class Operator {
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
  calculation() {}
}

class Add extends Operator {
  constructor(numberA, numberB) {
    super(numberA, numberB); //給父class的constructor
  }
  calculation() {
    console.log(this.numberA + this.numberB);
  }
}

class Subtract extends Operator {
  constructor(numberA, numberB) {
    super(numberA, numberB);
  }
  calculation() {
    console.log(this.numberA - this.numberB);
  }
}

class Multiply extends Operator {
  constructor(numberA, numberB) {
    super(numberA, numberB);
  }
  calculation() {
    console.log(this.numberA * this.numberB);
  }
}

class Divide extends Operator {
  constructor(numberA, numberB) {
    super(numberA, numberB);
  }
  calculation() {
    console.log(this.numberA / this.numberB);
  }
}

let facorty = new AddCalculator(); //建立工廠
let operator = facorty.enterValue(8, 2); //使用工廠的方法建立一個物件
operator.calculation();