const womanButtonMinus = document.createElement("button");
womanButtonMinus.setAttribute("id", "womanButtonMinus");
womanButtonMinus.classList.add("input-group__button--small");
womanButtonMinus.innerText = "-";

womanButtonMinus.addEventListener("click", () => {
  womanButtonMinus.dispatchEvent(
    new CustomEvent(events.DIMINUIR_MULHERES, { bubbles: true })
  );
});
