const product = require('../../db').Product
const vendor = require('../../db').Vendor
const route = require('express').Router()


let vendors=[]

route.get('/',(req,res)=>{
    
    getListOfVendor()
    .then(()=>{
        console.log("list of vendor fetched")
        res.json(listOfVendor)
    })
    .catch((err)=>{
        console.log("Error Occured"+err)
    })
    
})

async function getListOfVendor() {
    
    const listOfVendor= await vendor.findAll({
        attributes:['name']  
    })

    listOfVendor.forEach(element => {
        vendors.push({name:element.name})
    });

}


route.post('/',(req,res)=>{
    console.log("Post called Congo")

    const productAdd= new product({
        name:req.body.name,
        price:parseFloat(req.body.price)
              
    })

    productAdd.save()

    console.log(" data saved "+productAdd)
      
    res.json({
        success: true,
        id: productAdd.length - 1
    })

       // res.redirect('http://localhost:5678/api')

})

exports = module.exports =route