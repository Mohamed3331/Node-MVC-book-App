const db = require('../util/MySQL')

module.exports = class Product {
    constructor(id, title, price, description, imageUrl) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }

    save() {
        db.query('INSERT INTO products SET ?', this);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products')
    }

    static deleteById(id) {
        return db.execute('DELETE FROM products WHERE products.id = ?', [id])
    }
}

// <>----------------<>-----------------<>-------------------<>-----------------<>
// #THE BELOW IMPLMENET FOR STORING DATA IN JSON FILE IN THE FILE SYSTEM WITHOUT DB
// const fs = require('fs')
// const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')

// save() {
//     let products = []
//     fs.readFile(p, (err, data) => {
//         if (!err) products = JSON.parse(data);

//         products = [this, ...products];
//         fs.writeFile(p, JSON.stringify(products), err => {
//             console.log(err);
//         });
//     });
// }

// static fetchAll(cb) {
//     fs.readFile(p, (err, data) => {
//         if (err) cb(true, [])

//         return cb(false, JSON.parse(data))
//     })
// }

