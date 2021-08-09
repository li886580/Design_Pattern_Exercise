class Company { //抽象類別，定義枝節點及樹葉的方法，通常會有Add(新增)、Remove(移除)枝節點及樹葉的方法，但樹葉不可使用Add、Remove方法
  constructor(name) {
    this.name = name
    this.companies = []
  }
  add() {} //增加公司
  remove() {} //移除公司
  display() {} //顯示
  lineOfDuty() {} //履行職責
}

class ConcreteCompany extends Company { //具體公司類別，枝節點，可再往下新增枝點
  add(company) {
    this.companies.push(company)
  }
  remove(company) {
    for (let i = 0; i < this.companies.length; i ++) {
      if (this.companies[i] === company) {
        this.companies.splice(i, 1)
        break;
      }
    }
  }
  display() {
    console.log(this.name)
    
    //遞迴去跑物件內所有的display方法，第1種方法
    for (let i = 0; i < this.companies.length; i++) {
      this.companies[i].display()
    }
    
    //第2種方法
    // this.companies.forEach(function(item) {
    //   item.display()
    // })

    //第3種方法
    // for (let company of this.companies) {
    //   company.display()
    // }
  }
  lineOfDuty() {
    //遞迴去跑物件內所有的display方法，第1種方法
    for (let i = 0; i < this.companies.length; i++) {
      this.companies[i].lineOfDuty()
    }
    
    //第2種方法
    // this.companies.forEach(function(item) {
    //   item.lineOfDuty()
    // })

    //第3種方法
    // for (let company of this.companies) {
    //   company.lineOfDuty()
    // }
  }
}

class HRDepartment extends Company { //人資部，樹葉，不可使用Add、Remove方法
  display() {
    console.log(this.name)
  }
  lineOfDuty() {
    console.log(this.name + ' 員工招聘教育訓練管理')
  }
}

class FinanceDepartment extends Company { //財務部，樹葉，不可使用Add、Remove方法
  display() {
    console.log(this.name)
  }
  lineOfDuty() {
    console.log(this.name + ' 公司財務收支管理')
  }
}

let root = new ConcreteCompany('-台灣總公司')
root.add(new HRDepartment('---台灣總公司人力資源部'))
root.add(new FinanceDepartment('---台灣總公司財務部'))

let comp = new ConcreteCompany('---上海華東分公司')
comp.add(new HRDepartment('-----上海華東分公司人力資源部'))
comp.add(new FinanceDepartment('-----上海華東分公司財務部'))
root.add(comp)

let comp1 = new ConcreteCompany('-----南京辦事處')
comp1.add(new HRDepartment('-------南京辦事處人力資源部'))
comp1.add(new FinanceDepartment('-------南京辦事處財務部'))
comp.add(comp1)

let comp2 = new ConcreteCompany('-----杭州辦事處')
comp2.add(new HRDepartment('-------杭州辦事處人力資源部'))
comp2.add(new FinanceDepartment('-------杭州辦事處財務部'))
comp.add(comp2)


root.display()
console.log('')
root.lineOfDuty()