const childrenButtonPlus = document.createElement("button");
childrenButtonPlus.setAttribute("id", "childrenButtonPlus");
childrenButtonPlus.classList.add("input-group__button--small");
childrenButtonPlus.innerText = "+";

childrenButtonPlus.addEventListener("click", () => {
  childrenButtonPlus.dispatchEvent(
    new CustomEvent(events.INCREMENTAR_CRIANCAS, { bubbles: true })
  );
});
