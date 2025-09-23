const inputName = document.querySelector(".input-name");

const inputLastname = document.querySelector(".input-lastname");

const sendBtn = document.querySelector(".send-btn");
const output = document.querySelector(".outpust");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const name = inputName.value;
  const lastname = inputLastname.value;

  const formData = {
    name,
    lastname,
  };
  output.innerText = JSON.stringify(formData);
});
