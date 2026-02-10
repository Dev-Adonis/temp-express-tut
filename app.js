const http = require('http');

const server = http.createServer((req, res) => {
    console.log('user hit the server');
    res.end('Welcome to the Homepage');

})


server.listen(5000, () => {
    console.log('server listening on port 5000...');
})