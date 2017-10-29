
function e (x, y = 10) {
  // if (x === undefined) {
  //  console.log("X Tidak ada");
  //  return; 
  // }
  console.log(x + y);
}
e(2);


function f(x) {
  return x * 2;
}
console.log(f(2)); // Show 4

var g = function(x) {
  return x / 2;
}
console.log(g(4)); // Show 2

var h = x => {
  return x;
};
console.log(h(2)); // Show 4

var i = (x, y) => x * y;
console.log(i(2, 5)); // Show 4

