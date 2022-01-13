'use strict';

class UserStorage {
  static #users = { // 은닉화
    id: ['wjs', '김코딩', '나개발'],
    psword: ['1234', '1234', '123456'],
    name: ['node', 'java', '서버'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
