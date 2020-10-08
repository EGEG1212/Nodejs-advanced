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

let sql = `SELECT l.Continent,l.Name AS country,r.Name AS city,r.population FROM country AS l

JOIN city AS r
ON l.code = r.countrycode
WHERE l.continent= 'asia'
ORDER BY r.population DESC 
LIMIT 10;`;
conn.query(sql, function(error, rows, fields){
    if (error)
        console.log(error);
    
    for (let row of rows) {
        console.log(row.Continent, row.country, row.city, row.population); //😒대소문자구별하니 주의
    }
});

conn.end();