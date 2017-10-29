
var person = {
  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue",
  func: (x) => {
    return x * x; 
  }
};


person.firstName = "Setyo";

console.log(person["firstName"]);
console.log(person.func(5));

