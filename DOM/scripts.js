// Selecting elements
const demoId = document.querySelector("#demo-id");
demoId.textContent = "Change the content Demo ID";

const demoClass = document.querySelectorAll(".demo-class");

demoClass.forEach((element) => {
  element.textContent = "Update all demo class";
});

demoClass[0];
