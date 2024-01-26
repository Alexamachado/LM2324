var numeros = [];

function add() {
    var n = parseFloat(document.getElementById("numeros").value);
    numbers.push(numeros);
    document.getElementById("resultado").innerHTML = numbers
}

var s=0
//La variable global solo se inicializa una vez (ejecuta una vez)

function sumar(){
    s = 0;
    for (var i = 0 ; i< Numbers.length; i++) {
        s += numbers[i];
    }
    document.getElementById("resultado").innerHTML = s;
}

function Multiplicar(){
    var m = 1;
    for (var i = 0 ; i< numbers.length; i++) {
        m*= numbers[i];
    }
    document.getElementById("resultado").innerHTML = m;
}

//i++ incrementa un numero
//for = se repite

/*
function pintarArray(){
   document.getElementById("numerosanadir").innerHTML = ""; 
}

 pintarArray();

function anadir() {
    anadirelement = document.getElementById("numeros").value;
    numeros.push(anadirelement);
    pintarArray();
}


function sumar() {
    var adicion = document.getElementById("numerosanadir").value
    document.getElementById("resultado").innerHTML = "El resultado es" + adicion ;
}

function multiplicar() {
    var producto = document.getElementById("numerosanadir").value
    document.getElementById("resultado").innerHTML = "El resultado es" + producto ;
}
*/