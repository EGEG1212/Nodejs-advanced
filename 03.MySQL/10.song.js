const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mysql =  require('mysql');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let config = JSON.parse(info);

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

function getConnection() {
    let conn = mysql.createConnection({
        host:   config.host, 
        user:   config.user,
        password:   config.password,
        database:   config.database,
        port:   config.port                     //보안패키기 복사해놓기
    });
    conn.connect(function(error) {
        if (error)
        console.log('mysql connection error :' + err);
    });
    return conn;
}

app.get('/', (req, res) => {
    conn.connect();
    let sql = `SELECT * FROM song ORDER BY hsid DESC LIMIT 5;`;
    let html = fs.readFileSync('10.list.html', 'utf8');
        conn.query(sql, (error, rows, fields) => {
            if (error)
            console.log(error);
        for (let row of rows) {
            html += `<tr>
                        <td>${row.hsid}</td>
                        <td>${row.title}</td>
                        <td>${row.lyrics}</td>
                     </tr>`;
        }
        html += `   </table>
                </body>
                </html>`;
        res.end(html);
    });
    conn.end();
});

app.get('/insert', (req, res) => {                //읽어서 화면을 클라이언트에게 던져주려
    fs.readFile('10.song.html', 'utf8', (error, data) => {
        res.send(data);
    });
});


app.post('/insert', (req, res) =>{
    let title = req.body.title;                  //😵이렇게 깔끔하게 바뀌었다고합니다?!?!?
    let lyrics = req.body.lyrics;
    let sql = `insert into song(title, lyrics) values (?, ?);`; //고수는 파라메타로 받는다!!!  ?. ? 하나하나 해당된다.
    let params = [title, lyrics];           //파람스라는 변수의 어레이로 //아래 파람스 추가 
    let conn = getConnection(); 
    conn.query(sql, params, function(error, fields) {        //데이터를 얻을게 없어서 row삭제 (row결과있을때만)
        if (error)
            console.log(error);
        res.redirect('/');
    });
    conn.end();
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});
