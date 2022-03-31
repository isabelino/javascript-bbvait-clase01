
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

class Heroe extends Persona{
    clan = '';

    constructor(nombre,codigo,frase,clan='sin clan'){
        super(nombre,codigo,frase);
        this.clan = clan;
    }

}

const hulk = new Heroe('Banner','Hulk','Hulk aplasta','Vengadores');
hulk.setComidaFavorita = 'Parrilla';
console.log(hulk.getComidaFavorita);
console.log(hulk);