let app = new Vue({
    el: '#app',
    data: {
        selectedProduct:'',
        products: []
    },
    created: function () {
        this.load()
    },
    methods: {
        addProduct() {
            window.location.href = "addProduct.html"
        },
        load() {

            axios.get('http://localhost:5678/api')
                .then((req, res) => {
                    var products = req.data
                    app.products = []
                    for (items in products) {
                        app.products.push({
                            name: req.data[items].name,
                            price: req.data[items].price,
                            productId:req.data[items].productId
                        })
                    }
                })
                .catch((err) => {
                    console.log("Error " + err)
                })
        },
        addToCart(product){
            axios.post('http://localhost:5678/cart/addToCart',{
                    name:product.name,
                    price: parseFloat(product.price),
                    productId:parseInt(product.productId)
            }
            )
            .then((req,res)=>{
                window.location.href = "MyCartPage.html"
            })
            .catch((err)=>{
                console.log("Error Occured "+err)
            })
        },
        myCart(){
            window.location.href = "MyCartPage.html"
        }



    }
})