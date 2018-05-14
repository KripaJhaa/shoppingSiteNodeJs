let app = new Vue({
    el: '#app',
    data: {
        productName: '',
        vendorId: '',
        Price: '',
        vendors: []
    },
    mounted() {
        axios.get(' http://localhost:5678/api/vendors/vendorlist ')
            .then((req, res) => {
                app.vendors = req.data
            })
            .catch((err) => console.log(err))
    },
    methods: {
        AddToDb() {
            axios.post(' http://localhost:5678/api/products/addproduct', {
                    name: app.productName,
                    vendorId: app.vendorId,
                    price: app.Price,
                })
                .then(function (response) {
                    console.log(" ProductAdded")
                    window.location.href = "/"
                })
        }
    }

})