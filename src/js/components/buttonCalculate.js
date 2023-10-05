const buttonCalculate = document.createElement("button");
buttonCalculate.classList.add("input-group__button--big");
buttonCalculate.innerText = "Calcular";

buttonCalculate.addEventListener("click", () => {
  buttonCalculate.dispatchEvent(
    new CustomEvent(events.CALCULAR, { bubbles: true })
  );
});
