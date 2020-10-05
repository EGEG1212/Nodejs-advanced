let http = require('http');
let jade = require('jade');
let fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('03.jadePage159.jade', 'utf8', function (error, data) {
        let fn = jade.compile(data);

    response.writeHead(200, {'Content-Type': 'text/html' });
    response.end(fn());
    });
}),listen(3000, function () {
    console.log('Server Running at http://127.0.0.1:3000');
});