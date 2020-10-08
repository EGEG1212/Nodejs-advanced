const mysql =  require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let connInfo = JSON.parse(info);
let conn = mysql.createConnection({
    host:   connInfo.host, 
    user:   connInfo.user,
    password:   connInfo.password,
    database:   connInfo.database,
    port:   connInfo.port
});                             //😍여기까지 보안패키지!!!😍

conn.connect();

let sql = `SELECT hsid AS id, NAME, DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate, title
FROM song LEFT JOIN girl_group
ON song.hsid = girl_group.hit_song_id
 WHERE debut BETWEEN '2009-01-01' AND '2009-12-31';`;
conn.query(sql, function(error, rows, fields){
    if (error)
        console.log(error);
    
    for (let row of rows) {
        console.log(row.id, row.debutDate, row.title); //😒대소문자구별하니 주의
    }
});

conn.end();