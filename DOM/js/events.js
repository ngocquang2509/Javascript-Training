const changeText = () => {
  const p = document.querySelector("p");

  p.textContent = "Event handler property";
};

const button = document.querySelector("button");
button.onclick = changeText;
