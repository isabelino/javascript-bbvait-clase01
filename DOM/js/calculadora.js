


class Calculadora{

   

    static sumar(){
     
        let n1 = document.getElementById('num1').value;
        let n2 = document.getElementById('num2').value;

        document.getElementById('respuesta').innerHTML= "La suma es: "+(parseFloat(n1)+parseFloat(n2));
    }

    static restar(){
        let n1 = parseFloat(document.getElementById('num1').value);
        let n2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('respuesta').innerHTML = "La suma es: "+(n1-n2);
    }

    static multiplicar(){
       let n1 = parseFloat(document.getElementById('num1').value);
        let n2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('respuesta').innerHTML= "La suma es: "+(n1*n2);
    }

    static dividir(){
       let n1 = parseFloat(document.getElementById('num1').value);
        let n2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('respuesta').innerHTML= "La suma es: "+(n1/n2);
    }

    static limpiar(){
        document.getElementById('num1').innerHTML="";
        document.getElementById('num2').innerHTML="";
        document.getElementById('respuesta').innerHTML="";
    }
}