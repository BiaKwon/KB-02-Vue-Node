// 비동기적 특성, callback함수 예제
function generateRandomNumber(callback) {
  console.log('숫자 생성중...');
  setTimeout(function () {
    // 0에서 10사이의 랜덤 숫자
    const randNum = Math.floor(Math.random() * 10) + 1;
    console.log(`생성된 숫자는 ${randNum}`);

    const result = randNum >= 5 ? '통과' : '탈락';

    callback(result);
  }, 1000);
}

generateRandomNumber(function (result) {
  console.log(`결과 : ${result}`);
  console.log(`결과 확인 완료`);
});
