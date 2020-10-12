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

let sql = `insert into song(title, lyrics) values ('Dynamite','Cos ah ah I’m in the stars tonight')`; //하수의방법 . 고수는 파라메타로 받는다
conn.query(sql, function(error, fields){        //데이터를 얻을게 없어서 row삭제 (row결과있을때만)
    if (error)
        console.log(error);
    });

conn.end();