// 비동기 처리_ 콜백함수
const fs = require('fs');

fs.readFile('readme.txt', function (err, data) {
  if (err) throw err;

  console.log('1번', data.toString());

  fs.readFile('readme.txt', function (err, data) {
    if (err) throw err;

    console.log('2번', data.toString());
  });
});
