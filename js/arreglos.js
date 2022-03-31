let videoJuegos = ['Mario','Sonic','Megaman','Contra'];

console.log(videoJuegos);
/*console.log({videoJuegos})
console.log(videoJuegos[2]);

console.log(videoJuegos.length);

videoJuegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});*/

//funciones de arreglos

//push agrega un elemento al final del arreglo
console.log(videoJuegos.push('Ice Climer'));
console.log(videoJuegos);

//unshift agrega un elemento al principio del arreglo
console.log(videoJuegos.unshift('F-Zero'));
console.log(videoJuegos);

//pop borra el ultimo elemento del array
console.log(videoJuegos.pop());
console.log(videoJuegos);

//borrar elementos especificos
console.log(videoJuegos.splice(3,2));
console.log(videoJuegos);

//encontrar posicion de un array
let posicion = videoJuegos.indexOf("Sonic");
console.log(posicion);
