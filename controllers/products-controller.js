const Product = require('../models/product-model')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add New Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true
    })
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    Product.fetchAll((err, products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: 3,
            activeShop: true,
            productCSS: true,
        })
        console.log(err);
    })


}