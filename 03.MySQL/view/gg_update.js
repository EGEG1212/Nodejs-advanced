module.exports.updateForm=   function (result) {  //insert카피해온 update 아래밸류값이들어가야해서 //히든으로 sid값은 데이터로 가지고있다. 
    return `        
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>girl_group Form</title>
    </head>
    <body>
        <h1>걸그룹 수정</h1>
        <hr>
        <form action="/gg_update" method="post">
        <input type="hidden" name="sid" value="${result.sid}">          
            <table>
                <tr>
                    <td><label for="title">노래 제목</label></td>
                    <td><input type="text" name="title" id="title" value="${result.title}"></td>
                </tr>
                <tr>
                <td><label for="name"">가수</label></td>
                <td><input type="text" name="name" id="name" value="${result.name}"></td>
                </tr>
                <tr>
                <td><label for="debut"">데뷔</label></td>
                <td><input type="text" name="debut" id="debut" value="${result.debut}"></td>
                </tr>
                <tr>
                    <td><label for="lyrics"">가사</label></td>
                    <td><input type="text" name="lyrics" id="lyrics" value="${result.lyrics}"></td>
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