const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shop_pass', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        min: 0,
        max: 5,
    },
    storage: './shop.db'
})

///schema of User Table
const Vendor = db.define('vendors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

///seed for list of vendors

// let  objVendor=new Vendor({name:'vendor 1'});objVendor.save()
// objVendor=new Vendor({name:'vendor 2'});objVendor.save()
// objVendor=new Vendor({name:'vendor 3'});objVendor.save()
// objVendor=new Vendor({name:'vendor 4'});objVendor.save()


///schema of Product Table
const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

const Cart = db.define('carts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productName:{
        type:Sequelize.STRING,
    },
    productPrice:{
        type:Sequelize.INTEGER
    },
    quantity:{ 
        type:Sequelize.INTEGER
    }
})

//Product.hasMany(Vendor)
//Cart.hasMany(Product)


db.sync()
    .then(() =>{ 
        force = true    
        console.log("Database has been synced")
    })
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Product,
    Vendor,
    Cart,
}