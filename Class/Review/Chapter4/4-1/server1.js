const http = require('http');

http.createServer((req, res) => {
    // 응답에 대한 정보를 기록하는 메소드(성공적인 요청!, 응답에 대한 정보를 보내는데 콘텐츠의 형식이 html임을 알림)
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // 클라이언트에게 보낼 데이터. 버퍼도 보낼 수 있음
    res.write('<h1>Hello Node!</h1>');
    // 응답을 종료하는 함수. 해당 데이터를 보내고 응답 종료
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 대기중');
})