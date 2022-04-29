/* Timeout example */

console.log("before");

setTimeout(() => {
  console.log("Something happen");
}, 2000); // this code will be executed after 2 seconds

console.log("after");

/* Simple callbacks example */

function screens(a) {
  console.log(a);
}

function Cal(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

Cal(4, 6, screens);
