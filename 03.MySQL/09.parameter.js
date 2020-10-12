const mysql =  require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let config = JSON.parse(info);
let conn = mysql.createConnection({
    host:   config.host, 
    user:   config.user,
    password:   config.password,
    database:   config.database,
    port:   config.port
});                             //😍여기까지 보안패키지!!!😍

conn.connect();

let sql = `insert into song(title, lyrics) values (?, ?);`; //고수는 파라메타로 받는다!!!  ?. ? 하나하나 해당된다.
let params = ['눈누난나', '그래서 난 눈누난나 ya ya ']; //파람스라는 변수의 어레이로 //아래 파람스 추가 
conn.query(sql, params, function(error, fields){        //데이터를 얻을게 없어서 row삭제 (row결과있을때만)
    if (error)
        console.log(error);
    let sql = 'SELECT * FROM song ORDER BY hsid DESC LIMIT 3;'
    conn.query(sql, function (error, rows, fields) {
        if (error)
            console.log(error);
        for (let row of rows) {
            console.log(row.hsid, row.title, row.lyrics);
        }
        });
        conn.end();
    });
