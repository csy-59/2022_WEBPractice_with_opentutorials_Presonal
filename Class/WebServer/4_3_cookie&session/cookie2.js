const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';') // 쿠키로 들어온 것을(name='사람';age=20 등) 키 별로 나눔(;기준)
        .map(v => v.split('=')) // 자른 문자열 하나하나마다(v) =을 기준으로 나누어 다시 키와 값으로 이루어진 배열로 만든다.
        .reduce((acc, [k, v]) => { // 기존에 잇던 값(acc)에 키(k)에 해당하는 부분에 값(v)을 넣는다.
            acc[k.trim()] = decodeURIComponent(v);
            // 키의 앞뒤 공백을 자르고, 해당 부분에 값(url로 인코딩 되어 있는 값)을 디코딩 해서 넣는다.
            return acc;
        }, {});

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); // 쿠키의 값을 받아옴(배열)

    // 주소가 /login으로 시작하는 경우
    if (req.url.startsWith('/login')) {
        // 요청 url 분해하기(분해한 것 중에 query 부분만 받아옴)
        const { query } = url.parse(req.url);
        // 분해한 url 쿼리문 추출하여 객체로 만들기 (쿼리 부분에서 name 부분만 가져옴)
        const { name } = qs.parse(query);
        const expires = new Date(); // 현재 시간을 받아옴
        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': 
            `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if (cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset-utf-8' });
            res.end(err.message);
        }
    }
})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기 중입니다');
    })