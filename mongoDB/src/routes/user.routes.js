const {Router} = require('express')
const {userModel} = require('../schemas/schemas')


const router = Router()

router.get ('/', async(req, res) => {
    try {
        let users = await userModel.find()
        res.send({result: "success", payload: users })
    } catch (error) {
        console.log(error)
    }
    
})

router.post ('/', async(req, res) => {
    try {
        let {nombre, apellido} = req.body
        if (!nombre || !apellido ) {
            res.send({status: "error", error: "Faltan datos"})
        }
       
        let result = await userModel.create({nombre, apellido, })
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})

router.put ('/:uid', async(req, res) => {
    try {
        let {uid} = req.params
        let userUpdate = req.body
        if (!userUpdate.nombre || !userUpdate.apellido ) {
            res.send({status: "error", error: "Faltan datos"})
        }
       
        let result = await userModel.updateOne ({_id:uid}, userUpdate)
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})

router.delete ('/:uid', async(req, res) => {
    try {
        let {uid} = req.params
        let result = await userModel.deleteOne ({_id:uid})
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router