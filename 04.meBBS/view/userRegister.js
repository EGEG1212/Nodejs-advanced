    const template = require('./template')

    module.exports.register = function() {
        return`
            ${template.header()}
        <div class="container" style="margin-top: 90px;">
        <div class="row">
        <div class="col-12"> 
        <h3>Madre & Sourdough 회원 가입</h3>
        <hr>
        </div> 
        <div class="col-3"></div>
        <div class="col-6">
            <form action="/user/register" method="post">
            <table class="table table-borderless">
                <tr>
                    <td><label for="uid">사용자 ID</label></td>
                    <td><input type="text" name="uid" id="uid" placeholder="아이디"></td>
                </tr>
                <tr>
                    <td><label for="pwd">패스워드</label></td>
                    <td><input type="password" name="pwd" id="pwd" placeholder="비밀번호"></td>
                </tr>
                <tr>
                    <td><label for="pwd2">패스워드 확인</label></td>
                    <td><input type="password" name="pwd2" id="pwd2" placeholder="비밀번호 "></td>
                </tr>
                <tr>
                    <td><label for="uname">이름</label></td>
                    <td><input type="text" name="uname" id="uname" placeholder="이름"></td>
                </tr>
                <tr>
                    <td><label for="email">이메일</label></td>
                    <td><input type="text" name="email" id="email" placeholder="email@"></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <input class="btn btn-primary" type="submit" value="가입"></input>
                        <input class="btn btn-secondary" type="reset" value="취소"></input>
                    </td>
                </tr>
            </table>
            </form>
        </div>
        <div class="col-3"></div>
        </div>
        </div>
        
        ${template.footer()}

        `;
}