let counterValue = 0;

const updateValue = () => {
const currentValue = document.getElementById('value');
currentValue.innerText = counterValue;
}

const decreaseValue = () => {
    counterValue --;
    updateValue();
}

const increaseValue = () => {
    counterValue ++;
    updateValue();
}

document.querySelector('button[data-action="decrement"]').addEventListener("click", decreaseValue);
document.querySelector('button[data-action="increment"]').addEventListener("click", increaseValue);

