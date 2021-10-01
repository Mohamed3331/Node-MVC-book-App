const fs = require('fs')
const path = require('path')
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        let products = []
        fs.readFile(p, (err, data) => {
            if (!err) products = JSON.parse(data);

            products = [this, ...products];
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        fs.readFile(p, (err, data) => {
            if (err) cb(true, [])

            return cb(false, JSON.parse(data))
        })
    }
}

