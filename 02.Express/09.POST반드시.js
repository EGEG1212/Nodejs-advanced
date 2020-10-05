const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const util = require('util');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {

});
app.get('/login', (req, res) => {   //읽어서 화면을 클라이언트에게 던져주려
    fs.readFile('09.loginform.html', 'utf8', (error, data) => {
        res.send(data);
    });
});

app.post('/login', (req, res) =>{
    let uid = req.body.uid;             //😵이렇게 깔끔하게 바뀌었다고합니다?!?!?
    let pwd = req.body.pwd;
    util.log(uid, pwd)
    if (uid === 'park' && pwd === '1234')
        res.send(`<h1>Login Success</h1>`)
    else
        res.redirect('/login');
});


app.listen(3000, function () {
    util.log('Server running at http://127.0.0.1:3000');
});
