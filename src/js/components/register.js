const register = document.createElement("div");
register.classList.add("register");

const storedCustomer = localStorage.getItem("customer");
window.addEventListener("load", () => {
  if (storedCustomer) {
    firstRow.remove();
    calculator.style.display = "flex";
  }
});

register.addEventListener(events.REGISTRAR, function () {
  const customer = {
    name: nameInput.value,
    email: emailInput.value,
    cep: cepInput.value,
    promotion: promotionCheckbox.value,
  };

  api
    .getAddressByPostalCode(cepInput.value)
    .then((response) => {
      localStorage.setItem("customer", JSON.stringify(customer));
      localStorage.setItem("addressResponse", JSON.stringify(response));
    })
    .catch((error) => {
      console.log(error);
    });

  calculator.style.display = "flex";

  alert("Dados salvos com sucesso!");
});
