const { fstat } = require('fs');
const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if(req.method === 'Get') {
            if(req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
        }
    }
})