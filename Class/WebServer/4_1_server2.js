const http = require('http');
const fs = require('fs').promises;

http.createServer(async (request, response) => {
    try{
        const data = await fs.readFile('./Class/WebServer/4_1_server2.html');
        response.writeHead(200, {'Context-Type': 'text/html; charset=utf-8'});
        response.end(data);
    } catch(err) {
        console.error(err);
        response.writeHead(500, {'Context-Type': 'text/plain; charset=utf-8'});
        response.end(err.message);
    }
})
.listen(8081, () => {
    console.log("8081번 포트에서 대기중");
})