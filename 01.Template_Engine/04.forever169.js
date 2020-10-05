require('http').createServer(function (request, response) {
    if (request.url == '/') {
        let html = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Forever</h1>
        </body>
        </html>
        `;
        response.end(html);
    }else {
        error.error.error();
    }
}).listen(3000, function () {
    console.log('Server Running at http://127.0.0.1:3000');
});