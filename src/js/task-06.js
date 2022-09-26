const textInput = document.getElementById('validation-input');

textInput.addEventListener("blur", () => {
    const textLength = textInput.getAttribute("data-length");

    if (textInput.value.length.toString() === textLength) {
        textInput.classList.add("valid");
    } else textInput.classList.add("invalid");
})