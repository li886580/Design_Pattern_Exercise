class ICloneable {
  constructor(name, sex, age, work, time){
    this.name = name
    this.sex = sex
    this.age = age
    this.work = work
    this.time = time
  }
  clone(){
    return new Resume(this.name, this.sex, this.age, this.work, this.time)
  }
}

class Resume extends ICloneable { //履歷

  setResume(name, sex, age){
    this.name = name
    this.sex = sex
    this.age = age
  }
  setWorkExperience(work, time){
    this.work = work
    this.time = time
  }
  showResume(){
    console.log(this.name, this.sex, this.age)
    console.log(this.work, this.time)
    console.log('')
  }
}

let a = new Resume()
a.setResume('小明', '男', '18')
a.setWorkExperience('光子', '2021')
a.showResume()

let b = a.clone()
b.setResume('小美', '女', '19')
b.setWorkExperience('光子', '2022')
b.showResume()

a.showResume()