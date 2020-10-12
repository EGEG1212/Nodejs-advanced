module.exports.mainForm=   function (rows) {  //하나만 있을경우, name쪽에 삼항연산자를 쓰셨다!!
        let tableRow = ''
        for (let row of rows) {
            tableRow += `<tr>
                <td>${row.ggid}</td>
                <td>${row.name ? row.name: ''} </td> 
                <td>${row.debut}</td> 
                <td>${row.hit_song_id}</td>
                <td><a href="/gg_update/${row.sid}">수정 </a>
                    <a href="/gg_delete/${row.sid}">삭제</a>
                </td>
            </tr>`;
        }
        return `
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>걸그룹 조회</title>
</head>
<body>
    <h3>걸그룹 조회</h3>
    <hr>
    <table>
        <tr>
            <th>sid</th>
            <th>제목</th>
            <th>가수</th>
            <th>데뷔</th>
            <th>액션</th>
        </tr>
        ${tableRow}
    </table>
</body>
</html>
        `;
    }
