const changeText = () => {
  const p = document.querySelector("p");

  p.textContent = "Event listener";
};

const button = document.querySelector("button");
button.addEventListener("click", changeText);

//Anonymous function
button.addEventListener("click", () => {
  alert("S.O.S");
});

const section = document.querySelector("section");

// Print the selected target
section.addEventListener("click", (event) => {
  console.log(event.target);
});
