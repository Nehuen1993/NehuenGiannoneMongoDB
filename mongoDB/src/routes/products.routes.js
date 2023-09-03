const {Router} = require('express')
const {productModel} = require('../schemas/schemas')

const router = Router()

router.get ('/', async(req, res) => {
    try {
        let users = await productModel.find()
        res.send({result: "success", payload: users })
    } catch (error) {
        console.log(error)
    }
    
})

router.post ('/', async(req, res) => {
    try {
        let {nombre, categoria, precio, stock, imagen} = req.body
        if (!nombre || !categoria || !precio || !stock || !imagen ) {
            res.send({status: "error", error: "Faltan datos"})
        }
       
        let result = await productModel.create({nombre, categoria, precio, stock, imagen, })
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})

router.put ('/:pid', async(req, res) => {
    try {
        let {pid} = req.params
        let userUpdate = req.body
        if (!userUpdate.nombre || !userUpdate.categoria || !userUpdate.precio || !userUpdate.stock || !userUpdate.imagen ) {
            res.send({status: "error", error: "Faltan datos"})
        }
       
        let result = await productModel.updateOne ({_id:pid}, userUpdate)
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})

router.delete ('/:pid', async(req, res) => {
    try {
        let {pid} = req.params
        let result = await productModel.deleteOne ({_id:pid})
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router