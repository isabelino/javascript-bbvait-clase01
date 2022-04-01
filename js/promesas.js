const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const exito = false;
        if(exito){
            resolve();
        }else{
            reject();
        }

    },3000);
});

promesa.then(()=>{
    alert('Exito');
});

promesa.catch(()=>{
    alert('No tuvo exito');
});

