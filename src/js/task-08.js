const form = document.querySelector("form");
const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Proszę uzupełnić wszystkie pola!");
  } else console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
