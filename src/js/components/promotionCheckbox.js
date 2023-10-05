const promotionCheckbox = document.createElement("input");
promotionCheckbox.setAttribute("type", "checkbox");
promotionCheckbox.setAttribute("id", "promotionCheckbox");

const promotionLabel = document.createElement("label");
promotionLabel.setAttribute("for", "promotionCheckbox");
promotionLabel.textContent = "Receber promoções por e-mail";

promotionCheckbox.addEventListener("change", function () {
  if (promotionCheckbox.checked) {
    alert("Você está inscrito para receber promoções por e-mail.");
  } else {
    alert("Você optou por não receber promoções por e-mail.");
  }
});
