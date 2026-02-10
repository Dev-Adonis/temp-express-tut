const express = require('express'); //OR app = require('express)();
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
})

app.use((req, res) => {
    res.status(404).send(`<h1>Ooops! Resource not found</h1>`);
})

app.listen(5000, () => {
    console.log('server listening on port 5000...')
})