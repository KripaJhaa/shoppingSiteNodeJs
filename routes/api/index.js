const route = require('express').Router()
const product = require('../../db').Product


 route.use('addproduct', require('./addproduct'))
 route.use('addtocart', require('./addtocart'))

 let ProductList=[]

 route.post('/addProduct',(req,res)=>{
        console.log("inside add product controller")
    res.sendFile('/addProduct.html', {root: __dirname })
 })


route.get('/',(req,res)=>{   
    console.log("get called ")

    getProducts()
    .then(()=>{
        console.log("list of Product rendered")
        res.status(200).json(ProductList)
    })
    .catch((err)=>{
        console.log("Error "+err)
        res.status(500).json({error:err})
    })

})



async function getProducts() {

 let productList= await product.findAll({
            attributes:['name','price']
    })  

    ProductList=[]
    productList.forEach(element => {
    
        console.log(element.name+" <> "+element.price+" ")
    
        ProductList.push({
            name:element.name,
            price:element.price,
        })
    });
}



route.post('/',(req,res)=>{
    res.redirect('public/addProduct.html');    
})

exports = module.exports = {route}