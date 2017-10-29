
for(var i=0; i<10; i++){
  console.log(i);
}

var i = 0;
while(i < 10) {
  console.log(i);
  i++;
}

i = 0;
do{
  console.log(i);
  i++;
} while (i < 10);

var x = { fistName: "Yo", lastName: "Nugroho"};

for (var j in x) {
  // console.log(j);
  console.log(x[j]);
}

var arr = [10, 20 , 30];

arr.forEach(it => {
  console.log(it);
})
for (var j in arr) {
  console.log(j);
}

