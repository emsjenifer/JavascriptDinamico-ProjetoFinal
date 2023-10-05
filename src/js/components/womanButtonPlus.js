const womanButtonPlus = document.createElement("button");
womanButtonPlus.setAttribute("id", "womanButtonPlus");
womanButtonPlus.classList.add("input-group__button--small");
womanButtonPlus.innerText = "+";

womanButtonPlus.addEventListener("click", () => {
  womanButtonPlus.dispatchEvent(
    new CustomEvent(events.INCREMENTAR_MULHERES, { bubbles: true })
  );
});
