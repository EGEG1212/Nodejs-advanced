module.exports = {
    header:     function() {
        return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>My BBS</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/fontawesome-free-5.15.1-web/css/all.min.css">
    <script src="/jquery/jquery.min.js"></script>
    <script src="/popper/popper.min.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <img src="/img/logo.png" style="height: 40px; margin-left: 50px; margin-right: 100px;" alt="호서직업"> 
        <ul class="nav mr-auto ">
            <li class="nav-item">
                <a class="nav-link" href="index.html"><i class="fas fa-home"></i>HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logout">로그아웃</a>
            </li>
        </ul>
        <div class="navbar-text fixed-right" id="weather">
            홍길동님 반가워요~ &nbsp&nbsp&nbsp&nbsp
            날씨: 맑음 27도 온도: 딱좋음
        </div>
    </nav>
        `;
    },
    footer:     function() {
        return `
            <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center fixed-bottom">
            <font style="color: grey; " >Copyright 2020 by Eun Gyeong Jung</font> 
        </nav>
    </footer>
    </body>
    </html>
        `;
    }
    
}