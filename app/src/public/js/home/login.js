'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('button'); // button tag는 하나여서 button을 가져올 수 있다.

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(req);
}
