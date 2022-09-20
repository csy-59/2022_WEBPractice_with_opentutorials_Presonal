const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

// 요청과 응답에 대한 정보를 콘솔에 기록합니다.
app.use(morgan('dev')); 
// 정적인 파일들을 제공하는 라우터 역할. 해당 파일(css나 html 같이)을 찾으면 해당 파일을 전송한다. (이 경우 다음 미들웨어는 실행하지 않는다)
app.use('/', express.static(path.join(__dirname, 'public'))); 
// 요청 본문에 있는 데이터를 해석해 req.body 객체로 만들어주는 미들웨어
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// 동봉된 쿠키를 해석해 req.cookies 객체로 만든다.
app.use(cookieParser(process.env.COOKIE_SECRET)) // ()안에 비밀키를 입력한다.
// 세션 관리용 미들웨어
app.use(session({
    resave: false, // 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지 설정
    saveUninitialized: false, // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정하는 것
    secret: process.env.COOKIE_SECRET, // 세션 쿠키의 서명. cookie의 비밀키과 동일하게 하는 것이 좋다.
    cookie: { // 세션 쿠키에 대한 옵션
        httpOnly: true, //클라이언트에서 쿠키 확인 불가.
        secure: false, // https가 아닌 환경에서도 사용 가능
    },
    name: 'session-cookie', // 세션 쿠키 이름
}))

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});
app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
})