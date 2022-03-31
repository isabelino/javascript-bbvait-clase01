
let a = 10,
    b = 20,
    c ='Hola',
    d ='Estas',
    x = a+b;

    //mensaje normal de consola
    console.log(a);
    console.log({a})

    //mensaje de error
    console.error(b);

    //mensaje de alerta
    console.warn(c);

    //mensaje de tipo informativo
    console.info(d);

    //vista de tablas variables y valores
    console.table( {a,b,c,d,x} );