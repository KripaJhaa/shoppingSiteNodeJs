const carts = require('../../db').Cart
const route = require('express').Router()


let cartList=[]

route.get('/',(req,res)=>{

    getList()
    .then(()=>{
        res.status(200).json(cartList)
    })
    .catch((err)=>{
        console.log("Error "+err)
    })
    
})


async function  getList() {

    let productList= await carts.findAll({
        attributes:['productName','productPrice','quantity']
})  

cartList=[]
productList.forEach(element => {

    console.log(element.productName+" <> "+element.productPrice+" ")

    cartList.push({
        productName:element.productName,
        productPrice:element.productPrice,
        quantity:element.quantity
    })
});
}





route.post('/addToCart',(req,res)=>{
    console.log("inside cart post call"+req.body.name+" <> "+req.body.price)
    

    const productCartAdd= new carts({
        productName:req.body.name,
        productPrice:parseFloat(req.body.price),
        quantity:1
    })

    productCartAdd.save()


    res.json({
        success: true,
        id: productCartAdd.length - 1
    })
})

exports = module.exports = route
