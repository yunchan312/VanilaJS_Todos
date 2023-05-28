const backgroundImgs = [
  "img/pic1.jpg",
  "img/pic2.jpg",
  "img/pic3.jpg",
  "img/pic4.jpg",
  "img/pic5.jpg",
];

const body = document.querySelector("body");
const randomNum = Math.floor(Math.random() * 5);

body.style.color = "white";
body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${backgroundImgs[randomNum]})`;
