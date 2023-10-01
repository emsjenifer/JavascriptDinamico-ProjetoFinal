const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "emailInput");
emailInput.setAttribute("placeholder", "Digite seu email");

const storedEmail = localStorage.getItem("userEmail");

window.addEventListener("load", () => {
  if (storedEmail) {
    emailInput.remove();
  }
});
