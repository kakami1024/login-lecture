'use strict';
// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 라우팅 (index.js에서 내보낸것을 받아온다.)
const home = require('./src/routes/home'); // 폴더를 상대적으로 명시해줘야한다.

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`)); // js 파일 연결하기
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use('/', home); // use => 미들웨어를 등록해주는 메소드

module.exports = app; // app 내보내기
