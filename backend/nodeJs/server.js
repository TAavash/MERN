
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello World')
// }).listen(8000)


const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World')
    res.end();
})


server.listen(3333, ()=>{
    console.log('Server is running on port 3333')
})