const { response } = require('express');
const express = require('express');
const util = require('util'); //좋은방법은 아닌데 유틸..

const app = express();

app.get('/', function(req, res) {
    let html = `
            <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Welcome to Express World</h1>
        </body>
        </html>
    `;
    res.send(html);
});
app.get('*', (req, res) => {
    res.status(404).send('Path not found'); //✨메소드체이닝이다 status(404)
});
//app.post(); 

app.listen(3000, () => {
    util.log('Server Running at http://127.0.0.1:3000');
});
