function calcularEdad() {
  const anioNacimiento = document.getElementById("anioNacimiento").value;
  const anioActual = new Date().getFullYear();
  const edad = anioActual - anioNacimiento;
  document.getElementById("edadResultado").innerText = `Tienes ${edad} años`;
}

function convertir() {
  const inputTemp = document.getElementById("inputTemp").value;
  const tempUnit = document.getElementById("tempUnit").value;
  let resultado;

  if (tempUnit === "celsius") {
      resultado = (inputTemp * 9/5) + 32;
      document.getElementById("resultado").innerText = `${inputTemp} °C son ${resultado.toFixed(2)} °F`;
  } else {
      resultado = (inputTemp - 32) * 5/9;
      document.getElementById("resultado").innerText = `${inputTemp} °F son ${resultado.toFixed(2)} °C`;
  }
}

function contarVocales() {
  const palabra = document.getElementById("inputPalabra").value.toLowerCase();
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let letra of palabra) {
      if (vocales.includes(letra)) {
          contador++;
      }
  }
  
  document.getElementById("vocalesResultado").innerText = `La palabra contiene ${contador} vocales`;
}

function tablaDeMultiplicar() {
  const numero = document.getElementById("tablaNumero").value;
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  
  document.getElementById("tablaResultado").innerText = resultado;
}

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
    const brotherName = prompt("Ingresa el nombre de tu hermano " + (counter + 1));
    brothers.push(brotherName);
    counter++;
  }

  document.getElementById("brothers-list").innerText = "Hermanos registrados: " + brothers.join(", ");
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
    newDiv.style.margin = "5px"; // Añadir un poco de margen entre los bloques
    document.querySelector("main").appendChild(newDiv);
    counter++;
  }
}

// Llamadas a las funciones para probarlas (puedes descomentar si deseas probar)
// juegoPiedraPapelTijera();
// changeBackgroundColor();
// registerBrothers();
// generateBlocks();
