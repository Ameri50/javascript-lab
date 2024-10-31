function changeBackgrounColor(){
    const  backgrounColor = prompt("Ingrese un color de fondo para la web");
    document.body.style.backgroundColor = backgrounColor;
}

//changeBackgrounColor();

function registerBrothers(){
    //paso 1
    const brotherQuantity =Number(prompt("Ingrese la cantidad de hermanos"));
    const brothers = [];
   
  let counter = 0
   while ( counter < brotherQuantity) {
     const brotherName = prompt("Ingrese el nombre de tu hermano" + counter);
     registerBrothers.push(brotherName);
     counter++;
    }

    console.log(brothers);
}

function generarColorHex() {
    let color = "#";
    const caracteresHex = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        color += caracteresHex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBlock() {
    const blocksNumber = NUmber(
     prompt("Ingrese la cantidad que bloques que desea dibujar")
    );

  let counter = 0;

  while(counter < blocksNumber) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = generarColorHex();
    document.body.appendChild(newDiv);
    counter++;
  }
}
