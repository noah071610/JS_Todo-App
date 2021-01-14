const nameForm = document.querySelector(".js-form"),
  input = nameForm.querySelector("input"),
  welcome = document.querySelector(".welcome"),
  h4 = document.querySelector(".js-greetings");

const toDoForm1 = document.querySelector(".toDoForm");

const USER_LS = "currentUser",
  SHOWING = "showing",
  HIDING = "hiding",
  NONE = "none";

//main
loadName();

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function askForName() {
  nameForm.classList.add(SHOWING);
  nameForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  if (currentValue === "") {
    return;
  }
  localStorage.setItem(USER_LS, currentValue);
  paintGreeting(currentValue);
}

function paintGreeting(currentUser) {
  nameForm.classList.replace(SHOWING, NONE);
  welcome.classList.replace(HIDING, SHOWING);
  h4.innerText = ` Welcome,  ${currentUser}. `;
}

welcome.addEventListener("mouseover", () => {
  h4.innerHTML = "JOIN";
});

welcome.addEventListener("mouseleave", () => {
  loadName();
});

welcome.addEventListener("click", () => {
  h4.classList.add(NONE);
  welcome.classList.replace(SHOWING, NONE);
  toDoForm1.classList.replace(NONE, SHOWING);
});
