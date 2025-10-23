import "./style.css";

console.log("test");

let counter = 0;
const counterEl = document.getElementById("counter");
const incBtn = document.getElementById("inc");
const loadBtn = document.getElementById("load");
const saveBtn = document.getElementById("save");

const updateDisplay = () => (counterEl.textContent = counter);

incBtn.onclick = () => {
  counter += 1;
  updateDisplay();
};

loadBtn.onclick = () => {
  counter = Number(localStorage.counter) || 0;
  updateDisplay();
};

saveBtn.onclick = () => {
  localStorage.counter = counter;
};

updateDisplay();
