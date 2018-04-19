const carts = require('../../db').Cart
const route = require('express').Router()

route.get('/',(req,res)=>{
    res.sendFile("../..public/addProduct")
})

exports = module.exports = route
