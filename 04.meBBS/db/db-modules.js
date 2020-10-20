const fs = require('fs');
const mysql =  require('mysql');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let config = JSON.parse(info);

module.exports = {    

    insert:     function (params, callback) {
        let sql = `insert into users(uid, pwd, uname, email) values (?, ?, ?, ?);`; //고수는 파라메타로 받는다!!!  ?. ? 하나하나 해당된다.
    let conn = this.getConnection(); 
        conn.query(sql, params, function(error, fields) {        //데이터를 얻을게 없어서 row삭제 (row결과있을때만)
            if (error)
                console.log(error);
            callback();             //여기는 콜백 mvc.js에는 27줄 dm.insertSong(params,
        });
        conn.end();
    },
}