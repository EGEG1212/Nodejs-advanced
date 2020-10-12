const fs = require('fs');
const mysql =  require('mysql');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let config = JSON.parse(info);

module.exports = {                          //module.exports
    getConnection: function() {             //겟커넥션, 펑션 순서만 바꿔서
        let conn = mysql.createConnection({
            host:   config.host, 
            user:   config.user,
            password:   config.password,
            database:   config.database,
            port:   config.port,  
            dateStrings : 'date'                   //보안패키지 복사해놓기
        });
        conn.connect(function(error) {
            if (error)
            console.log('mysql connection error :' + err);
        });
        return conn;
    },
    getAllLists:    function (callback) {       //콜백들어감
        let conn = this.getConnection();            //내꺼안에서 부를꺼니까 this
        let sql = `SELECT * FROM girl_group;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    }, 
    getJoinLists:    function (callback) {       //콜백들어감
        let conn = this.getConnection();            //내꺼안에서 부를꺼니까 this
        let sql = `SELECT  * FROM girl_group 
                    ORDER BY hit_song_id DESC 
                    LIMIT 10;  `;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    }, 
    insertGg:     function (params, callback) {
        let sql = `insert into girl_group(ggid, name, debut, hit_song_id) values (?, ?, ?, ?);`; //고수는 파라메타로 받는다!!!  ?. ? 하나하나 해당된다.
    let conn = this.getConnection(); 
        conn.query(sql, params, function(error, fields) {        //데이터를 얻을게 없어서 row삭제 (row결과있을때만)
            if (error)
                console.log(error);
            callback();             //여기는 콜백 mvc.js에는 27줄 dm.insertSong(params,
        });
        conn.end();
    },
    deleteGg:     function (sid, callback) {
        let sql = `delete from girl_group where hit_song_id=?;`; 
        let conn = this.getConnection(); 
        conn.query(sql, sid, function(error, fields) {        //1개삭제여서 sid만 넣음됨
            if (error)
                console.log(error);
            callback();             //여기는 콜백 mvc.js에는 27줄 dm.insertSong(params,
        });
        conn.end();
    },
    getGg:     function (sid, callback) {
        let sql = `SELECT * FROM girl_group WHERE hit_song_id=?;`; 
        let conn = this.getConnection(); 
        conn.query(sql, sid, function(error, rows, fields) {       //조회 쿼리기 때문에 row가 나옴
            if (error)
                console.log(error);
            callback(rows[0]);                         //✨주의✨그래서 rows를 콜백이 받았다.>db-testㄱㄱ/row[0].sid로 꺼내줘야한다
        });
        conn.end();
    },
    updateGg:     function (params, callback) {      //이 순서대로 3개모두 받아야해서 params
        let sql = `update girl_group set name=?, debut=? where hit_song_id=?;`; 
        let conn = this.getConnection(); 
        conn.query(sql, params, function(error, fields) {        //여기도 파람스
            if (error)
                console.log(error);
            callback();             //여기는 콜백 mvc.js에는 27줄 dm.insertSong(params,
        });
        conn.end();
    },
}