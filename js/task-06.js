const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  const textLength = textInput.getAttribute("data-length");

  if (textInput.value.length.toString() === textLength) {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    textInput.classList.add("invalid");
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
  }
});
