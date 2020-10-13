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

function ganerateHash(something) {
    //SHA: Secure Hash Algorithm 해시를 생성합니다.
    let shasum = crypto.createHash('sha256');       //2가지] sha256_렝스64, sha512(더복잡)_렝스128
    shasum.update(something);               //주로 패스워드 (암호화할 평문) 8번줄과 같이 crypto_hash
    return shasum.digest('base64');      //2가지] hex(16진수), base64(대소문자+숫자+기호)sha256렝스44 sha512렝스88
}

// 사용자가 입력한 uid와 pwd를 각각 'admin', '1234'로 가정
let uid = 'admin';      //나중엔 req.body.uid로 바뀔것임
let pwd = '1234';       //req.body.pwd로 바뀔것임
let pwdHash = ganerateHash(pwd);

let sql = `select * from users where uid like ?;`;
conn.query(sql, uid, function(error, results, fields){        //uid값 받고 result 결과출력 이후 if문
    if (error)
        console.log(error);
    console.log(results);
    let result = results[0];
    if (result.pwd === pwdHash) {               //👌DB에서 가져온 result.pwd랑 21줄 사용자가 입력한 pwdHash랑 비교!
        console.log('Login 성공');
    } else {
        console.log('Login 실패: 패스워드가 다릅니다.');
    }    
});

conn.end();