class Company { //抽象類別，定義枝節點及樹葉的方法，通常會有Add(新增)、Remove(移除)枝節點及樹葉的方法，但樹葉不可使用Add、Remove方法
  constructor(name) {
    this.name = name
    this.companies = [this]
  }
  add() {} //增加公司
  remove() {} //移除公司
  display() {} //顯示
  lineOfDuty() {} //履行職責
}

class ConcreteCompany extends Company { //具體公司類別，枝節點，可再往下新增枝點
  add(c) {
    this.companies.push(c)
  }
  remove(c) {
    for (let i = 0; i < this.companies.length; i ++) {
      if (this.companies[i] === c) {
        this.companies.splice(i, 1)
        break;
      }
    }
  }
  display() {
    // for (let i = 0; i < this.companies.length; i++) {
    //   // console.log(typeof this.companies[i])
    //   console.log(this.companies[i].name)
    // }
    this.companies.forEach(function(item) {
      console.log(item.name)
      item.display()
    })
  }
}

class HRDepartment extends Company { //人資部，樹葉，不可使用Add、Remove方法
  lineOfDuty() {
    console.log(this.name + '員工招聘教育訓練管理')
  }
}

class FinanceDepartment extends Company { //財務部，樹葉，不可使用Add、Remove方法
  lineOfDuty() {
    console.log(this.name + '公司財務收支管理')
  }
}

let root = new ConcreteCompany('台灣總公司')
root.add(new HRDepartment('台灣總公司人力資源部'))
root.add(new FinanceDepartment('台灣總公司財務部'))

let comp = new ConcreteCompany('上海華東分公司')
comp.add(new HRDepartment('上海華東分公司人力資源部'))
comp.add(new FinanceDepartment('上海華東分公司財務部'))
root.add(comp)

root.display()
// comp.display()