function myFunction(a) {
  console.log(a);
}

let myPromise = new Promise(function (val, err) {
  let x = 1;

  if (x == 0) {
    val("OK");
  } else {
    err("Error");
  }
});

myPromise.then(
  function (val) {
    myFunction(val);
  },
  function (err) {
    myFunction(err);
  }
);

const a = Promise.resolve(3);
const b = new Promise((res, err) => {
  setTimeout(() => {
    res("something here");
  }, 3000);
});
const c = new Promise((res, err) => {
  setTimeout(res, 2000, "Quang Ngoc");
});

Promise.all([a, b, c]).then((val) => {
  console.log(val);
});
