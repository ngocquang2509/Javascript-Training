function firstFunc() {
  return new Promise((res, err) => {
    setTimeout(() => {
      res("abc");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("cba");
  const result = await firstFunc();
  console.log(result);
}

asyncCall();
