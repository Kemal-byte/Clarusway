console.log("****app.js started****");

const input = document.querySelector(".lang-input");
const addBtn = document.querySelector(".add-btn");
const delBtn = document.querySelector(".del-btn");
const langList = document.querySelector(".lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);

addBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter a valid language");
  } else {
    const newLang = input.value.trim();
    newUl.innerHTML += `<li>${newLang}</li>`;
    input.value = "";
    input.focus();
  }
});
window.addEventListener("load", () => {
  input.focus();
});

delBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("There isn't any child left.");
});

input.addEventListener("keydown", (event) => {
  // If you check the keycode of the enter key you will see 13.
  if (event.keyCode === 13) {
    addBtn.click();
  }
});
input.addEventListener("keydown", (event) => {
  // If you check the keycode of the enter key you will see 13.
  if (event.keyCode === 46) {
    delBtn.click();
  }
});
