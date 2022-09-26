function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBgBtn = document.querySelector("button.change-color");
const currentColor = document.querySelector(".color");

const changeBg = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.innerText = getRandomHexColor();
};

bodyBgBtn.addEventListener("click", changeBg);
