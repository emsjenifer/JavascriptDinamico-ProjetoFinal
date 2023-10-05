const saveButton = document.createElement("button");
saveButton.setAttribute("id", "saveButton");
saveButton.textContent = "Salvar";

saveButton.addEventListener("click", function () {
  const nome = nameInput.value;
  const email = emailInput.value;
  const cep = cepInput.value.replace("-", "");

  if (!nome.trim()) {
    alert("Por favor, insira seu nome.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um endereço de email válido.");
    return;
  }

  if (!cep.trim()) {
    alert("Por favor, insira seu CEP.");
    return;
  }

  const cepPattern = /^[0-9]{8}$/;
  if (!cepPattern.test(cep)) {
    alert("Por favor, insira um CEP válido com 8 dígitos numéricos.");
    return;
  }

  saveButton.dispatchEvent(
    new CustomEvent(events.REGISTRAR, { bubbles: true })
  );
});
