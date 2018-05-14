const product = require('../../db').Product
const vendor = require('../../db').Vendor
const route = require('express').Router()


route.get('/',(req,res)=>{
    console.log(req.body.name)
    
    let obj= new vendor({
         name:req.query.name
    })
    obj.save()
})

route.get('/vendorlist', (req, res) => {
    vendor.findAll({})
   .then((vendors) => {
           res.status(200).json(vendors)
       })
       .catch((err) => {
           console.log("Error Occured" + err)
       })
})

exports = module.exports = route