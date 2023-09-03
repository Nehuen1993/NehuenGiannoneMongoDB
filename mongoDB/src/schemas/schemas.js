const mongoose = require ('mongoose')
const userCallection = "users"
const productCallection = "products"

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100}, 
    apellido: {type: String, required: true, max: 100}, 
    
})

const productSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100}, 
    categoria: {type: String, required: true, max: 100},
    precio: {type: Number, required: true, max: 10000}, 
    stock: {type: Number, required: true, max: 100}, 
    imagen: {type: String, required: true, max: 100},  
    
})

const userModel = mongoose.model(userCallection, userSchema)
const productModel = mongoose.model(productCallection, productSchema)


module.exports = {userModel, productModel}