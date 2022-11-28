let frutas = [];
let respuesta = prompt("Introduce una fruta");

while(confirm("¿Desea introducir otra fruta?")){
    frutas.push(respuesta);
    respuesta = prompt("Introduce una fruta");
    frutas.forEach(element => {
        console.log(frutas);
    });
} 
frutas.push(respuesta);
document.write(frutas);
