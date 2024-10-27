import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import pool from "./models/bd.js"

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))
    

app.get('/users', (req, res) => {
    pool.query('select * from profes').then((respuestas) => {
/*         console.log(`backend`,respuestas); */
        res.send({
            users: respuestas
        })
    })
})

app.get('/actividades', (req, res) => {
    pool.query('select * from actividades').then((respuesta) => {
        console.log('actividades', respuesta); 
        res.send({
            actividades: respuesta
        })
    })
})

app.get('/productos', (req, res) => {
    pool.query('select * from productos').then((resp) => {
/*         console.log(`productos`, resp)  */
        res.send({
            productos: resp
        })
    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})



