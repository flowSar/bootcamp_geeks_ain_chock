const form = document.querySelector("form");
console.log(form.innerHTML);

// retreive by name
const firstName = document.getElementById("fname");
console.log("first name: ", firstName);

const lastName = document.getElementById("lname");
console.log("first name: ", lastName);

// retreive by name
const fname = document.getElementsByName("firstname");
console.log(fname[0]);

const lname = document.getElementsByName("lastname");
console.log(lname[0]);

const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  // to prevent navigation when we submit the form
  event.preventDefault();
  const fname = firstName.value;
  const lname = lastName.value;
  if (fname == "" || lname == "") {
    alert("please be sure to fill all inputs");
  } else {
    const li1 = document.createElement("li");
    li1.innerText = fname;
    const li2 = document.createElement("li");
    li2.innerText = lname;
    const ul = document.querySelector(".usersAnswer");
    ul.append(li1);
    ul.append(li2);
  }
});
