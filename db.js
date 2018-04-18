const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shop_pass', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        min: 0,
        max: 5,
    },
    storage: './Shop.db'
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
    quant:{ 
        type:Sequelize.INTEGER
    }
})

Product.belongsTo(Vendor)
Cart.belongsTo(Product)


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Product,
    Vendor,
    Cart,
}