const manButtonPlus = document.createElement("button");
manButtonPlus.setAttribute("id", "manButtonPlus");
manButtonPlus.classList.add("input-group__button--small");
manButtonPlus.innerText = "+";

manButtonPlus.addEventListener("click", () => {
  manButtonPlus.dispatchEvent(
    new CustomEvent(events.INCREMENTAR_HOMENS, { bubbles: true })
  );
});
