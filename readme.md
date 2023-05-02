Tener en cuenta para que el proyecto funcione es que los valores de package.json sean:  
"scripts": {
    "start": "node index.mjs",
    "test": "node fprueba.mjs",
    "dev": "nodemon index.mjs --ignore data.json"
  },"

Esta parte del código se encarga de añadir un nuevo usuario
axios.post('http://localhost:3000/create',{
Acá deberías completar con los datos:
nombre:
apellido:
edad:
}).then((res) => {
    console.log('respuesta: ',  res.data)   
}).catch((error) => {
    console.error(error)
});

Esta otra parte muestra todos los usuarios dentro de la base
axios.get('http://localhost:3000/users')
.then(res => {
    console.log('respuesta: ',res.data)})
.catch(error => {
    console.error(error)
});
Esta parte muestra la informacion del usuario que coincida con la id
axios.get('http://localhost:3000/users/acá debería ir la id del usuario deseada'
).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})
Esta parte edita un usuario existente
axios.put('http://localhost:3000/update',{
    Acá van sus datos nuevos, es importante especificar la id porque si no, no encuentra nada
}).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})