
let personaje = {
    nombre: 'Tony Stark',
    nombreClave: 'Iron Man',
    vivo: false,
    edad: 40,
    cordenadas:{
        lat:0.3232323,
        lng:-23.434344
    },
    trajes:['Mark I', 'Mark XXV','Hulkbuster'],
    direccion:{
        zip: '20880, 90323',
        ubicacion:'Malibu, California' 
    }
};

//console.log(personaje);
console.log('Nombre:',personaje.nombre);
console.log('Nombre Clave:',personaje['nombreClave']);
console.log('Edad:',personaje.edad);
console.log('Vivo:',personaje['vivo']);
console.log('Cantidad de trajes:',personaje.trajes.length);
console.log('El ultimo traje:',personaje.trajes[personaje.trajes.length - 1]);
console.log('Direcion:',personaje.direccion);
//funciones y caracteristicas 

//borrar un valor especifico dentro del objecto
delete personaje.edad;
console.log(personaje);

//agregar valores al objeto
personaje.casado = true;
console.log(personaje);

//asignar valor
personaje.trajes[0]='Mark 0';
personaje.trajes[3]='Mark XXXV';
console.log(personaje);

//vista de objetos indice y valor
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
//vista como array completo
const propiedades= Object.getOwnPropertyNames(personaje);
console.log({propiedades});
//vista de array y valores
const propiedades2 = Object.values(personaje);
console.log({propiedades2,propiedades2});
