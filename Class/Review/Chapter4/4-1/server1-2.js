const http = require('http');

//아래와 같이 한 파일에서 다른 서버를 동시에 올릴 수도 있다.
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write('<h1>헬로방구링</h1>');
    res.end('<p>방구리탱구링</p>');
})
.listen(8080, () => {
    console.log('8080번에서 방구리탱구리');
})

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write('<h1>안녕하세용</h1>');
    res.end('<p>새대갈이에용</p>');
})
.listen(8081, () => {
    console.log('8081번에서 안녕하세용');
})