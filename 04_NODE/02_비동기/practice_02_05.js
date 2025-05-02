// 실습 콜백 지옥 코드 비동기식 원하는 순서대로 구현
function callbackHell(callback) {
  callback();
}

const fs = require('fs');

callbackHell(function () {
  fs.readFile('readme.txt', function (err, data) {
    if (err) throw err;

    console.log('1번', data.toString());

    callbackHell(function () {
      fs.readFile('readme.txt', function (err, data) {
        if (err) throw err;

        console.log('2번', data.toString());
        callbackHell(function () {
          fs.readFile('readme.txt', function (err, data) {
            if (err) throw err;

            console.log('3번', data.toString());
            callbackHell(function () {
              fs.readFile('readme.txt', function (err, data) {
                if (err) throw err;

                console.log('4번', data.toString());
              });
            });
          });
        });
      });
    });
  });
});
