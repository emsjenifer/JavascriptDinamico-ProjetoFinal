const calculator = document.createElement("div");
calculator.classList.add("calculator");

calculator.addEventListener(events.INCREMENTAR_HOMENS, () => {
  document.getElementById("man").value++;
});

calculator.addEventListener(events.DIMINUIR_HOMENS, () => {
  document.getElementById("man").value--;
});

calculator.addEventListener(events.INCREMENTAR_MULHERES, () => {
  document.getElementById("woman").value++;
});

calculator.addEventListener(events.DIMINUIR_MULHERES, () => {
  document.getElementById("woman").value--;
});

calculator.addEventListener(events.INCREMENTAR_CRIANCAS, () => {
  document.getElementById("children").value++;
});

calculator.addEventListener(events.DIMINUIR_CRIANCAS, () => {
  document.getElementById("children").value--;
});

calculator.addEventListener(events.CALCULAR, () => {
  const childrenCount = parseInt(document.getElementById("children").value);
  const womenCount = parseInt(document.getElementById("woman").value);
  const menCount = parseInt(document.getElementById("man").value);

  const childrenMeat = (childrenCount * 0.2).toFixed(3);
  const womenMeat = (womenCount * 0.32).toFixed(3);
  const menMeat = (menCount * 0.4).toFixed(3);

  const childrenGarlicBread = (childrenCount * 1).toFixed();
  const adultGarlicBread = (womenCount + menCount) * 2;

  const charcoal = (childrenCount + womenCount + menCount).toFixed();
  const salt = (childrenCount + womenCount + menCount).toFixed();

  const ice = (((childrenCount + womenCount + menCount) / 10) * 5).toFixed();

  const soda = ((womenCount + menCount) / 5).toFixed();
  const water = ((childrenCount + womenCount + menCount) / 5).toFixed();

  const beer = ((womenCount + menCount) * 3).toFixed();

  const resultString = `
    Quantidade de itens por pessoa:
    Carne: Homens - ${menMeat} KG, Mulheres - ${womenMeat} KG, Crianças - ${childrenMeat} KG
    Pão de Alho: Adultos - ${adultGarlicBread} unidades, Crianças - ${childrenGarlicBread} unidades
    Carvão: ${charcoal} KG
    Sal: ${salt} KG
    Gelo: ${ice} KG
    Refrigerante: ${soda} garrafas de 2L
    Água: ${water} garrafas de 1L
    Cerveja: Adultos - ${beer} garrafas de 600ml
  `;

  resultDisplay.style.display = "block";
  resultDisplay.innerText = `Resultados:\n${resultString}`;

  calculator.dispatchEvent(
    new CustomEvent(events.CALCULO_REALIZADO, {
      detail: {
        quantidadeItensPorPessoa: resultString,
      },
      bubbles: true,
    })
  );
});
