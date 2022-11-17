let numberOfClicks = 0;
let numberOneCreated = false;
let valueNumber1, valueNumber2;
let operationSelected = null;

// Função para mostrar os valores clicados no display 
function updateDisplay(buttonNumber) {
    if (numberOfClicks == 0){
        display.innerText = buttonNumber;
    } else if (numberOfClicks < 10){
        display.innerText += buttonNumber;
    } else {
        display.style.color = "#FF3764";
    }

    numberOfClicks++;
}


// Botão resetar conteúdo/valores
clearButton.addEventListener("click",deleteDisplay);

function deleteDisplay(){
    display.style.color ="#FFF";
    numberOfClicks = 0;
    numberOneCreated = false;
    display.innerText = 0;
}


// Função somar
plusButton.addEventListener("click", sum);

function sum() {
    valueNumber1 = +display.innerText;
    
    display.style.color = "#FFF";
    operationSelected = "sum";
    display.innerText = 0;
    numberOfClicks = 0;
    numberOneCreated = true;
}

// Função subtrair
minusButton.addEventListener("click", subtraction);

function subtraction() {
    valueNumber1 = +display.innerText;

    display.style.color = "#FFF";
    operationSelected = "subtraction";
    display.innerText = 0;
    numberOfClicks = 0;
    numberOneCreated = true;
}

// Função multiplicar
timesButton.addEventListener("click", multiplication);

function multiplication() {
    valueNumber1 = +display.innerText;

    display.style.color = "#FFF";
    operationSelected = "multiplication";
    display.innerText = 0;
    numberOfClicks = 0;
    numberOneCreated = true;
}


// Função dividir
dividedButton.addEventListener("click", division);

function division() {
    valueNumber1 = +display.innerText;

    display.style.color = "#FFF";
    operationSelected = "division";
    display.innerText = 0;
    numberOfClicks = 0;
    numberOneCreated = true;
}


// Botão para calcular e exibir o resultado de acordo com a operação selecionada
resultButton.addEventListener("click", result);

function result() {
    if (numberOneCreated == true){
        valueNumber2 = +display.innerText;
        if (operationSelected == "sum"){
            display.innerText = valueNumber1 + valueNumber2;
        } else if(operationSelected == "subtraction") {
            display.innerText = valueNumber1 - valueNumber2;
        }  else if(operationSelected == "multiplication") {
            display.innerText = valueNumber1 * valueNumber2;
        } else if(operationSelected == "division") {
            display.innerText = valueNumber1 / valueNumber2;
        } else {
            console.log("Operação inválida!");
        }
    }
}