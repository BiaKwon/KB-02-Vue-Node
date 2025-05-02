// 콜백 함수 대신 Promise 이용한 예제
const fs = require('fs').promises;

fs.readFile('readme.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('readme.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('readme.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('readme.txt');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('readme.txt');
  })
  .catch((err) => {
    throw err;
  });
