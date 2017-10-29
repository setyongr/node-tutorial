class A {
  constructor(x) {
    this.x = x;
  }

  showX(){
    console.log(this.x);
  }
}

class B extends A{
  constructor(x){
    super(x);
  }
}

let a = new B(2);
a.showX();