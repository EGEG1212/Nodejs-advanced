const fs = require('fs');
const mysql =  require('mysql');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let config = JSON.parse(info);

function getConnection() {             //겟커넥션, 펑션 순서만 바꿔서
    let conn = mysql.createConnection({
        host:   config.host, 
        user:   config.user,
        password:   config.password,
        database:   config.database,
        port:   config.port                     //보안패키지 복사해놓기
    });
    conn.connect(function(error) {
        if (error)
        console.log('mysql connection error :' + err);
    });
    return conn;
}

let sql = `SELECT song.sid, song.title, gg.NAME, song.lyrics FROM song 
        left JOIN girl_group AS gg
        ON song.sid=gg.hit_song_id
        ORDER BY song.sid DESC 
        LIMIT 10;  `;
let conn = getConnection(); 
conn.query(sql, , function(error, rows, fields) {       
    if (error)
        console.log(error); 
    console.log(rows);                         
});
conn.end();
/* let sql = `delete from song where sid=?;`; 
    let conn = getConnection(); 
        conn.query(sql, 125, function(error, fields) {        //1개삭제여서 sid만 넣음됨
            if (error)
                console.log(error);
        
        });
        conn.end(); */