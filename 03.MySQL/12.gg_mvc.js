const express = require('express');         //HTML(list, insert),DB(db-module)로 코드보내고 라우팅관련만 여기에 쓰기~
const bodyParser = require('body-parser');
const dm = require('./db/gg_db-module');           //이런 펑션을 쓸꺼야~

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    dm.getAllLists(rows => {
        const View = require('./view/gg_list') ;       //상단에 있다가 여기서 열어꺼내는걸로
        let html = View.mainForm(rows);
        res.end(html);
    });
    });

app.get('/insert', (req, res) => {                //읽어서 화면을 클라이언트에게 던져주려
    const view = require('./view/gg_insert');      //모듈에서 읽는형태. 앞으로 이렇게 할것
    let html = view.insertForm();
    res.send(html);
});

app.post('/insert', (req, res) =>{
    let singer = req.body.singer;                  //😵깔끔하게 바뀌었다고합니다.
    let debut = req.body.debut;
    let params = [singer, debut];           //파람스라는 변수의 어레이로 //아래 파람스 추가 
    
    dm.insertgg(params, () => {
        res.redirect('/');
    });
});

app.get('/delete/:ggid', (req, res) => {         //😛삭제는 get만 해도되나?
    let ggid = parseInt(req.params.ggid);         //요렇게 받아요
    console.log(ggid);
    dm.deletegg(ggid, () => {
        res.redirect('/');
    });
});

app.get('/update/:ggid', (req, res) => {         //😋업데이트는 1)data가져와서,form만들기 2)form보여주기
    let ggid = parseInt(req.params.ggid);         //요렇게 받아요
    console.log(ggid);
    dm.getgg(ggid, result => {
        const View = require('./view/gg_update') ;       //상단에 있다가 여기서 열어꺼내는걸로
        let html = View.updateForm(result);
        res.send(html);
    });
});

app.post('/update', (req, res) => {
    let ggid = parseInt(req.body.ggid);  //🎈파람스가 아니라 바디로 받아요(포스트니까?)읭?
    let singer = req.body.singer;                  
    let debut = req.body.debut;
    let params = [singer, debut, ggid]; 
    
    dm.updategg(params, () => {           //🎈파람스로받고 콜백할게 없어서 빈칸?
        res.redirect('/');
    })
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});
