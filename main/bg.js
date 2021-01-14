const body = document.querySelector("body");
const container = document.querySelector(".container");

(() => {
  const image = new Image();
  const number = Math.floor(Math.random() * 3);
  image.src = `./image/${number + 1}.jpg`;
  image.setAttribute("class", "bgImage");
  body.insertBefore(image, container);
})();
