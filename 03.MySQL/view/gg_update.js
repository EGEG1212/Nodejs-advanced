module.exports.updateForm=   function (result) {  //insert카피해온 update 아래밸류값이들어가야해서 //히든으로 sid값은 데이터로 가지고있다. 
    return `        
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>girl_group  Form</title>
    </head>
    <body>
        <h1>걸그룹 수정</h1>
        <hr>
        <form action="/gg_update" method="post">
        <input type="hidden" name="ggid" value="${result.ggid}">          
            <table>
                <tr>
                    <td><label for="singer">걸그룹 이름</label></td>
                    <td><input type="text" name="singer" id="singer" value="${result.singer}"></td>
                </tr>
                <tr>
                    <td><label for="debut">데뷔일</label></td>
                    <td><input type="text" name="debut" id="debut" value="${result.debut}"></td>
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