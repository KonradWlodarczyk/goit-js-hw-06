const text = document.getElementById("text");
const textSize = document.getElementById("font-size-control");

textSize.addEventListener("input", () => {
    const fontSize = textSize.value;
    text.style.fontSize = fontSize + "px";
})