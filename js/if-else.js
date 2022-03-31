
let a = 10,b="hola";


if(a === b){
    console.log("es igual a b");
}else if( a < b){
    console.log("a es menor a b");
}else if(a > b){
    console.log("a es mayor a b");
}
else{
    console.log("a no es igual a b");
}

//Operadores logicos
//AND (&&)
//OR (||)
//Not (!)

let edad = 18;
let nombre ="Pepe";

if(!(edad ===20) && !(nombre ==='Pepe')){
    console.log("Bienvenido");
}else{
    console.log('Hasta luego');
}

//operador ternario

console.log(edad === 17 ?'Tienes 18 años':'no tienes 18');

//switch

const dia = 4;

switch(dia){
    
    case 1:
        console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
    break;
    case 3:
        console.log("Miercoles");
    break;
    case 4:
        console.log("Jueves");
    break;
    case 5:
        console.log("Viernes");
    break;

    default:
        console.log('Es finde semana');
   
}