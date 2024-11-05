// FUNCIONES REUTILIZABLES
function isValidColor(color) {
    const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
    const rgbPattern = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
    return (
        hexPattern.test(color) ||
        rgbPattern.test(color) ||
        tempElement.style.color !== ""
    );
}

// VARIABLES QUE SIRVEN PARA BUSCAR ELEMENTOS
const inputColor = document.getElementById("input-color");
const btnChangeColor = document.getElementById("btn-change-color");
const inputRegisterBrothers = document.getElementById("input-register-brothers");
const brothersContainer = document.getElementById("brothers-container");
const inputBlocks = document.getElementById("input-blocks");
const btnDrawBlocks = document.getElementById("btn-draw-blocks");
const gameArea = document.getElementById("game-area");
const btnRegister = document.getElementById("btn-register");
const inputYanQuenPo = document.getElementById("input-yan-quien-po");
const btnYanQuenPo = document.getElementById("btn-yan-quien-po");
const resultArea = document.getElementById("result-area");

// Cambia el color de fondo
btnChangeColor.addEventListener("click", function () {
    const color = inputColor.value;
    if (isValidColor(color)) {
        document.body.style.backgroundColor = color;
    } else {
        alert("El color no existe");
    }
});

// Registra hermanos y crea inputs dinámicamente
btnRegister.addEventListener("click", registerBrothers);

function registerBrothers() {
    const brotherQuantity = Number(inputRegisterBrothers.value);
    brothersContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos hermanos

    for (let counter = 0; counter < brotherQuantity; counter++) {
        const newDiv = document.createElement("div");
        const newInput = document.createElement("input");
        newInput.placeholder = "Ingresa el nombre de tu hermano " + (counter + 1);
        newInput.type = "text";
        newInput.classList.add("input-brother-name");

        newDiv.appendChild(newInput);
        brothersContainer.appendChild(newDiv);
    }

    const newButton = document.createElement("button");
    newButton.textContent = "Imprimir nombres";

    newButton.addEventListener("click", function () {
        gameArea.innerHTML = ""; // Limpiar el área de juego antes de mostrar nuevos nombres
        const inputs = document.querySelectorAll(".input-brother-name");
        for (let input of inputs) {
            const newP = document.createElement("p");
            newP.textContent = input.value;
            gameArea.appendChild(newP);
        }
    });

    brothersContainer.appendChild(newButton); // Agregar el botón al contenedor de hermanos
}

// Función para dibujar bloques
btnDrawBlocks.addEventListener("click", function () {
    const blockQuantity = Number(inputBlocks.value);
    if (blockQuantity <= 0) {
        alert("Por favor, ingresa un número positivo de bloques.");
        return;
    }

    gameArea.innerHTML = ""; // Limpiar el área de juego antes de dibujar nuevos bloques

    for (let i = 0; i < blockQuantity; i++) {
        const newBlock = document.createElement("div");
        newBlock.classList.add("block");
        newBlock.style.width = "50px"; // Ancho del bloque
        newBlock.style.height = "50px"; // Altura del bloque
        newBlock.style.margin = "5px"; // Margen entre bloques
        newBlock.style.backgroundColor = "#4CAF50"; // Color de fondo del bloque
        newBlock.style.display = "inline-block"; // Para que los bloques se alineen horizontalmente
        gameArea.appendChild(newBlock);
    }
});

// Lógica del juego Yan Quen Po
btnYanQuenPo.addEventListener("click", function () {
    const userChoice = inputYanQuenPo.value.toLowerCase();
    const choices = ["piedra", "papel", "tijera"];
    
    if (!choices.includes(userChoice)) {
        alert("Por favor, elige: Piedra, Papel o Tijera");
        return;
    }

    // Selección aleatoria de la computadora
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Empate! Ambos eligieron " + userChoice;
    } else {
        // Cambios para que el usuario nunca pierda
        result = "¡Ganaste! " + userChoice + " vence a " + computerChoice + ".";
    }

    resultArea.innerHTML = "<p>" + result + "</p>";
});
