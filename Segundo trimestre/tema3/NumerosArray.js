var numeros = [];
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