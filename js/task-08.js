const form = document.querySelector("form");
const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Proszę uzupełnić wszystkie pola!");
  } else {
    const user = {
      email: email.value,
      password: password.value
    }
    console.log(user);
  event.currentTarget.reset();}
};

form.addEventListener("submit", handleSubmit);
