const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/katseye-logo.png") {
    myImage.setAttribute("src", "images/gnarly.png");
  } else {
    myImage.setAttribute("src", "images/katseye-logo.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `KATSEYE IS, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `KATSEYE IS, ${storedName}`;
}


myButton.addEventListener("click", () => {
  setUserName();
});

/*
  SUMMARY:
  This file controls the interactive parts of the webpage.

  1. Image Changer:
     When the user clicks the image, JavaScript checks which image is currently
     showing and swaps it with another one. This helped me understand how click
     events work and how JavaScript can change elements on the page.

  2. Personalized Welcome Message:
     When the page loads, the user is asked to enter their name. That name is saved
     in the browser using localStorage, so it stays even after refreshing the page.
     The heading updates with their name, and the button lets them change it later.

  The key pattern I learned:
  JavaScript lets the page respond to users. By combining event listeners,
  simple conditionals, and stored data, a basic website can feel way more
  interactive instead of static.
*/
