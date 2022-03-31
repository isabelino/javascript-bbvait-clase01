/*let coches = ['Ford','Mazda','Toyota','Seat','Honda'];

let i = 0;

//ciclo while
while(i < coches.length){
    console.log(coches[i]);
    i++;
}
//ciclo do while
let j=0;
do{
    console.log('do while:'+coches[j]);
    j++;
}while(j< coches.length);*/

let hero = ['Superman','Batman','Mujer Maravilla','Flash'];

// ciclo for
for (let i = 0; i < hero.length; i++) {
   console.log(hero[i]);
}

for(let i in hero){
    console.log('Segunda Opción:'+hero[i])
}

for(let heroes of hero){
    console.log('Tercera Opción:'+heroes)
}
