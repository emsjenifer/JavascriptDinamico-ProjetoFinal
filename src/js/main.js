const body = document.querySelector("body");

document.head.appendChild(temaNoite);
app.appendChild(temaButton);

container.appendChild(register);

register.appendChild(firstRow);
firstRow.appendChild(firstInputGroup);

firstInputGroup.appendChild(firstInputDiv);
firstInputDiv.appendChild(nameInput);
firstInputDiv.appendChild(emailInput);
firstInputDiv.appendChild(cepInput);

firstInputGroup.appendChild(promotionCheckbox);
firstInputGroup.appendChild(promotionLabel);
firstInputGroup.appendChild(saveButton);

container.appendChild(calculator);
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
