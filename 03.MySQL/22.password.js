const mysql =  require('mysql');
const fs = require('fs');
const crypto = require('crypto');
let info = fs.readFileSync('./mySQL.json', 'utf8');
let config = JSON.parse(info);
let conn = mysql.createConnection({
    host:   config.host, 
    user:   config.user,
    password:   config.password,
    database:   config.database,
    port:   config.port
});                             //😍여기까지 보안패키지!!!😍

//SHA: Secure Hash Algorithm 해시를 생성합니다.
let shasum = crypto.createHash('sha256');       //2가지] sha256_렝스64, sha512(더복잡)_렝스128
shasum.update('1234');               //주로 패스워드 (암호화할 평문) 8번줄과 같이 crypto_hash
let output = shasum.digest('base64');      //2가지] hex(16진수), base64(대소문자+숫자+기호)sha256렝스44 sha512렝스88

let sql = `insert into users(uid, pwd, uname) values(?, ?, ?);`;
let params = ['admin', output, '관리자']
           /*   values ('admin', '${output}'' '관리자')`;  //디폴트 필드명은 안적어도 됨 */
conn.query(sql, params, function(error, fields){        //파람스 추가 데이터를 얻을게 없어서 row삭제 (row결과있을때만)
    if (error)
        console.log(error);
    });

conn.end();