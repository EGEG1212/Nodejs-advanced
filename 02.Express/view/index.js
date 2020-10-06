exports.index = function(title, list, content, control) {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1><a href="/">웹 기술</a></h1>
    ${list}                           <!--템플릿에 ul넣고 지웠당👍 -->
    <hr>
    <p>
        ${content}
    </p>
    <hr>
    ${control}
</body>
</html>
    `;
}