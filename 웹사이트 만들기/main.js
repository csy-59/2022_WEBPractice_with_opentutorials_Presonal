const http = require('http');
const fs = require('fs');
const url = require('url');

function basicBodyTmeplateHTML(title, data){
    return `<h2>${title}</h2>
    <p>
        ${data}
    </p>`
}

function templateHTML(title, list, body) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <a href="/create">create</a>
            ${body}
        </body>
    </html>
    `
}

function makeFileList(fileList) {
    let list = '<ul>\n';
    fileList.forEach(filename => {
        list += `<li><a href="/?id=${filename}">${filename}</a></li>\n`
    })
    list += '</ul>';
    return list;
}

const app = http.createServer(function(request,response){
    let _url = request.url;
    const queryData = url.parse(_url, true).query;
    const pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/') {
        let title = queryData.id;
        let data = 'Empty.';
        
        let list;
        fs.readdir('./data', 'utf8', (err, fileList) => {
            list = makeFileList(fileList);
            if(queryData.id === undefined)
            {
                title = 'Welcome';
                data = 'Hello, Node.js';
                const pageTemplate = templateHTML(title, list, basicBodyTmeplateHTML(title, data));
                response.writeHead(200);
                response.end(pageTemplate);
            } else {
                fs.readFile(`./data/${title}`, 'utf8', (err, data) => {
                    const pageTemplate = templateHTML(title, list, basicBodyTmeplateHTML(title, data));
                    response.writeHead(200);
                    response.end(pageTemplate);
                });
            }
        })
    } else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(3000);