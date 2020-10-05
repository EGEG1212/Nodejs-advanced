let express = require('express');
let morgan = require('morgan');

let app = express();

//app.use(morgan('combined'));
//app.use(morgan(':method + :date + :remote-addr'))//Ipv6 뭔가 붙어 CMD찍힘
app.use(morgan)
app.use(function (request, response) {
    response.send('<h1>express Basic_Morgan Middleware</h1>');
});

app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000');
})

//요청들어온 기록을 남길 수 있음