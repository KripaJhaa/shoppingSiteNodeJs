const route = require('express').Router()
const product = require('../../db').Product




route.use('addproduct', require('./addproduct'))
route.use('addtocart', require('./cart'))
route.use('addvendor', require('./addvendor'))


let ProductList = []


route.get('/', (req, res) => {
    console.log("get called ")

    getProducts()
        .then(() => {
            console.log("list of Product rendered")
            res.status(200).json(ProductList)
        })
        .catch((err) => {
            console.log("Error " + err)
            res.status(500).json({
                error: err
            })
        })

})


async function getProducts() {

    let productList = await product.findAll({
        include: {
            all: true
        }
    })

    ProductList = []
    productList.forEach(element => {

        console.log(element.name + " <> " + element.price + " <> " + element.id)

        ProductList.push({
            name: element.name,
            price: element.price,
            vendorId: element.vendorId,
            productId: element.id
        })
    });
}



route.post('/', (req, res) => {
    res.redirect('public/addProduct.html');
})





exports = module.exports = {
    route
}