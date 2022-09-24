const getNews = async function () {
  const API_KEY = "55ef1fdc1c94581b6b11537c9b8f8bf";

  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  const res = await fetch(url);
  console.log(res);
};
// https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
getNews();
