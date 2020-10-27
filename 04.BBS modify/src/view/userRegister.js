const template = require('./template');

module.exports.register = function () {
	return `
        ${template.header()}

<nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="http://localhost:3000/login">
        <img src="/img/logo.png" alt="호서직업능력개발원"
            style="height: 40px; margin-left: 50px; margin-right: 100px;">
    </a>
</nav>

<div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
        <style>
		body::after { width: 100%; height: 100%; content: "";  top: 0; left: 0; z-index: -1; opacity: 0.3;background: url("../img/bg.jpg") ; position: absolute; background-size: cover;  }
		h3 {text-align: center; margin-top: 5%;}
        </style>
        <h3>Madre & Sourdough 회원 가입</h3>
            <hr>
        </div>
        <div class="col-3"></div>
        <div class="col-6">
            <form action="/user/register" method="post" enctype="multipart/form-data">
            <table class="table table-borderless">
                    <tr>
                        <td><label for="uid">사용자 ID</label></td>
                        <td><input type="text" name="uid" id="uid" placeholder="필수 아이디 2자리이상"></td>
                    </tr>
                    <tr>
                        <td><label for="pwd">패스워드</label></td>
                        <td><input type="password" name="pwd" id="pwd" placeholder="비밀번호 4자리이상"></td>
                    </tr>
                    <tr>
                        <td><label for="pwd2">패스워드 확인</label></td>
                        <td><input type="password" name="pwd2" id="pwd2" placeholder="비밀번호 다시 입력"></td>
                    </tr>
                    <tr>
                        <td><label for="uname">이름</label></td>
                        <td><input type="text" name="uname" id="uname" placeholder="필수 이름 2자리이상"></td>
                    </tr>
                    <tr>
                        <td><label for="tel">전화번호</label></td>
                        <td><input type="text" name="tel" id="tel" placeholder="선택 전화번호"></td>
                    </tr>
                    <tr>
                        <td><label for="email">이메일</label></td>
                        <td><input type="text" name="email" id="email" placeholder="선택 email@"></td>
                    </tr>
                    <tr>
                    <tr>
                        <td><label for="photo">사진</label></td>
                        <td><input type="file" name="photo" id="photo" placeholder="선택 프로필사진"></td>
                    </tr>
                        <td colspan="2" style="text-align: center;">
                            <input class="btn btn-primary" type="submit" value="가입">
                            <input class="btn btn-secondary" type="reset" value="취소" onclick="location.href='/user/register'>
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