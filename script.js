

const counter = document.querySelector("p");
const countdownDuration = 4;
//const randomIndex = Math.floor(Math.random() * redirectURLs.length);
//const redirectUrl = redirectURLs[randomIndex];
const savedItems = JSON.parse(localStorage.getItem("items") || "[]");



let count = countdownDuration;

const intervalId = setInterval(() => {
  count--;
  counter.innerText = count;

  if (count === 0) {
    clearInterval(intervalId);
    location.replace("gift.html");
  }
}, 1000);
