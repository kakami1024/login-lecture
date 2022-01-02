'use strict';
// 모듈
const express = require('express');
const app = express();

// 라우팅 (index.js에서 내보낸것을 받아온다.)
const home = require('./src/routes/home'); // 폴더를 상대적으로 명시해줘야한다.

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home); // use => 미들웨어를 등록해주는 메소드

module.exports = app; // app 내보내기
