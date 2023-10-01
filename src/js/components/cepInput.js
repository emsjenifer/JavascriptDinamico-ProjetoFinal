const cepInput = document.createElement("input");
cepInput.setAttribute("type", "text");
cepInput.setAttribute("id", "cepInput");
cepInput.setAttribute("placeholder", "Digite seu CEP");

const storedCep = localStorage.getItem("userCEP");

window.addEventListener("load", () => {
  if (storedCep) {
    cepInput.remove();
  }
});
