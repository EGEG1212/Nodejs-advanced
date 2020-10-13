module.exports.insertForm=   function () { 
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>girl_group   Form</title>
    </head>
    <body>
        <h1>걸그룹 추가</h1>
        <hr>
        <form action="/gg_insert" method="post">
            <table>
                <tr>
                    <td><label for="singer">걸그룹 이름</label></td>
                    <td><input type="text" name="singer" id="singer"></td>
                </tr>
                <tr>
                    <td><label for="debut"">데뷔일</label></td>
                    <td><input type="text" name="debut" id="debut"></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" value="제출"></td>
                </tr>
            </table>
        </form>
    </body>
    </html>
    `;
}