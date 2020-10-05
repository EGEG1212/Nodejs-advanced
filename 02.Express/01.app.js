const { response } = require('express');
const express = require('express');
const util = require('util'); //좋은방법은 아닌데 유틸..

const app = express();

app.use(function(req, res) {
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
//app.get();
//app.post(); //🤩 use까지 가장 많이 사용하는 3가지

app.listen(3000, () => {
    util.log('Server Running at http://127.0.0.1:3000');
});

//😜util.log  시간이 찍힌당
//라우팅 안쓰고 서버에 접속하면 되는것임 