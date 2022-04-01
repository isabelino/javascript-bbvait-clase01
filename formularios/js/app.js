let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit',function(e){
    e.preventDefault();

    let datos = new FormData(formulario);

    fetch('post.php',{
        method:'POST',
        body:datos
    }).then( res => res.json() )
      .then( data => {

        if(data==='error'){
            respuesta.innerHTML= "error";
        }else{
            respuesta.innerHTML= `${data}`;
        }

      });

});