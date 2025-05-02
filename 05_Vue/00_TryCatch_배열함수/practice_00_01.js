// throw 예제
setInterval(function () {
  // parseInt: 소수점 버림
  // Math.random:
  const rand = parseInt(Math.random() * 10);
  console.log(`random Number: ${rand}`);

  if (rand > 5) return console.log('로또사자!');
  // 5 이상이면 에러 발생, 프로그램 종료
  throw new Error('망했어요');
}, 2000);
