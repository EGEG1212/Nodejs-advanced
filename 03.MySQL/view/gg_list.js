module.exports.mainForm=   function (rows) {  //하나만 있을 경우. 이렇게
        let tableRow = ''
        for (let row of rows) {
            tableRow += `<tr>
                <td>${row.sid}</td>
                <td>${row.title}</td>
                <td>${row.lyrics}</td>
                <td><a href="/update/${row.sid}">수정 </a>
                    <a href="/delete/${row.sid}">삭제</a>
                </td>
            </tr>`;
        }
        return `
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> girl_group조회</title>
</head>
<body>
    <h3>노래 조회</h3>
    <hr>
    <table>
        <tr>
            <th>sid</th>
            <th>제목</th>
            <th>가사</th>
            <th>액션</th>
        </tr>
        ${tableRow}
    </table>
</body>
</html>
        `;
    }
