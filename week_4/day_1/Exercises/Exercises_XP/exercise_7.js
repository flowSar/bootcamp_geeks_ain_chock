while (true) {
  const username = prompt("please eneter your name: ");

  const navbar = document.querySelector(".navbar");
  if (username.length < 3) {
    alert("please insert valid name, it should be at least 3 charachters");
  } else {
    displayUseWelcoming(username);
    break;
  }
  console.log("welcom: ", username[0]);

  function displayUseWelcoming(username) {
    const firstChar = username[0];

    // create the div element for user profile image
    const div1 = document.createElement("div");
    div1.classList.add("userProfile");
    // create p elemtn for profile image
    const p = document.createElement("p");
    p.innerText = firstChar;
    div1.append(p);
    // create dive for welcoming msg
    const div2 = document.createElement("div");
    div2.classList.add("welcomeMsg");
    div2.innerText = `Welcome ${username}`;
    // appened both divs to the nav bar
    navbar.append(div1);
    navbar.append(div2);
  }
}
