//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("#header h1");

h1.onmouseover = function () {
  h1.style.color = "red";
};

h1.onmouseover = () => {
  h1.style.color = "Black";
  h1.style.fontWeight = "900";
};

h1.addEventListener("mouseover");

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
