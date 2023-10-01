const buttonMinus = document.createElement("button");
buttonMinus.classList.add("input-group__button--small");
buttonMinus.innerText = "-";

buttonMinus.addEventListener("click", () => {
  buttonMinus.dispatchEvent(
    new CustomEvent(events.DIMINUIR, { bubbles: true })
  );
});
