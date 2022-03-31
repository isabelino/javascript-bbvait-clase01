

function saludar(nombre,edad){
    console.log(`Hola ${nombre} tu edad es ${edad}`);
}

const saludar2 = function(nombre){
    console.log('Hola '+nombre);
}

const saludar3 = (nombre) =>{
    console.log('Hola ',nombre);
}

function sumar(num1,num2){
    return "La suma es: "+(num1+num2);
}

saludar('Rolando',25);
saludar2('Orlando');
saludar3('Oscar');

console.log(sumar(30,15));