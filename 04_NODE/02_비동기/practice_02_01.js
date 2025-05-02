// 실습 간단한 콜백 함수 구현
function youKnow(callback) {
  console.log('You Know ~');
  callback();
}

function sayMyName() {
  console.log('제 이름은 홍길동입니다.');
}

function sayMyDinner() {
  console.log('오늘 저녁 메뉴는 초밥입니다.');
}

youKnow(sayMyName);
youKnow(sayMyDinner);
youKnow(function () {
  console.log('내일 아침메뉴는 시리얼입니다.');
});
