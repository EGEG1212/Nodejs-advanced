const express = require('express');
const bodyParser = require('body-parser'); //미들웨어 추가함
const fs = require('fs');
const util = require('util');
const view = require('./view/index');
const template = require('./view/template');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); //미들웨어 세팅

app.get('/', (req, res) => {
    fs.readdir('data', function(error, filelist) {       
        let list = template.listGen(filelist);
        let content = template.HOME_CONTENTS;
        content = content.replace(/\n/g, '<br>');
        let control = template.buttonGen();
        let html = view.index('Web 기술', list, content, control);
        res.send(html);                
    });
});

app.get('/id/:id', (req, res) => {
    fs.readdir('data', function(error, filelist) {     
        let list = template.listGen(filelist);
        let title = req.params.id;
        let control = template.buttonGen(title);
        let filepath = 'data/' + title + '.txt';
        fs.readFile(filepath, 'utf8', (error, buffer) => {
            buffer = buffer.replace(/\n/g, '</br>');
            let html = view.index(title, list, buffer, control);
            res.send(html);   
        });
    });
});

app.get('/create', (req, res) => {
    fs.readdir('data', function(error, filelist) {       
        let list = template.listGen(filelist);
        let content = template.createForm();
        let control = template.buttonGen();
        let html = view.index('글 생성', list, content, control);
        res.send(html);   
    });
});

app.post('/create', (req, res) => {        
    let subject = req.body.subject;
    let description = req.body.description;
    let filepath = 'data/' + subject + '.txt' ;
    fs.writeFile(filepath, description, error => {
        res.redirect(`/id/${subject}`)
    });
});

app.get('/delete/id/:id', (req, res) => { //🤔삭제를못함ㅋㅋㅋ
    fs.readdir('data', function(error, filelist) {       
        let list = template.listGen(filelist);
        let content = template.deleteForm(req.params.id); //🙄query아니고 id여야하지 
        let control = template.buttonGen();
        let html = view.index('글 삭제', list, content, control);
        res.end(html);   
    });
});

app.post('/delete', (req, res) => {        
    let filepath = 'data/' + req.body.subject + '.txt' ;
    fs.unlink(filepath, error => {
        res.redirect('/');
    });
});

app.get('/update/id/:id', (req, res) => {
    fs.readdir('data', function(error, filelist) {
        let list = template.listGen(filelist);
        let title = req.params.id;
        let control = template.buttonGen();     //버튼유지
        let filename = 'data/' + title + '.txt' ;
        fs.readFile(filename, 'utf8', (error, buffer) => {
            let content = template.updateForm(title, buffer); //수정하는 폼을주고,원래내용 버퍼를 가져오다
            let html = view.index(`${title}수정`, list, content, control);
            res.end(html);   
        });
    });
});

app.post('/update/', (req, res) => {
    let original = req.body.original;
    let subject = req.body.subject;
    let description = req.body.description;
    let filepath = 'data/' + original + '.txt';
    fs.writeFile(filepath, description, error => {
        if (original !== subject) {
            fs.renameSync(filepath, `data/${subject}.txt`);
        }
        res.redirect(`/id/${subject}`)
    });
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found');
});

app.listen(3000, () => {
    util.log('Server running at http://localhost:3000');
});