
class Persona{

    nombre = '';
    codigo = '';
    frase= '';
    comida = '';
    static conteo =0

    constructor(nombre='sin nombre',codigo='sin codigo',frase='sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona.conteo++;
    }

    static get conteo(){
        return Persona.conteo + 'instancias';
    }

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidaFavorita(){
        return this.comida;
    }

}

const spiderman = new Persona('Peter Parker','Spiderman','Tu vecino amigable');
const ironman = new Persona('Tony Stark','Ironman','Yo soy ironman');
const nadie= new Persona();

spiderman.setComidaFavorita = 'Paella';
console.log(spiderman.getComidaFavorita); 
console.log(spiderman);
ironman.setComidaFavorita = 'Tallarines';
console.log(ironman.getComidaFavorita); 
console.log(ironman);
console.log(nadie);

console.log(Persona.conteo);