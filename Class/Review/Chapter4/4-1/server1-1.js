const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello 방구리</h1>');
    res.end('<p>방구리 탱구링</p>');
}).listen(8080);

// 이런식으로 이벤트 리스너를 붙일 수 있다.
server.on('listening', () => {
    console.log('8080 포트에서 헬로방구링');
})

server.on('error', (err) => {
    console.error(`완전 에러, ${err}`);
})