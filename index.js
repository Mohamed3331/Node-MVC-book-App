const express = require('express')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const fs = require('fs')
const app = express()
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
})

app.listen(5000)