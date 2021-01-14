const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector(".clockTitle");

function getTime() {
  const date = new Date();
  const miniutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `
    ${hours < 10 ? `0${hours}` : hours}:${
    miniutes < 10 ? `0${miniutes}` : miniutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

getTime();
setInterval(getTime, 1000);
