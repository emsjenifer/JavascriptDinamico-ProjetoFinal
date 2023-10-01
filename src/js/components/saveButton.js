const saveButton = document.createElement("button");
saveButton.setAttribute("id", "saveButton");
saveButton.textContent = "Salvar";

window.addEventListener("load", () => {
  if (storedName && storedEmail && storedCep && storedPromotion) {
    saveButton.remove();
  }
});

saveButton.addEventListener("click", function () {
  const nome = nameInput.value;
  const email = emailInput.value;
  const cep = cepInput.value;
  const promocao = promotionCheckbox.value;

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

  localStorage.setItem("userName", nome);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userCEP", cep);
  localStorage.setItem("promotionCheckbox", promocao);

  alert("Dados salvos com sucesso!");
});
