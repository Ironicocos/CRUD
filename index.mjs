//Importo las librerías necesarias para el proyecto
import express from 'express';
import fs from "fs";
//Declaro 2 métodos para el objeto DataBase y 1 propiedad
const DataBase = {
	file: './data.json',//Especifico el directorio en donde se guardan los archivos
	load(){
		return JSON.parse(fs.readFileSync(this.file))//Carga los datos del .JSON
	},
	save(data){
		fs.writeFileSync(this.file, JSON.stringify(data))//Guarda los datos editando los actuales
	}
}
const users = DataBase.load()//Renombro el método para que sea más facil de usar fuera del objeto
const app = express()
app.use(express.json())

app.get("/users" , (req, res) => {//Muestra todos los elementos de la base de datos
	res.setHeader('Content-Type', 'application/json')
	res.json({
        users
    });
})

app.get("/users/:id" , (req, res) =>{//Muestra la información del usuario si la id coincide con alguno
	const id = req.params.id;//Extrae el parámetro id y se lo iguala a una constante para que sea más facil de usar
    const user = users.find(u => u.id == id);//Busca dentro de la base de datos los arrays en el que la id del usuario coincida con la dada
    console.log(user)
    res.json({
        user
    });
})

app.post("/create" , (req,res) => {//Agrega un nuevo usuario
	const user = req.body//Extrae los datos recibidos y los iguala a la constante user															
	user.id = users.length//Iguala la id del usuario a la cantidad que existe
	users.push(user)//Añade el nuevo usuario a la última parte
	DataBase.save(users)//Lo guarda en la base de datos
	res.json ({
		msg: `User nuevo: ${user}`
	})
})

app.put("/update",(req, res) =>{
	const userUp = req.body//Extrae los datos recibidos y los iguala a la constante userUp (userUpdate)
	const user = users.find(u => u.id === userUp.id)//Busca dentro de la base de datos los arrays en el que la id del usuario coincida con la dada
	if (user){//Si la constante de arriba devuelve un boolean tipo true reemplaza los datos viejos por los del userUp
    user.nombre = userUp.nombre;
	user.apellido = userUp.apellido;
	user.edad = userUp.edad;
	DataBase.save(users)//Lo guarda en la base de datos
	console.log("Usuario actualizado",user)
	} else {
		res.status(404).json({msg: "Usuario no encontrado"})
	}
})

app.listen( 3000, () => {//Asignamos el puerto en el que queremos que se ejecute/escuche la aplicacion
	console.log (" mi backend esta  escuchado en el puerto 3000")
})










	