const express = require('express');
const app = express();
const people = require('./routes/people');
const login = require('./routes/auth');

app.use(express.static('./methods-public'));
//parse form data(middleware) for incoming requests
app.use(express.urlencoded({ extended: false }));
//parssejson
app.use(express.json());
//routes
app.use('/api/people', people);
app.use('/login', login);

app.listen(5000, () => {
    console.log('server listening on port 5000...');
});