// Función de piedra, papel o tijera
function juegoPiedraPapelTijera() {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionUsuario = prompt("Elige una opción: piedra, papel o tijera").toLowerCase();
    
    // Validación de la elección del usuario
    if (!opciones.includes(eleccionUsuario)) {
      alert("Opción no válida. Elige piedra, papel o tijera.");
      return;
    }
    
    // Generar elección aleatoria de la computadora
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    alert(`La computadora eligió: ${eleccionComputadora}`);
    
    // Comparar elecciones y determinar el resultado
    if (eleccionUsuario === eleccionComputadora) {
      alert("Es un empate!");
    } else if (
      (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
      (eleccionUsuario === "tijera" && eleccionComputadora === "papel") ||
      (eleccionUsuario === "papel" && eleccionComputadora === "piedra")
    ) {
      alert("¡Ganaste!");
    } else {
      alert("Perdiste. Intenta de nuevo.");
    }
}

// Función para cambiar el color de fondo
function changeBackgroundColor() {
    const backgroundColor = prompt("Ingrese un color de fondo para la web");
    document.body.style.backgroundColor = backgroundColor;
}

// Función para registrar hermanos
function registerBrothers() {
    const brotherQuantity = Number(prompt("Ingrese la cantidad de hermanos"));
    const brothers = [];
    let counter = 0;

    while (counter < brotherQuantity) {
      const brotherName = prompt("Ingresa el nombre de tu hermano " + counter);
      brothers.push(brotherName);
      counter++;
    }

    console.log(brothers);
}

// Función para generar colores hexadecimales aleatorios
function generarColorHex() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para generar bloques de colores
function generateBlocks() {
    const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desea dibujar"));
    let counter = 0;

    while (counter < blocksNumber) {
      const newDiv = document.createElement("div");
      newDiv.style.width = "100px";
      newDiv.style.height = "100px";
      newDiv.style.backgroundColor = generarColorHex();
      document.querySelector("main").appendChild(newDiv);
      counter++;
    }
}

// Llamadas a las funciones para probarlas
// juegoPiedraPapelTijera();
// changeBackgroundColor();
// registerBrothers();
// generateBlocks();
