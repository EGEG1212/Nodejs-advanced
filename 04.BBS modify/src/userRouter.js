const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const ut = require('./util');
const dm = require('./db/db-module');
const alert = require('./view/alertMsg');
const tplt = require('./view/template');

const uRouter = express.Router();
uRouter.get('/dispatch', (req, res) => {    //admin인경우 사용자리스트, 일반사용자인경우 내정보수정
    if (req.session.uid === 'admin') {
        res.redirect('/user/list/1');
    } else {
        res.redirect(`/user/update/${req.session.uid}`);
    }
});

uRouter.get('/list/:page', ut.isLoggedIn, (req, res) => {
    if (req.session.uid !== 'admin') {
        let html = alert.alertMsg('조회 권한이 없습니다.', `/bbs/list/1`);
        res.send(html);
    } else {
        let page = parseInt(req.params.page);
        let offset = (page - 1) * 10;
        dm.getUserTotalCount(result => {
            let totalPage = Math.ceil(result.count / 10);
            dm.getUserList(offset, rows => {
                //console.log(rows);
                let view = require('./view/userList');
                let navBar = tplt.navBar(req.session.uname);
                let html = view.list(navBar, rows, page, totalPage);
                res.send(html);
            })
        });
    }
});

uRouter.get('/uid/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (uid != req.session.uid) {
        let html = alert.alertMsg('조회 권한이 없습니다.', `/bbs/list/1`);
        res.send(html);
    } else {
        dm.getUserInfo(uid, result => {
            let view = require('./view/userView');
            let navBar = tplt.navBar(req.session.uname);
            let html = view.view(navBar, result);
            res.send(html);
        });
    }
});

uRouter.get('/register',  (req, res) => {
    let view = require('./view/userRegister');
    let html = view.register();
    res.send(html);
});

uRouter.post('/register',  (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    let photo = req.body.photo;
    if(uid.length>=2) {
        if(pwd.length>3) {
            if(uname.length>=2) {
                if (pwd === pwd2) {
                    let pwdHash = ut.generateHash(pwd);
                    let params = [uid, pwdHash, uname, photo, tel, email];
                    dm.registerUser(params, () => {
                        let html= alert.alertMsg('환영합니다! 회원가입이 완료되었습니다.',('/login'));
                        res.send(html);
                    })
                }else {
                    let html = alert.alertMsg('패스워드가 일치하지 않습니다.', '/user/register');
                    res.send(html);
                }
            }else {
                let html= alert.alertMsg('이름은 2글자 이상이여야 합니다.',(`/user/register`));
                    res.send(html);
            }
        }else {
            let html= alert.alertMsg('패스워드는 4글자 이상이여야 합니다.',(`/user/register`));
            res.send(html); 
        }
    }else {
        let html= alert.alertMsg('아이디는 2글자 이상이여야 합니다.',(`/user/register`));
            res.send(html);
    }
});

uRouter.get('/update/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (uid != req.session.uid) {
        let html = alert.alertMsg('수정 권한이 없습니다.', `/bbs/list/1`);
        res.send(html);
    } else {
        dm.getUserInfo(uid, result => {
            let view = require('./view/userUpdate');
            let navBar = tplt.navBar(req.session.uname);
            let html = view.update(navBar, result);
            res.send(html);
        });
    }
});

uRouter.post('/update', ut.isLoggedIn, (req, res) => {
    let uid = req.body.uid;
    let pwdHash = req.body.pwdHash;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    let photo = req.body.photo;
    if (pwd && pwd !== pwd2) {
        let html = alert.alertMsg('패스워드가 다릅니다.', `/user/update/${uid}`);
        res.send(html);
    } else {
        if (pwd)
            pwdHash = ut.generateHash(pwd);
        let params = [pwdHash, uname, photo, tel, email, uid];
        dm.updateUser(params, () => {
            res.redirect(`/user/uid/${uid}`);
        });
    }
});

uRouter.get('/delete/:uid/:uname', ut.isLoggedIn, (req, res) => { //패스인데 :파라메타로받겠다 /userList에서 받아오기a href="/user/delete/${row.uid}/${row.uname}"
    let uid = req.params.uid;
    let uname = req.params.uname;
    console.log(req.params.uname);
    if (req.session.uid !== 'admin') {              //로그인되어있는 아이디가 admin과 다르면(일반회원)
        let html = alert.alertMsg('삭제 권한이 없습니다.', `/bbs/list/1`);
        res.send(html);
    } else {                                    //로그인되어있는 아이디가 admin이면
        let view = require('./view/userDelete');    //module.exports.delete = function (navBar, uid)
        let navBar = tplt.navBar(req.session.uname);
        let html = view.delete(navBar, uid, uname); //userDelete.js와동일하게
        res.send(html);
    }
});

uRouter.get('/deleteConfirm/:uid/:uname', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    let uname = req.params.uname;

    dm.deleteUser(uid, () => {
        res.redirect('/user/list/1');
    });
});

module.exports = uRouter;