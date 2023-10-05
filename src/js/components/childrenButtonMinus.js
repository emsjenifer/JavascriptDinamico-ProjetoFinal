const childrenButtonMinus = document.createElement("button");
childrenButtonMinus.setAttribute("id", "childrenButtonMinus");
childrenButtonMinus.classList.add("input-group__button--small");
childrenButtonMinus.innerText = "-";

childrenButtonMinus.addEventListener("click", () => {
  childrenButtonMinus.dispatchEvent(
    new CustomEvent(events.DIMINUIR_CRIANCAS, { bubbles: true })
  );
});
