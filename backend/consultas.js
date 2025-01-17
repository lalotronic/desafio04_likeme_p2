const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: '1234',
database: 'likeme',
allowExitOnIdle: true
})

//agregamos primer registro
const agregarRegistro = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)"
    const values = [titulo, img, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Registro agregado")
    }
    

//obtiene Registros
        
const obtenerRegistros = async () => {            
    const { rows } = await pool.query("SELECT * FROM posts")
            console.log(rows)
            return rows
            }
     obtenerRegistros()

     module.exports = { agregarRegistro, obtenerRegistros }
