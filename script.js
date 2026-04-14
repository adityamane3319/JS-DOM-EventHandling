const greeting = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

button.addEventListener("click", () => {
  const name = input.value;

  if (name === "") {
    greeting.innerText = "Hello";
  } else {
    greeting.innerText = "Hello, " + name;
  }
});

boxes.forEach(box => {
  box.addEventListener("click", () => {
    const color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
  });
});