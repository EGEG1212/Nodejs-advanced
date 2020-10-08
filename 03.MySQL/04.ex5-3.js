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

let sql = `SELECT continent, COUNT(*) AS countCont, 
round(SUM(GNP)) AS sumCont, 
round(AVG(GNP)) AS avgCont 
FROM country
GROUP BY continent;`;
conn.query(sql, function(error, rows, fields){
    if (error)
        console.log(error);
    
    for (let row of rows) {
        console.log(row.continent, row.countCont, row.sumCont, row.avgCont); //😒대소문자구별하니 주의
    }
});

conn.end();