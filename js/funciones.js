function saluda () {
     let name = prompt('¿Cómo te llamas?', '');
     let cadena= "Tu nombre es: "+name;
     if ( name ) {
         document.getElementById('message').innerHTML = cadena;
     }
}

function suma(){
    let n1 = parseInt(prompt("Ingresa el primer número"));
    let n2 = parseInt(prompt("Ingresa el segundo número"));
    let operacion = n1 + n2;
    let resultado = "El resultado de la suma es: "+operacion;
    if ( n2 ) {
        document.getElementById('suma').innerHTML = resultado;
    }
}

function logicos () {
    let op1=confirm("Selecciona OK para True o Cancel para False");
    let op2=confirm("Selecciona OK para True o Cancel para False");
    let cadena;
    if(op1 && op2){
        cadena = "Ambos elementos fueron verdaderos"
    }
    else if(op1||op2){
        cadena = "Uno de los elementos era verdadero"
    }
    else if(!(op1) && !(op2)){
        cadena ="Ambos elementos eran falsos"
    }
    if ( cadena ) {
        document.getElementById('logicos').innerHTML = cadena;
    }}

function rango(){
    let rango = parseInt(prompt("Ingresa un número del 1 al 10"));
    let cadena;
    if(rango>=1 && rango<=10){
        cadena = "El número está en el rango"
    }
    else{
        cadena = "El número no está en el rango"
    }
    if ( cadena ) {
        document.getElementById('rango').innerHTML = cadena;
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function guess(){
    let hidden = getRandomInt(1,10);
    let guess = parseInt(prompt("Ingresa un número del 1 al 10"));
    let cadena;
    while (hidden!=guess){
        if(guess>hidden){  
            guess = parseInt(prompt("Ingresa un número menor"));
        }
        else if(guess<hidden){  
            guess = parseInt(prompt("Ingresa un número mayor"));
        }
    }   
    cadena = "¡Adivinaste el número "+ hidden+" !";
    if ( cadena ) {
        document.getElementById('guess').innerHTML = cadena;
        console.log(hidden);
    }
}