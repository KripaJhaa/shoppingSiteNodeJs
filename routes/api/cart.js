const carts = require('../../db').Cart
const route = require('express').Router()


let cartList = []

route.get('/', (req, res) => {

    getList()
        .then(() => {
            res.status(200).json(cartList)
        })
        .catch((err) => {
            console.log("Error " + err)
        })

})

async function getList() {

    let productList = await carts.findAll({
        include: [{
            all: true
        }]
    })

    //console.log("data fetch :: "+productList)

    cartList = []

    productList.forEach(element => {
        //console.log("say : "+element.product.price+" "+element.quantity)
        cartList.push({
            productName: element.product.name,
            productPrice: element.product.price,
            quantity: element.quantity,
            productId: element.product.id
        })
    });

}


route.post('/minusProduct', (req, res) => {
    console.log("inside cart post call" + req.body.name + " <> " + req.body.price + " " + req.body.productId)

    carts.findOne({
            where: {
                productId: parseInt(req.body.productId)
            }
        })
        .then((cart) => {
            if (cart && cart.quantity > 0) {
                cart.quantity--;
                cart.save()
            } else {
                cart.destroy({
                    where: {
                        productId: parseInt(req.body.productId)
                    }
                });
            }
        })

        res.json({
            success: true
        })
})


route.post('/removeProduct', (req, res) => {
    console.log("inside cart post call" + req.body.name + " <> " + req.body.price + " " + req.body.productId)

    carts.findOne({
            where: {
                productId: parseInt(req.body.productId)
            }
        })
        .then((cart) => {
                if(cart){
                cart.destroy({
                    where: {
                        productId: parseInt(req.body.productId)
                    }
                });
            }
            else{
                console.log("element not present")
            }
            
        })

        res.json({
            success: true
        })
})






route.post('/addToCart', (req, res) => {
    console.log("inside cart post call" + req.body.name + " <> " + req.body.price + " " + req.body.productId)

    carts.findOne({
            where: {
                productId: parseInt(req.body.productId)
            }
        })
        .then((cart) => {
            if (cart) {
                cart.quantity++
                    cart.save()
            } else {
                const productCartAdd = new carts({
                    productId: parseInt(req.body.productId),
                    quantity: 1
                })
                productCartAdd.save()
            }
        })
    res.json({
        success: true
    })
})




exports = module.exports = route