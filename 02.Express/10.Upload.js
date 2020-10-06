const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const fs = require('fs');
const util = require('util');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(multipart({uploadDir: __dirname+'/public/upload'})); 

app.get('/', (req, res) => {
    fs.readFile('10.FileForm.html', 'utf8', (error, data) => {
        res.send(data);
    });

});

app.post('/', (req, res) => {
    let comment = req.body.comment;
    let filename = req.files.image.name;
    let filetype = req.files.image.type;
    let uploadPath =  req.files.image.path;
    //console.log(comment);
    //console.log(filename, filetype);
    //console.log(uploadPath);

    //받은 파일이 이미지면 이름을 변경저장하고, 아니면 제거함. 
    if (filetype.indexOf('image') >= 0) {
        let outputName = comment + filename;
        let newFileName =  __dirname + '/public/upload/' + outputName;
        fs.rename(uploadPath, newFileName, error => {
            if (error)
                console.log(error);
            res.redirect('/');
        });
    } else {
        fs.unlink(uploadPath, error => {
            if (error)
                console.log(error);
            res.status(400).send(`<h1>Bad Request</h1>`);
        });
    }
});


app.listen(3000, function () {
    util.log('Server running at http://127.0.0.1:3000');
});
