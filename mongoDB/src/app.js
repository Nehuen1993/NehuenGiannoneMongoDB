const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/products.routes')

const app = express()
const port = 8080


app.listen(port, () => {
    console.log(`escuchando el puerto:${port}`)
})

app.use (express.json())

mongoose.connect("mongodb+srv://nehuengiannone:Lz7n3cS0vO7ulfvk@cluster0.s1deur4.mongodb.net/?retryWrites=true&w=majority")
.then (() => {
    console.log("conexion exitosa a mongodb")
})
.catch(error => {
    console.error ("error de conexion", error)
})

app.use ("/api/users", userRoutes)
app.use ("/api/products", productRoutes)