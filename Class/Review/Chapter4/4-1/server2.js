const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try{
        const content = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(content);
    } catch (err) {
        console.error(`완전 오류벵구링: ${err}`);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf8'});
        res.end(err.message);
    }
}).listen(8080, () => {
    console.log('8080 대기 완료방구링');
})