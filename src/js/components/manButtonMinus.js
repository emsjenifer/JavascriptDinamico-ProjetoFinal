const manButtonMinus = document.createElement("button");
manButtonMinus.setAttribute("id", "manButtonMinus");
manButtonMinus.classList.add("input-group__button--small");
manButtonMinus.innerText = "-";

manButtonMinus.addEventListener("click", () => {
  manButtonMinus.dispatchEvent(
    new CustomEvent(events.DIMINUIR_HOMENS, { bubbles: true })
  );
});
