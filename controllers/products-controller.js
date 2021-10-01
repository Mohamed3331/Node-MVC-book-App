const Product = require('../models/product-model')

exports.getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add New Product',
        path: '/admin/add-product',
    })
}

exports.deleteProduct = (req, res) => {
    Product.deleteById(req.body.productId)
    res.redirect('/')
}

exports.postAddProduct = (req, res) => {
    const { title, price, description, imageUrl } = req.body
    const product = new Product(null, title, price, description, imageUrl)
    product.save()
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('shop', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/',
                hasProducts: rows.length,
            })
        })
        .catch(err => console.log(err))
}