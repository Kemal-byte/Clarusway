//* ======================================================
//*                     TODO APP
//* ======================================================
// Selectors
const input = document.getElementById("todo-input");
const add_btn = document.getElementById("todo-button");
const ul_list = document.getElementById("todo-ul");

//Event block

add_btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a valid value. It can't be empty");
  } else {
    const newToDo = {
      id: new Date().getTime(),
      completed: false,
      text: input.value.trim(),
    };
    createListELement(newToDo);
    input.value = "";
  }
});

// Creating the list and appending it to the parent element and to the DOM.
const createListELement = (el) => {
  const { id, compelte, text } = el; // I didn't really understand this line.
  // List element is created
  const li = document.createElement("li");
  li.id = el.id;
  // li.setAttribute("id", el.id);  You can also do it this way.
  const li_icon_ok = document.createElement("i");
  li_icon_ok.setAttribute("class", "fa fa-check");
  li.appendChild(li_icon_ok);

  console.log(li);
  // When clicked on the check list, it adds completed class which changes the color.
  el.completed && li.classList.add("completed");

  // Text element is created
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(el.text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  //   Text element delete section
  const del = document.createElement("i");
  del.setAttribute("class", "fa fa-trash");
  li.appendChild(del);

  //   adding the li section to ul_list.
  ul_list.appendChild(li);
};

// This code shows what you clicked on the check list.
// This will remove  from the DOM but not from the local storage if added.
ul_list.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});

// adding input when pressing enter.
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    // What is the .code attribute for?
    add_btn.click();
  }
});

// Everytime the page is loaded, input section will be focused.
window.onload = () => {
  input.focus();
};
