const buttonPlus = document.createElement("button");
buttonPlus.classList.add("input-group__button--small");
buttonPlus.innerText = "+";

buttonPlus.addEventListener("click", () => {
  buttonPlus.dispatchEvent(
    new CustomEvent(events.INCREMENTAR, { bubbles: true })
  );
});
