// class Flyweight { //抽象享元類別

// }
// class ConcreteFlyweight extends Flyweight { //具體享元類別

// }
// class UnshardConcreteFlyweight extends Flyweight { //不需要共用的類別

// }

// class FlyweightFactory { //享元工廠

// }

class User {
  constructor(name) {
    this.name = name
  }
}

class WebSite { //網站，抽象享元類別
  constructor(name) {
    this.name = name
  }
}

class ConcreteWebSite extends WebSite { //具體享元類別
  use(user) {
    console.log('網站分類：' + this.name + ' 用戶：' + user.name)
  }
}

class WebSiteFactory { //享元工廠
  constructor() {
    this.categories = []
  }
  getWebSiteCategory(key) {
    let result1 = this.categories.map(function(item) {
      return item.category;
    }).indexOf(key);
    
    if (result1 == -1){
      this.categories.push({category: key, entity: new ConcreteWebSite(key)})
      // console.log(result1)
      let result2 = this.categories.map(function(item) {
        return item.category;
      }).indexOf(key);
      // console.log(result2)
      return this.categories[result2].entity
    }
    else {
      let result2 = this.categories.map(function(item) {
        return item.category;
      }).indexOf(key);
      return this.categories[result2].entity
    }
  }
  getWebSiteCount() {
    return this.categories.length
  }
}

let webSiteFactory = new WebSiteFactory()

let webSite1 = webSiteFactory.getWebSiteCategory('產品展示')
webSite1.use(new User('小明'))
let webSite2 = webSiteFactory.getWebSiteCategory('產品展示')
webSite2.use(new User('小華'))
let webSite3 = webSiteFactory.getWebSiteCategory('部落格')
webSite3.use(new User('小美'))
let webSite4 = webSiteFactory.getWebSiteCategory('電商')
webSite4.use(new User('小丑'))

console.log('網站分類總數為：' + webSiteFactory.getWebSiteCount())