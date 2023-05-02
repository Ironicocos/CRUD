import axios from "axios"

axios.post('http://localhost:3000/create',{//Envia los datos con el método post a 'http://localhost:3000/create'
nombre:'inputName',
apellido:'inputSurname',
edad:0
}).then((res) => {
    console.log('respuesta: ',  res.data)   
}).catch((error) => {
    console.error(error)
});
axios.get('http://localhost:3000/users')//Envia los datos con el método post a 'http://localhost:3000/users'
.then(res => {
    console.log('respuesta: ',res.data)})
.catch(error => {
    console.error(error)
});
axios.get('http://localhost:3000/users/4'//Envia la id a 'http://localhost:3000/users/:id'
).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})
axios.put('http://localhost:3000/update',{//Envia datos a 'http://localhost:3000/users/update' para actualizar un usuario
    id:3,//inputId
    nombre:'newNuevo',
    apellido:'newSurname',
    edad:0//inputNewAge
}).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})
/* Para la correcta manipulacion de axios se utiliza un conjunto de métodos (then y catch, específicamente)
los cuales devuelven una promesa */