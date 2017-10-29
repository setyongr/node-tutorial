
function tesVar(){
  let x = 10;
  if(true){
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

tesVar();

function tesLet(){
  let x = 10;
  if(true){
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

tesLet();

for(var x = 0; x < 10; x++){
  setTimeout(() => {
    console.log(x);
  }, 1000);
}
console.log(x);

for(let x = 0; x < 10; x++){
  setTimeout(() => {
    console.log(x);
  }, 1000);
}