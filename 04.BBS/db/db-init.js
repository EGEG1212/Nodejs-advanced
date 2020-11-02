const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('../mysql.json', 'utf8');
let config = JSON.parse(info);

function getConnection() {
    let conn = mysql.createConnection({
        host:   config.host,
        user:   config.user,
        password:   config.password,
        database:   config.database,
        port:   config.port
    });
    conn.connect(function(error) {
        if (error) 
            console.log('mysql connection error :' + err);
    });
    return conn;
}

/* let sqlUsers = `
    create table if not exists users (
        uid varchar(20) not null primary key,
        pwd char(44) not null,
        uname varchar(20) not null,
        tel varchar(20),
        email varchar(40),
        regDate datetime default current_timestamp,
        isDeleted int default 0
    );
`;
let conn = getConnection();
conn.query(sqlUsers, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */

/* let usersArray = [
    ['admin', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '관리자' ],
    ['anne', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '고채경' ],
    ['eskim', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '김은숙'],
    ['madre', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '마드레'],
    ['wjlee', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '이우정'],
    ['넌좋은애', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '넌좋은애'],
    ['노란연못', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '노란연못'],
    ['물병', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '물병'],
    ['새싹르뱅', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '새싹르뱅'],
    ['제클린', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '제클린'],
    ['해피요', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '해피요'],
];
let sqlInsert = `insert into users(uid, pwd, uname) values(?,?,?);`;

let conn = getConnection();
for (let params of usersArray) {
    conn.query(sqlInsert, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */

/* let sqlBbs = `
    create table if not exists bbs (
        bid int not null primary key auto_increment,
        uid varchar(20) not null,
        title varchar(100) not null,
        content varchar(1000),
        modTime datetime default current_timestamp,
        viewCount int default 0,
        isDeleted int default 0,
        replyCount int default 0,
        foreign key(uid) references users(uid)
    ) auto_increment=1001;
`;
let conn = getConnection();
conn.query(sqlBbs, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end();
 */


/* let bbsArray = [
    ['eskim', '미스터 션샤인', `2018년 방영한, 구한말을 배경으로 하는 한국 드라마.`],
    ['eskim', '도깨비', `불멸의 삶을 끝내기 위해 인간 신부가 필요한 도깨비(공유)와 그와 함께 기묘한 동거를 시작한 기억상실증 저승사자(이동욱). 그런 그들 앞에 '도깨비 신부'라 주장하는 '죽었어야 할 운명'의 소녀 지은탁(김고은)이 나타나며 벌어지는 신비로운 낭만설화이다.`],
    ['eskim', '태양의 후예', `낯선 땅 극한의 환경 속에서 사랑과 성공을 꿈꾸는 젊은 군인과 의사들을 통해 삶의 가치를 담아낸 블록버스터급 휴먼 멜로 드라마`],
    ['eskim', '시크릿 가든', `싸가지 없는 부잣집 도련님과 스턴트맨으로 하루하루 간신히 살아가는 도시 빈민 아가씨의 연애라는 진부하기 짝이 없는 설정, 거기에 남녀의 영혼이 뒤바뀐다는 클리셰를 사용하였다.`],
    ['eskim', '파리의 연인', `"애기야 가자"
    "저 남자가 내 사람이다. 저 남자가 내 애인이다 왜 말을 못하냐고!"`],
    ['wjlee', '슬기로운 의사생활', `누군가는 태어나고 누군가는 삶을 끝내는, 인생의 축소판이라 불리는 병원에서 평범한 듯 특별한 하루하루를 살아가는 사람들과 눈빛만 봐도 알 수 있는 20년지기 친구들의 케미스토리를 담은 드라마. 99학번 의대 동기 다섯 명을 중심으로 펼쳐지는 병원에서의 이야기를 그린다.`]
];
let sqlInsert = `insert into bbs(uid, title, content) values(?,?,?);`;

let conn = getConnection();
for (let params of bbsArray) {
    conn.query(sqlInsert, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */


