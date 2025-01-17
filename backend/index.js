const cors = require('cors');
const PORT = process.env.PORT || 3000;



const { agregarRegistro, obtenerRegistros } = require('./consultas')
 const express = require('express');//importa las funciones q estan en consultas
 const app = express(); //importa el modulo express q es i framework para servicios web
 // Habilitar CORS para todas las rutas
app.use(cors());
 app.listen(3000, console.log("SERVIDOR ENCENDIDO"))//inicia el servidor 
 //crea la ruta para devolver los registros a una app del cliente 
 app.get("/posts", async (req, res) => {
 const registros = await obtenerRegistros()
 res.json(registros)
 })
 //ahora agregamos api rest con postgreSQL
 app.use(express.json())//PERMITE el middleware para parsear cuerpo de consulta
 app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion } = req.body
    await agregarRegistro(titulo, img, descripcion )
    res.send("Registro agregado con éxito")
    })