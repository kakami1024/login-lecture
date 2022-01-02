"use strict"

// controller

// home , login 이라는 컨트롤러 함수를 만들고,
// 외부에서 사용해준다.
const home = (req, res) => {
  res.render('home/index');
};

const login =  (req, res) => {
  res.render('home/login');
};
// 외부로 내보내기
module.exports = {
  home,
  login,
}
