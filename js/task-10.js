function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById("boxes");
const boxesCounter = document.querySelector('[type="number"]');
const boxesCreate = document.querySelector("button[data-create]");
const boxesDestroy = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  let height = 30;
  let width = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = height + "px";
    box.style.width = width + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    height += 10;
    width += 10;
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
let boxesAmount = "";
boxesCounter.addEventListener("input", () => {
  boxesAmount = boxesCounter.value;
});
boxesCreate.addEventListener("click", () => createBoxes(boxesAmount));
boxesDestroy.addEventListener("click", destroyBoxes);