/* let bbsArray = [
    ['넌좋은애', '팡도르', `스티프 열심히 밥주고 팡도르 만들어 봤어요~ 버터랑 계란이 많이 들어가서 보험으로 이스트 안꼬집도 넣었는데.. 다음엔 파스타마드레 잘 키워서 이스트없이 만들어 봐야곘어요 `],
    ['제클린', '우리집 르뱅이가 2배를 못찍는 이유', `백밀 피딩할때와 다르게 반점이 있었는데 호밀밀기울인줄 알았어요.. 색이 좀 이상해도 그러려니 했는데 알고보니 이미 죽은거였어요!! 이런 세상에...`],
    ['물병', '맛있다 해서 또 만든 르뱅바게트빵', `급하게 반죽하고 냉장고에 넣어둔지 2-3시간 볼일보다 와서 마저작업했어요, 딱 1차발효되어있어서 좋았어요! 이번에도 크랙이 좀 아쉽지만.. 스팀없는 오븐탓인지 아님 실력부족인지 ㅎㅎ그래도 맛이 바게트예요!`],
    ['제클린', '애증의 발효종', `잘 나온 빵 두 덩이를 굽고 신이 나 있었는데 어제그그제 3일 연속 빵 3개를 말했어요..맛은 시큼하지 않고 껍질도 얇고 맛있는데 넙치에다가 감칠맛이 부족하고 기공도 빽뺵했어요 노란연못님의 조언으로 발효정을 되돌아보니 고배합을 많이 했는데 요즘엔 1:2:2정도가 전부더라구요`],
    ['노란연못', '기공에 대하여', `큰 기공과 조밀하고 작은 기공 중 뭐가 좋은건가요? 
    기공은 우선 밀가루에 따라 너무 달라요.. 
    빵의 올바른 기공은 발효균의 활동으로 생긴 가스를 반죽의 탄탄한 구조망안에 잡아두고 있던 것이 오븐에서 가열되면서 (오븐발효) 온도의 급상승으로 기존의 가스와 새로 생성되는 가스의 작용으로 빵이 부풀면서 형성됩니다. `],
    ['노란연못', '기공에 대하여2', `발효균의 활동이 활발하여 가스가 많이 생성되고 회분율이 높거나 수분흡수율이 높고, 단백질 함량도 높으면 반죽의 구조 안에 가스를 꽈악~ 잘 잡고 있어서 기공이 클 수 있는데 무작정 큰 것보단 전체적으로 고른것이 좋습니다.
    밀가루의 재료의 특성을 완전히 이해하여 그 밀가루로 작업할 수 있는 최대한으로 진행했을 때에 본인이 좋아하는 맛과 질감도 나오면서 전체적으로 기공이 고르고 그 모든 조건 중에서 나올 수 있는 크기의 기공이 나오면 좋지요^^`],
    ['노란연못', '천연방효종을 키우는 우리들의 빵의 또다른 특성', `발효종이 가지고 있는 발효균주에 따라 달라지는 가스 생산력과 작업자의 손에서 완성되는 반죽의 탄성 및 신전성이 가져오는 가스포집력의 적절한 조화가 만들어 주는 기공의 형태와 가스를 담겨 있던 기공 안에서 풍기는 풍미, 그것이 우리의 숙제입니다.`],
    ['새싹르뱅', '건조르뱅 깨우는 중, 따뜻한 눈빛 발사중입니다~', `건조르뱅깨우는 중이라 높이60ml였는데 80ml까지 큰게 어찌나 기특한지요~ 마사님들의 응원에 힘입어 르뱅이가 일어나고 있습니다아!! `],
    ['새싹르뱅', '추추사워바게트', `언제적부터 추추가 먹어보고 싶었는데 집에 부추랑 사워도우랑 일정이 매번안맞아서 못했었어요 ㅜㅜ 이번 추추도전! 거기에 바게트형으로 도전!!  
    내상은.. 토끼를 잡을 수 없는 비주얼이지만.. 그래도 맛은 일품이네요~  부추와 후추의 조합! 신선해요!  `],
    ['madre', '르뱅레몬스콘레시피', `르뱅소진용 레시피예요~ 꼭 한번 해보세요! 르뱅은 계란대신에 들어가는것 같아요 베이킹파우더는 ..안들어갈 줄 알았는데 들어가네요 ㅎㅎ  `],
    ['노란연못', '사워도우 팬케이크 고구마버전', `예전 레피시를 조금 수정해서 뭔가 만들어 먹어봤어요 ㅎㅎ 특별한것이 없으면 올리지는 않는데 이번 고구마로 만들었더니 반응이 좋네요~  마사님들도 한번 만들어보세요`],
    ['해피요', '드디어 책을 구했어요', `도서관에서 누군가 빌려가서 코로나로 인해 끊임없이 반납되지 않다가 이제서야 손안에 들어와서 읽게 되었어요 가족들이 슬쩍 보더니 빵만드는게 이리 어려운 일이냐고 웃네요 ㅎㅎ 책의 전문성을 보고 깜짝 놀라면서 말이죠~ 이제서야 교과서 같은 책을 보게 되면서 설레이는 마음입니다~`],
    ['물병', '틴소체험단', `틴소로 다작러가 되었어요 돌상도 차려보고 어머니친구들 빵도 만들어드리고 인기가 많아서 좋네요~ 게다가 건강에도 좋아서 너무 기뻐요`],

];
let sqlInsert = `insert into bbs(uid, title, content) values(?,?,?);`;

let conn = getConnection();
for (let params of bbsArray) {
    conn.query(sqlInsert, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */

