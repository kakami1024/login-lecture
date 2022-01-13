'use strict';

const express = require('express');
const router = express.Router(); // router 사용

const ctrl = require('./home.ctrl'); // controller 가져오기

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

// 외부파일에서 사용할 수 있도록 해준다.
module.exports = router;
