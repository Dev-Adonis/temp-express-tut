const express = require('express');
const app = express();
const logger = require('./express-logger-middleware');
const authorize = require('./authorize');

app.use([logger, authorize]);

app.get('/', (req, res) => {
    console.log(req.user);
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('Products');   
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})

app.listen(5000, () => {
    console.log('server listening on port 5000');
})