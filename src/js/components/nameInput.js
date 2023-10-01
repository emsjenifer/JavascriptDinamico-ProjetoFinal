const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "nameInput");
nameInput.setAttribute("placeholder", "Digite seu nome");

const storedName = localStorage.getItem("userName");

window.addEventListener("load", () => {
  if (storedName) {
    nameInput.remove();
  }
});
