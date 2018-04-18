const route = require('express').Router()

route.use('/Vendors', require('./Vendors'))
route.use('/Products', require('./Products'))
route.use('/CartTB', require('./CartTB'))

exports = module.exports = {
    route
}