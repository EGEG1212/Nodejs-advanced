const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');      //npm설치
const dm = require('./db/userdb-module');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());        //아주편하게 쿠키사용가능

app.get('/', (req, res) => {
    console.log(req.cookies);
    if (req.cookies && req.cookies.isLoggedIn) {        //로그인 된 상태:로그인을 통해서만이 리스트조회할 수 있게 (쿠키이름:isLoggedIn 그냥내가정하는거)
        dm.getAllLists(rows => {
            const view = require('./view/cookieList');
            let html = view.mainForm(rows);
            res.send(html);
        }); 
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    const view = require('./view/userLogin');
    let html = view.loginForm();
    res.send(html);
});

app.post('/login', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwdHash = dm.generateHash(pwd);
    dm.getUserInfo(uid, result => {
        if (result === undefined) {
            const view = require('./view/alertMsg');
            let html = view.alertMsg(`Login 실패: uid ${uid}이/가 없습니다.`, '/login');
            res.send(html);
        } else {
            if (result.pwd === pwdHash) {
                res.cookie('isLoggedIn', 1); //{maxAge: 60*1000} 1분유효
                console.log('Login 성공');
                res.redirect('/');
            } else {
                const view = require('./view/alertMsg');
                let html = view.alertMsg('Login 실패: 패스워드가 다릅니다.', '/login');
                res.send(html);
            }
        }
    });
});

app.get('/logout', (req, res) => {
    res.clearCookie('isLoggedIn');      //🥨생성된쿠키삭제 클리어쿠키🥨
    res.redirect('/login');
});

app.listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
});