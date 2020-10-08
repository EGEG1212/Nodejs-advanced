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

let sql = `SELECT l.NAME, l.population,r.language FROM city AS l
INNER JOIN countrylanguage AS r
ON l.CountryCode   =r.CountryCode
WHERE r.IsOfficial='t'
ORDER BY l.Population DESC 
LIMIT 10;`;
conn.query(sql, function(error, rows, fields){
    if (error)
        console.log(error);
    
    for (let row of rows) {
        console.log(row.NAME, row.population, row.language); //😒대소문자구별하니 주의
    }
});

conn.end();