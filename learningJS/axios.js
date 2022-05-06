const axios = require("axios").default;

/* GET request */
axios
  .get("/user?ID=12345")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

/* POST request */
axios
  .post("/users", {
    firstName: "First name",
    lastName: "Last name",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
