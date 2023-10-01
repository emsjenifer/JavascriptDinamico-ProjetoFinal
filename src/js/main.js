const body = document.querySelector("body");

document.head.appendChild(temaNoite);

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

const app = document.querySelector("app");
app.appendChild(temaButton);

app.addEventListener(events.CALCULO_REALIZADO, (e) => {
  console.log("RECEBIDO: " + e.detail.quantidadeDePicanha + " KG");
});

container.appendChild(calculator);

calculator.appendChild(firstRow);
firstRow.appendChild(nameInput);
firstRow.appendChild(emailInput);
firstRow.appendChild(cepInput);
firstRow.appendChild(saveButton);

calculator.appendChild(secondRow);
secondRow.appendChild(secondInputGroup);
secondInputGroup.appendChild(label);

secondInputGroup.appendChild(input);
secondInputGroup.appendChild(buttonGroup);
buttonGroup.appendChild(buttonMinus);
buttonGroup.appendChild(buttonPlus);
secondInputGroup.append(buttonCalculate);

calculator.appendChild(childrenInput);
calculator.appendChild(womenInput);
calculator.appendChild(menInput);
calculator.appendChild(resultDisplay);

app.appendChild(container);
