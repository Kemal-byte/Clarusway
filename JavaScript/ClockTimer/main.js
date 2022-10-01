const clock = document.querySelector(".clock");
const time = new Date();

// let saat = time.getHours();

const cal = () => {
  let saat = time.getHours();
  let dakika = time.getMinutes();
  let saniye = time.getSeconds();
  clock.innerText = saat + " " + dakika + " " + saniye;
};
cal();
setInterval(cal, 1000);
