const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // res.end('Welcome to the Homepage');
    res.writeHead(200, {'content-type': 'text/html'});
    // res.end(`<h1>Home Page</h1>`); //OR
    res.write(`<h1>Home Page</h1>`);
    res.end();
})


server.listen(5000, () => {
    console.log('server listening on port 5000...');
})