/* let replyBbs = `
    create table if not exists reply (
        rid int not null primary key auto_increment,
        bid int not null,
        uid varchar(20) not null,
        content varchar(100),
        regTime datetime default current_timestamp,
        isMine int default 0,
        foreign key(bid) references bbs(bid),
        foreign key(uid) references users(uid)
    );
`;
let conn = getConnection();
conn.query(replyBbs, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */

/* let replyArray = [
    [1006, 'djy', '좋습니다. 매우 훌륭한 작품입니다.'],
    [1006, 'gdhong', '매우매우 훌륭합니다.'],
    [1011, 'eskim', '너무 좋은 작품입니다. 잘 보았어요.']
];
let sqlInsertReply = `insert into reply(bid, uid, content) values(?,?,?);`;

let conn = getConnection();
for (let params of replyArray) {
    conn.query(sqlInsertReply, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */

let replyArray = [
    [1009, '노란연못', '후추와 부추의 조합이 괜찮았나요? 입에맞으셨다면 다행이예요:-)'],
    [1009, '새싹르뱅', '그럼요~ 입맛에 딱이였어요!'],
    [1006, 'anne', '기공을 봐도봐도 잘 몰랐었는데, 도움이 많이 되었습니다!'],
    [1006, '노란연못', '도움이 되기를 바라는 마음에서 글올려보았어요^^'],
    [1010, 'admin', '스콘에 르뱅을 넣을생각은 못했어요 ㅎㅎ 한번 해볼게요~'],
    [1010, 'madre', '계란대신에 넣는거라.. 베파 꼭 넣으셔야 잘 부풀어요 ㅎㅎ'],
    [1012, 'anne', '책 가지고만 있어도 든든하지요 ㅎㅎ 보시다가 공유하고픈 자료 있으심 알려주세요~~'],
    [1012, '해피요', '그럼요~']
];
let sqlInsertReply = `insert into reply(bid, uid, content) values(?,?,?);`;

let conn = getConnection();
for (let params of replyArray) {
    conn.query(sqlInsertReply, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end();

/* let sqlSelect = `select * from bbs where bid=1006;`;
let sqlReplyCount = `select count(*) as count from reply where bid=?;`;

let conn = getConnection();
conn.query(sqlSelect, (error, rows, fields) => {
    let result = rows[0];
    let conn2 = getConnection();
    conn2.query(sqlReplyCount, result.bid, (err, res, fields) => {
        result.count = res[0].count;
        console.log(result);
    });
    conn2.end();
})
conn.end(); */