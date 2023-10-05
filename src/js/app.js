const app = document.querySelector("app");
app.appendChild(temaButton);

app.addEventListener(events.CALCULO_REALIZADO, (e) => {
  console.log("RECEBIDO: " + e.detail.quantidadeItensPorPessoa);
});
