    const template = require('./template')

    module.exports.test = function() {
        return`
        <div class="container" style="margin-top: 90px;">
        ${template.header()}
        <div class="container">  
        <h1>My Icons <i class="fas fa-heart"></i></h1>
        <p>An icon along with some text: <i class="fas fa-thumbs-up"></i></p> 
        </div>
        
        <div class="container">
        <p>이곳에 컨텐츠 채우기</p>
        </div>
        
        ${template.footer()}

        `;
    }
