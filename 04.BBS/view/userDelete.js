const tplt = require('./template');

module.exports.delete = function (navBar, uid, uname) {
	return `
		${tplt.header()}
        ${navBar}
<div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
        <style>
            body::after { width: 100%; height: 100%; content: "";  top: 0; left: 0; z-index: -1; opacity: 0.3;background: url("./img/bg.jpg") ; position: absolute; background-size: cover;  }
            h3 {text-align: center; margin-top: 5%;}
        </style>
            <h3>회원정보 삭제</h3>
            <hr>
        </div>
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card border-warning mt-3">
                <div class="card-body">
                    <h5 class="card-title">회원 uid: ${uid},  uname: ${uname} 님을 정말 삭제하시겠습니까?</h5>
                    <p class="card-text text-center">
                        <button class="btn btn-primary" onclick="location.href='/user/deleteConfirm/${uid}'">삭제</button>
                        <button class="btn btn-secondary" onclick="location.href='/user/list/1'">취소</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</div>

		${tplt.footer()}
    `;
}