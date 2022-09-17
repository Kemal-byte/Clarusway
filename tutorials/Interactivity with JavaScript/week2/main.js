function closeMe() {
  x = document.getElementById("demo");

  // x.style.display = 'none';
  x.className = "closed";
}

function openMe() {
  x = document.getElementById("demo");
  x.className = "open";
}
displayAlt = (element) => {
  console.log(element.alt);
};

imgAlt = (element) => {
  document.getElementsByClassName("box")[0].innerHTML = element.alt;
  // document.getElementsByClassName("box")[0].style.background = "red";
  document.getElementsByClassName("box")[0].classList.add("box-hover");
};
delClass = () => {
  document.getElementsByClassName("box")[0].classList.remove("box-hover");
};
