function scope() {
  if (true) {
    let data = "data here";
  }
  console.log(data);
} // ReferenceError: data is not defined
