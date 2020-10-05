const express = require('express');
const util = require('util'); 

const app = express();

// lacallhost:3000/query?id=kim 이렇게 접속한다 가정하고 ...
//guery String  path ? key = value
//                      & key2 = value2  옛날엔 이런 방식
app.get('/query', function(req, res) {
    let id = req.query.id;
    res.send(`<h1>id - ${id}</h1>`);
});

//locallhost:3000/rest/id/kim ///😍이 형태로 많이 씁니당 path/parameter
//                                  : 콜론으로 구분
app.get('/rest/id/:id',function (req, res) {
    let id = req.params.id;
    res.send(`<h1>id - ${id}</h1>`);
});

//locallhost:3000/rest2/kim // 더 익숙해지면 이렇게도 가능. 두명세명 받을 수 있다 그건 그때가서...
app.get('/rest2/:id',function (req, res) {
    let id = req.params.id;
    res.send(`<h1>id - ${id}</h1>`);
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found'); 
});

app.listen(3000, () => {
    util.log('Server Running at http://127.0.0.1:3000');
});
