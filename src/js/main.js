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
firstRow.appendChild(promotionCheckbox);
firstRow.appendChild(promotionLabel);
firstRow.appendChild(saveButton);

calculator.appendChild(secondRow);
secondRow.appendChild(secondInputGroup);
secondInputGroup.appendChild(manInput);
secondInputGroup.appendChild(manLabel);
secondInputGroup.appendChild(womanInput);
secondInputGroup.appendChild(womanLabel);
secondInputGroup.appendChild(childrenInput);
secondInputGroup.appendChild(childrenLabel);

secondInputGroup.appendChild(buttonGroup);
buttonGroup.appendChild(buttonMinus);
buttonGroup.appendChild(buttonPlus);
secondInputGroup.append(buttonCalculate);

calculator.appendChild(resultDisplay);

app.appendChild(container);
