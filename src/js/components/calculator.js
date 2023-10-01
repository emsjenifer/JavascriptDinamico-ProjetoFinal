const calculator = document.createElement("div");
calculator.classList.add("calculator");

calculator.addEventListener(events.INCREMENTAR, () => {
  document.getElementById("people").value++;
});

calculator.addEventListener(events.DIMINUIR, () => {
  document.getElementById("people").value--;
});

calculator.addEventListener(events.CALCULAR, () => {
  const childrenCount = parseInt(document.getElementById("children").value);
  const womenCount = parseInt(document.getElementById("women").value);
  const menCount = parseInt(document.getElementById("men").value);

  const childrenResult = childrenCount * 0.1;
  const womenResult = womenCount * 0.2;
  const menResult = menCount * 0.3;

  const resultString = `
    Crianças: ${childrenResult} KG
    Mulheres: ${womenResult} KG
    Homens: ${menResult} KG
    `;

  resultDisplay.innerText = `Resultados:\n${resultString}`;

  calculator.dispatchEvent(
    new CustomEvent(events.CALCULO_REALIZADO, {
      detail: {
        quantidadeDePicanha: resultString,
      },
      bubbles: true,
    })
  );
});
