let temaNoiteSelecionado = true;
const temaButton = document.createElement("button");
temaButton.textContent = "Tema";
temaButton.style.position = "absolute";
temaButton.style.right = "10px";
temaButton.style.top = "10px";

const temaDia = document.createElement("style");
temaDia.innerHTML = `body {
    background: url(./background.jpg); 
    background-size: cover;
}`;

const temaNoite = document.createElement("style");
temaNoite.innerHTML = `body {
    background: url(./background2.jpg); 
    background-size: cover;
}`;

temaButton.addEventListener("click", function () {
  if (temaNoiteSelecionado) {
    document.head.removeChild(temaNoite);
    document.head.appendChild(temaDia);
    temaNoiteSelecionado = false;
  } else {
    document.head.removeChild(temaDia);
    document.head.appendChild(temaNoite);
    temaNoiteSelecionado = true;
  }
});
