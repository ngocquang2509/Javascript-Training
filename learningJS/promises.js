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
