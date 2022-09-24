const fetchCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => {
      if (res.ok) {
        renderError(`Something went wrong: ${res.status}`);
        throw new Error();
      }
    })
    .catch((err) => console.log(err));
};

const renderError = () => {
  const countryDiv = document.querySelector(".countries");
  countryDiv.innerHTML += `<h2>Country can't be fecthed</h2>`;
};

fetchCountryByName("turkey");
fetchCountryByName("usa");
