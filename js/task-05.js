const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

const currentName = () => {
  if (inputName.value) {
    outputName.innerText = inputName.value;
  } else outputName.innerText = "Anonymous";
};

inputName.addEventListener("input", currentName);