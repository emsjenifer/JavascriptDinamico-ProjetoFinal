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
  console.log("RECEBIDO: " + e.detail.quantidadeItensPorPessoa);
});

container.appendChild(calculator);

calculator.appendChild(firstRow);
firstRow.appendChild(firstInputGroup);

firstInputGroup.appendChild(firstInputDiv);
firstInputDiv.appendChild(nameInput);
firstInputDiv.appendChild(emailInput);
firstInputDiv.appendChild(cepInput);

firstInputGroup.appendChild(promotionCheckbox);
firstInputGroup.appendChild(promotionLabel);
firstInputGroup.appendChild(saveButton);

calculator.appendChild(secondRow);
secondRow.appendChild(secondInputGroup);

secondInputGroup.appendChild(manInput);
secondInputGroup.appendChild(manLabel);
secondInputGroup.appendChild(manButtonMinus);
secondInputGroup.appendChild(manButtonPlus);
secondInputGroup.appendChild(womanInput);
secondInputGroup.appendChild(womanLabel);
secondInputGroup.appendChild(womanButtonMinus);
secondInputGroup.appendChild(womanButtonPlus);
secondInputGroup.appendChild(childrenInput);
secondInputGroup.appendChild(childrenLabel);
secondInputGroup.appendChild(childrenButtonMinus);
secondInputGroup.appendChild(childrenButtonPlus);

secondInputGroup.append(buttonCalculate);
calculator.appendChild(resultDisplay);

app.appendChild(container);
